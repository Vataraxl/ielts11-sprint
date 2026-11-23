import {
  EXAM_META,
  ROOKIE_SWITCHES,
  SPRINT_PLAN,
  AUDIO_RESOURCES,
  BILI_ALL_AUDIO_URL,
  LISTENING_SECTIONS,
  READING_ERRATUM,
  READING_STRATEGIES,
  READING_PASSAGES,
  WRITING_GUIDE,
  SPELLING_BANK
} from './data.js';

const STORAGE_KEY = 'ielts11_sprint_v1';
const VALID_VIEWS = ['plan', 'listening', 'reading', 'writing', 'quiz'];

/** HTML 安全转义 */
function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/** 读取本地状态（无痕/禁用存储下兜底） */
function loadState() {
  const fallback = {
    examSlot: 'wed-am',
    checkedTasks: [],
    starred: [],
    doneItems: [],
    wrongWords: [],
    listeningFilter: 'all',
    readingFilter: 'all',
    quizFilter: 'all',
    quizIndex: 0
  };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return { ...fallback, ...parsed };
  } catch {
    return fallback;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // 隐私模式阻止存储时静默降级
  }
}

const state = loadState();
const starredSet = new Set(state.starred);
const doneSet = new Set(state.doneItems);
const checkedTaskSet = new Set(state.checkedTasks);
const wrongWordSet = new Set(state.wrongWords);

function syncSetsToState() {
  state.starred = [...starredSet];
  state.doneItems = [...doneSet];
  state.checkedTasks = [...checkedTaskSet];
  state.wrongWords = [...wrongWordSet];
  saveState();
  updateOverallProgress();
}

/* =========================================================
 * 轻提示 Toast & 一键复制
 * ========================================================= */
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.hidden = true;
  }, 2200);
}

async function copyText(text, okMsg = '已复制到剪贴板') {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      showToast(okMsg);
      return;
    }
  } catch {
    // 继续走 textarea 回退
  }
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast(okMsg);
  } catch {
    showToast('复制失败，请长按文本手动复制');
  }
  ta.remove();
}

/* =========================================================
 * 考试倒计时与总进度条
 * ========================================================= */
function updateCountdown() {
  const option = EXAM_META.examOptions.find((o) => o.id === state.examSlot) || EXAM_META.examOptions[0];
  const targetMs = new Date(option.iso).getTime();
  const diffMs = targetMs - Date.now();
  const pill = document.getElementById('countdown-pill');

  if (diffMs <= 0) {
    pill.textContent = '考试时间已到 · 稳住心态';
    return;
  }
  const totalMinutes = Math.floor(diffMs / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const mins = totalMinutes % 60;
  pill.textContent = days > 0 ? `距开考 ${days}天 ${hours}h ${mins}m` : `距开考 ${hours}小时 ${mins}分`;
}

function updateOverallProgress() {
  const totalChecklist = SPRINT_PLAN.reduce((sum, day) => sum + day.tasks.length, 0);
  const totalItems = totalChecklist + LISTENING_SECTIONS.length + READING_PASSAGES.length + WRITING_GUIDE.prompts.length;
  const completed = checkedTaskSet.size + doneSet.size;
  const pct = totalItems > 0 ? Math.min(100, Math.round((completed / totalItems) * 100)) : 0;

  const progressEl = document.getElementById('overall-progress');
  const textEl = document.getElementById('progress-text');
  progressEl.value = pct;
  progressEl.textContent = `${pct}%`;
  textEl.textContent = `${pct}% (${completed}/${totalItems})`;
}

/* =========================================================
 * 5 视图切换与路由同步
 * ========================================================= */
function switchView(viewId, updateHash = true) {
  const target = VALID_VIEWS.includes(viewId) ? viewId : 'plan';
  for (const panel of document.querySelectorAll('.view-panel')) {
    panel.hidden = panel.id !== `view-${target}`;
  }
  for (const btn of document.querySelectorAll('.bottom-nav .nav-btn')) {
    if (btn.dataset.view === target) {
      btn.setAttribute('aria-current', 'page');
    } else {
      btn.removeAttribute('aria-current');
    }
  }
  if (updateHash) {
    history.replaceState(null, '', `#${target}`);
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* =========================================================
 * 便携模考计时器（20m / 40m，日程与写作页共享同步）
 * ========================================================= */
const timerState = {
  totalSec: 20 * 60,
  remainSec: 20 * 60,
  running: false,
  visible: false,
  intervalId: null
};

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function renderTimerBars() {
  const bars = [
    { bar: 'plan-timer-bar', display: 'plan-timer-display' },
    { bar: 'writing-timer-bar', display: 'writing-timer-display' }
  ];
  for (const { bar, display } of bars) {
    const barEl = document.getElementById(bar);
    const dispEl = document.getElementById(display);
    barEl.hidden = !timerState.visible;
    dispEl.textContent = formatTime(timerState.remainSec);
    const toggleBtn = barEl.querySelector('[data-timer-action="toggle"]');
    if (toggleBtn) {
      toggleBtn.textContent = timerState.running ? '暂停' : '继续';
    }
  }
}

function startTimerMinutes(mins) {
  clearInterval(timerState.intervalId);
  timerState.totalSec = mins * 60;
  timerState.remainSec = mins * 60;
  timerState.visible = true;
  timerState.running = true;
  timerState.intervalId = setInterval(tickTimer, 1000);
  renderTimerBars();
  showToast(`已启动 ${mins} 分钟倒计时`);
}

function tickTimer() {
  if (!timerState.running) return;
  if (timerState.remainSec > 0) {
    timerState.remainSec -= 1;
    renderTimerBars();
    if (timerState.remainSec === 0) {
      timerState.running = false;
      clearInterval(timerState.intervalId);
      renderTimerBars();
      showToast('⏰ 计时结束，请检查字数与拼写！');
    }
  }
}

function handleTimerAction(action) {
  if (action === 'toggle') {
    if (timerState.remainSec === 0) return;
    timerState.running = !timerState.running;
    if (timerState.running) {
      clearInterval(timerState.intervalId);
      timerState.intervalId = setInterval(tickTimer, 1000);
    } else {
      clearInterval(timerState.intervalId);
    }
  } else if (action === 'reset') {
    clearInterval(timerState.intervalId);
    timerState.remainSec = timerState.totalSec;
    timerState.running = false;
  } else if (action === 'close') {
    clearInterval(timerState.intervalId);
    timerState.running = false;
    timerState.visible = false;
  }
  renderTimerBars();
}

/* =========================================================
 * 渲染：1. 日程 & 考情页
 * ========================================================= */
function renderPlanView() {
  const rulesContainer = document.getElementById('exam-rules-container');
  rulesContainer.innerHTML = `
    <h3>期末考情分值分布（来源：课堂考情图）</h3>
    <div class="rule-grid">
      ${EXAM_META.rules
        .map(
          (r) => `
        <div class="rule-row">
          <span class="rule-part">${escapeHtml(r.part)} · ${escapeHtml(r.rule)}</span>
          <span class="rule-desc">${escapeHtml(r.strategy)}</span>
        </div>
      `
        )
        .join('')}
    </div>
  `;

  const switchesContainer = document.getElementById('rookie-switches-container');
  switchesContainer.innerHTML = ROOKIE_SWITCHES.map(
    (item, idx) => `
    <details${idx === 3 ? ' open' : ''}>
      <summary>
        <span class="summary-main">
          <span class="summary-title">${escapeHtml(item.title)}</span>
        </span>
      </summary>
      <div class="details-body">
        <p class="small-note">${escapeHtml(item.detail)}</p>
      </div>
    </details>
  `
  ).join('');

  const sprintContainer = document.getElementById('sprint-plan-container');
  sprintContainer.innerHTML = SPRINT_PLAN.map(
    (day) => `
    <article class="card">
      <h3>${escapeHtml(day.dayLabel)}</h3>
      <ul class="checklist">
        ${day.tasks
          .map((t) => {
            const checked = checkedTaskSet.has(t.id);
            return `
            <li class="check-item${checked ? ' is-done' : ''}" data-task-id="${escapeHtml(t.id)}">
              <label class="check-label">
                <input type="checkbox" class="plan-checkbox" data-task-id="${escapeHtml(t.id)}"${checked ? ' checked' : ''}>
                <span><span class="check-time">${escapeHtml(t.time)}</span>${escapeHtml(t.title)}</span>
              </label>
              <p class="check-desc">${escapeHtml(t.desc)}</p>
            </li>
          `;
          })
          .join('')}
      </ul>
    </article>
  `
  ).join('');
}

/* =========================================================
 * 通用：筛选按钮组 & 听力/阅读手风琴渲染
 * ========================================================= */
function renderFilterButtons(containerId, currentFilter, onChange) {
  const options = [
    { id: 'all', label: '全部' },
    { id: '1', label: 'Test 1' },
    { id: '2', label: 'Test 2' },
    { id: '3', label: 'Test 3' },
    { id: '4', label: 'Test 4' },
    { id: 'starred', label: '★ 老师范围' }
  ];
  const container = document.getElementById(containerId);
  container.innerHTML = options
    .map(
      (opt) => `
    <button type="button" class="btn btn-compact" data-filter="${opt.id}" aria-pressed="${currentFilter === opt.id ? 'true' : 'false'}">${opt.label}</button>
  `
    )
    .join('');

  container.onclick = (e) => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn) return;
    onChange(btn.dataset.filter);
  };
}

function passesFilter(item, filterValue) {
  if (filterValue === 'all') return true;
  if (filterValue === 'starred') return starredSet.has(item.id);
  return String(item.test) === filterValue;
}

function renderListeningAudioHub() {
  const hub = document.getElementById('listening-audio-hub');
  if (!hub) return;
  hub.innerHTML = `
    <div class="toolbar">
      <h3>🎧《剑11》在线听力音频直达（已实测可用）</h3>
      <a class="btn btn-compact" href="${escapeHtml(BILI_ALL_AUDIO_URL)}" target="_blank" rel="noopener noreferrer">📺 B站全套搜词直达</a>
    </div>
    <p class="small-note">海外主通道为 <strong>IELTS Training Online</strong>（免登录，每套内置 Section 1–4 独立 MP3 播放器）；国内也可打开 B站或「雅思哥 / 雅思考满分 / 小站雅思」App 搜 <code>剑桥雅思11 听力</code>。</p>
    <div class="audio-links-grid">
      ${AUDIO_RESOURCES.map(
        (res) => `
        <a class="btn btn-compact btn-primary" href="${escapeHtml(res.url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(res.note)}">${escapeHtml(res.label)}</a>
      `
      ).join('')}
    </div>
  `;
}

function renderListeningList() {
  const container = document.getElementById('listening-list');
  const filtered = LISTENING_SECTIONS.filter((sec) => passesFilter(sec, state.listeningFilter));

  if (filtered.length === 0) {
    container.innerHTML = `<div class="card"><p class="small-note">当前筛选下暂无条目。可在全部列表中展开卡片点击「★ 标为重点」。</p></div>`;
    return;
  }

  container.innerHTML = filtered
    .map((sec) => {
      const isStar = starredSet.has(sec.id);
      const isDone = doneSet.has(sec.id);
      return `
      <details data-item-id="${sec.id}">
        <summary>
          <span class="summary-main">
            <span class="badge badge-brand">T${sec.test}·S${sec.section}</span>
            <span class="summary-title">${escapeHtml(sec.title)}</span>
            <span class="summary-sub">${escapeHtml(sec.titleZh)}</span>
            ${isStar ? '<span class="badge badge-hot dynamic-badge">★ 重点</span>' : ''}
            ${isDone ? '<span class="badge badge-ok dynamic-badge">✓ 已过</span>' : ''}
          </span>
        </summary>
        <div class="details-body">
          <div class="meta-row">
            <span>${escapeHtml(sec.bookPage)}</span>
            ${sec.types.map((t) => `<span class="badge">${escapeHtml(t)}</span>`).join('')}
          </div>
          <div class="toolbar">
            <div class="filter-group">
              <button type="button" class="btn btn-compact btn-star" data-toggle-star="${sec.id}" aria-pressed="${isStar}">
                ${isStar ? '★ 已标重点' : '☆ 老师范围标星'}
              </button>
              <button type="button" class="btn btn-compact btn-done" data-toggle-done="${sec.id}" aria-pressed="${isDone}">
                ${isDone ? '✓ 已复习' : '标记已过'}
              </button>
            </div>
            <div class="filter-group">
              <a class="btn btn-compact btn-primary" href="${escapeHtml(sec.audioPageUrl)}" target="_blank" rel="noopener noreferrer">🎧 在线听本套</a>
              <a class="btn btn-compact" href="${escapeHtml(sec.biliSearchUrl)}" target="_blank" rel="noopener noreferrer">📺 B站搜本节</a>
              <button type="button" class="btn btn-compact" data-copy-text="${escapeHtml(sec.biliQuery)}">复制搜词</button>
            </div>
          </div>
          <div class="quote-block">
            <strong>⚠️ 陷阱与定位重点：</strong>
            <span>${escapeHtml(sec.traps)}</span>
          </div>
          <ul class="answer-list">
            ${sec.answers
              .map(
                (ans) => `
              <li class="answer-row">
                <span class="q-num">Q${escapeHtml(ans.q)}</span>
                <span class="answer-value" tabindex="0">${escapeHtml(ans.a)}</span>
                <span class="answer-note">${escapeHtml(ans.note)}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
      </details>
    `;
    })
    .join('');
}

function renderReadingView() {
  const errBox = document.getElementById('reading-erratum-box');
  errBox.innerHTML = `
    <strong>${escapeHtml(READING_ERRATUM.title)}</strong>
    <p class="small-note" style="color: inherit">${escapeHtml(READING_ERRATUM.detail)}</p>
    <ul>
      ${READING_ERRATUM.fixes.map((f) => `<li>${escapeHtml(f)}</li>`).join('')}
    </ul>
  `;

  const stratBox = document.getElementById('reading-strategies-box');
  stratBox.innerHTML = READING_STRATEGIES.map(
    (st) => `
    <details>
      <summary>
        <span class="summary-main">
          <span class="badge badge-brand">技巧卡</span>
          <span class="summary-title">${escapeHtml(st.name)}</span>
        </span>
      </summary>
      <div class="details-body">
        <p class="small-note">${escapeHtml(st.tip)}</p>
      </div>
    </details>
  `
  ).join('');
}

function renderReadingList() {
  const container = document.getElementById('reading-list');
  const filtered = READING_PASSAGES.filter((p) => passesFilter(p, state.readingFilter));

  if (filtered.length === 0) {
    container.innerHTML = `<div class="card"><p class="small-note">当前筛选下暂无条目。可在全部列表中展开文章点击「★ 老师范围标星」。</p></div>`;
    return;
  }

  container.innerHTML = filtered
    .map((p) => {
      const isStar = starredSet.has(p.id);
      const isDone = doneSet.has(p.id);
      return `
      <details data-item-id="${p.id}">
        <summary>
          <span class="summary-main">
            <span class="badge badge-brand">T${p.test}·P${p.passage}</span>
            <span class="summary-title">${escapeHtml(p.title)}</span>
            <span class="summary-sub">${escapeHtml(p.titleZh)}</span>
            <span class="badge">${escapeHtml(p.recommend)}</span>
            ${isStar ? '<span class="badge badge-hot dynamic-badge">★ 重点</span>' : ''}
            ${isDone ? '<span class="badge badge-ok dynamic-badge">✓ 已过</span>' : ''}
          </span>
        </summary>
        <div class="details-body">
          <div class="meta-row">
            <span>${escapeHtml(p.bookPage)}</span>
            ${p.types.map((t) => `<span class="badge">${escapeHtml(t)}</span>`).join('')}
          </div>
          <div class="toolbar">
            <div class="filter-group">
              <button type="button" class="btn btn-compact btn-star" data-toggle-star="${p.id}" aria-pressed="${isStar}">
                ${isStar ? '★ 已标重点' : '☆ 老师范围标星'}
              </button>
              <button type="button" class="btn btn-compact btn-done" data-toggle-done="${p.id}" aria-pressed="${isDone}">
                ${isDone ? '✓ 已复习' : '标记已过'}
              </button>
            </div>
          </div>
          <p class="small-note">${escapeHtml(p.summary)}</p>
          <ul class="answer-list">
            ${p.answers
              .map(
                (ans) => `
              <li class="answer-row">
                <span class="q-num">Q${escapeHtml(ans.q)}</span>
                <span class="answer-value" tabindex="0">${escapeHtml(ans.a)}</span>
                <span class="answer-note">${escapeHtml(ans.note)}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
      </details>
    `;
    })
    .join('');
}

/* =========================================================
 * 渲染：4. 写作双课件 & 8 题提纲
 * ========================================================= */
function renderWritingPrompts() {
  const wrap = document.getElementById('writing-prompts-inner');
  wrap.innerHTML = `
    <p class="small-note">⭐ 标注为老师 PPT 课件直接收录的真题。建议把全部 8 题的<strong>首段改写 + 论点分组</strong>过一遍，标星老师圈定的 <code>n</code> 篇集中背诵。</p>
    <div class="accordion">
      ${WRITING_GUIDE.prompts
        .map((w) => {
          const isStar = starredSet.has(w.id);
          const isDone = doneSet.has(w.id);
          return `
          <details${w.isHot ? '' : ''}>
            <summary>
              <span class="summary-main">
                <span class="badge badge-brand">T${w.test}·${escapeHtml(w.task)}</span>
                <span class="summary-title">${escapeHtml(w.title)}</span>
                ${w.isHot ? '<span class="badge badge-hot">⭐ 课件重点</span>' : ''}
                ${isStar ? '<span class="badge badge-hot dynamic-badge">★ 考前必背</span>' : ''}
                ${isDone ? '<span class="badge badge-ok dynamic-badge">✓ 已过</span>' : ''}
              </span>
            </summary>
            <div class="details-body">
              <div class="meta-row">
                <span>${escapeHtml(w.bookPage)}</span>
              </div>
              <div class="toolbar">
                <div class="filter-group">
                  <button type="button" class="btn btn-compact btn-star" data-toggle-star="${w.id}" aria-pressed="${isStar}">
                    ${isStar ? '★ 已标考前必背' : '☆ 老师范围标星'}
                  </button>
                  <button type="button" class="btn btn-compact btn-done" data-toggle-done="${w.id}" aria-pressed="${isDone}">
                    ${isDone ? '✓ 已练完' : '标记已练'}
                  </button>
                </div>
                <button type="button" class="btn btn-compact" data-copy-text="${escapeHtml(w.intro + '\n\n' + w.overview)}">复制开头+综述</button>
              </div>
              <div class="quote-block">
                <strong>原题：</strong>
                <span>${escapeHtml(w.promptEn)}</span>
              </div>
              <div class="card card-muted">
                <strong>高分首段改写（可直接借用）：</strong>
                <p class="essay-text">${escapeHtml(w.intro)}</p>
                <strong>${w.task === 'Task 1' ? 'Overview 总体概述' : '推荐立场'}：</strong>
                <p class="essay-text">${escapeHtml(w.overview)}</p>
              </div>
              <div>
                <strong>主体段拆解：</strong>
                <ul>
                  ${w.structure.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
                </ul>
              </div>
              <p class="small-note"><strong>高频加分词伙：</strong><code>${escapeHtml(w.vocab)}</code></p>
            </div>
          </details>
        `;
        })
        .join('')}
    </div>
  `;
}

function renderWritingTask1Guide() {
  const t1 = WRITING_GUIDE.task1;
  const wrap = document.getElementById('writing-task1-inner');
  wrap.innerHTML = `
    <div class="card">
      <h3>小作文三步法核心规则</h3>
      <p class="small-note">${escapeHtml(t1.subtitle)}</p>
      <p class="small-note"><strong>20 分钟节奏：</strong>${escapeHtml(t1.timePlan)}</p>
      <ul>
        ${t1.rules.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}
      </ul>
    </div>
    ${t1.frames
      .map(
        (f) => `
      <div class="card">
        <div class="toolbar">
          <strong>${escapeHtml(f.label)}</strong>
          <button type="button" class="btn btn-compact" data-copy-text="${escapeHtml(f.text)}">复制句型</button>
        </div>
        <p class="essay-text">${escapeHtml(f.text)}</p>
      </div>
    `
      )
      .join('')}
    <div class="card card-muted">
      <h3>考前交卷自查（对标 Band 9 清单）</h3>
      <ul>
        ${t1.checklist.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}
      </ul>
    </div>
  `;
}

function renderWritingTask2Guide() {
  const t2 = WRITING_GUIDE.task2;
  const wrap = document.getElementById('writing-task2-inner');
  wrap.innerHTML = `
    <div class="card">
      <h3>大作文四步成文骨架</h3>
      <p class="small-note">${escapeHtml(t2.subtitle)}</p>
      <ul>
        ${t2.fourSteps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
      </ul>
    </div>
    <div class="alert-card">
      <strong>⚠️ 4.5 分 vs 7 分高频病句避坑（考前必看）</strong>
      <ul>
        ${t2.pitfalls.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}
      </ul>
    </div>
    ${t2.frames
      .map(
        (f) => `
      <div class="card">
        <div class="toolbar">
          <strong>${escapeHtml(f.label)}</strong>
          <button type="button" class="btn btn-compact" data-copy-text="${escapeHtml(f.text)}">复制句型</button>
        </div>
        <p class="essay-text">${escapeHtml(f.text)}</p>
      </div>
    `
      )
      .join('')}
    <div class="card">
      <div class="toolbar">
        <h3>${escapeHtml(t2.modelEssay.title)}</h3>
        <button type="button" class="btn btn-compact" data-copy-text="${escapeHtml(t2.modelEssay.text)}">复制范文</button>
      </div>
      <p class="essay-text">${escapeHtml(t2.modelEssay.text)}</p>
    </div>
  `;
}

function setupWritingTabs() {
  const tablist = document.querySelector('.sub-tablist');
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const panels = tabs.map((tab) => document.getElementById(tab.id.replace('tab-', 'panel-')));

  function activateTab(selectedTab, moveFocus = false) {
    tabs.forEach((tab, idx) => {
      const isSelected = tab === selectedTab;
      tab.setAttribute('aria-selected', String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      const panel = panels[idx];
      if (isSelected) {
        panel.hidden = false;
        panel.tabIndex = 0;
        tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        if (moveFocus) tab.focus();
      } else {
        panel.hidden = 'until-found';
        panel.removeAttribute('tabindex');
      }
    });
  }

  tablist.addEventListener('click', (e) => {
    const tab = e.target.closest('[role="tab"]');
    if (tab) activateTab(tab, false);
  });

  tablist.addEventListener('keydown', (e) => {
    const idx = tabs.indexOf(document.activeElement);
    if (idx === -1) return;
    let nextIdx = null;
    if (e.key === 'ArrowRight') nextIdx = (idx + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') nextIdx = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') nextIdx = 0;
    else if (e.key === 'End') nextIdx = tabs.length - 1;
    if (nextIdx !== null) {
      e.preventDefault();
      activateTab(tabs[nextIdx], true);
    }
  });

  // 浏览器 Ctrl+F 页面内查找命中隐藏面板时自动切换对应标签
  panels.forEach((panel, idx) => {
    panel.addEventListener('beforematch', () => {
      activateTab(tabs[idx], false);
    });
  });
}

/* =========================================================
 * 5. 听写拼写自测引擎（Web Speech API + 降级文字提示）
 * ========================================================= */
function getQuizPool() {
  const f = state.quizFilter;
  if (f === 'hard') return SPELLING_BANK.filter((w) => w.isHard);
  if (f === 'wrong') return SPELLING_BANK.filter((w) => wrongWordSet.has(w.id));
  if (['1', '2', '3', '4'].includes(f)) {
    return SPELLING_BANK.filter((w) => String(w.test) === f);
  }
  return SPELLING_BANK;
}

function renderQuizFilters() {
  const options = [
    { id: 'all', label: `全部 (${SPELLING_BANK.length})` },
    { id: 'hard', label: '高频易错' },
    { id: '1', label: 'T1' },
    { id: '2', label: 'T2' },
    { id: '3', label: 'T3' },
    { id: '4', label: 'T4' },
    { id: 'wrong', label: `错词本 (${wrongWordSet.size})` }
  ];
  const container = document.getElementById('quiz-filters');
  container.innerHTML = options
    .map(
      (opt) => `
    <button type="button" class="btn btn-compact" data-quiz-filter="${opt.id}" aria-pressed="${state.quizFilter === opt.id ? 'true' : 'false'}">${opt.label}</button>
  `
    )
    .join('');
}

function speakWord(text, rate = 1.0) {
  if (!('speechSynthesis' in window)) {
    showToast('当前浏览器不支持朗读，请看下方句子与中文释义拼写');
    return;
  }
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const enGb = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('en-gb'));
    const enAny = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('en'));
    if (enGb) utter.voice = enGb;
    else if (enAny) utter.voice = enAny;
    utter.lang = 'en-GB';
    utter.rate = rate;
    window.speechSynthesis.speak(utter);
  } catch {
    showToast('语音播报不可用，请根据语境提示直接拼写');
  }
}

function renderQuizCard() {
  const pool = getQuizPool();
  const counterEl = document.getElementById('quiz-counter');
  const tagEl = document.getElementById('quiz-tag');
  const hardEl = document.getElementById('quiz-hard-badge');
  const wrongCountEl = document.getElementById('quiz-wrong-count');
  const sentenceEl = document.getElementById('quiz-sentence');
  const zhEl = document.getElementById('quiz-zh');
  const inputEl = document.getElementById('quiz-input');
  const fbEl = document.getElementById('quiz-feedback');

  wrongCountEl.textContent = `错词本：${wrongWordSet.size} 词`;

  if (pool.length === 0) {
    counterEl.textContent = '0 / 0';
    tagEl.textContent = '暂无错词';
    hardEl.hidden = true;
    sentenceEl.textContent = '太棒了，错词本目前为空！可以切回「高频易错」或「全部」继续巩固。';
    zhEl.textContent = '';
    inputEl.value = '';
    inputEl.disabled = true;
    fbEl.hidden = true;
    return;
  }

  inputEl.disabled = false;
  if (state.quizIndex >= pool.length || state.quizIndex < 0) {
    state.quizIndex = 0;
  }

  const item = pool[state.quizIndex];
  counterEl.textContent = `${state.quizIndex + 1} / ${pool.length}`;
  tagEl.textContent = `Test ${item.test} · ${item.section}`;
  hardEl.hidden = !item.isHard;
  sentenceEl.textContent = item.sentence;
  zhEl.textContent = `释义：${item.zh}`;
  inputEl.value = '';
  fbEl.hidden = true;
  fbEl.className = 'quiz-feedback';
}

function normalizeAnswer(str) {
  return str.trim().toLowerCase().replace(/\s+/g, ' ');
}

function setupQuizHandlers() {
  document.getElementById('quiz-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-quiz-filter]');
    if (!btn) return;
    state.quizFilter = btn.dataset.quizFilter;
    state.quizIndex = 0;
    saveState();
    renderQuizFilters();
    renderQuizCard();
  });

  document.getElementById('quiz-speak-btn').addEventListener('click', () => {
    const pool = getQuizPool();
    if (pool[state.quizIndex]) speakWord(pool[state.quizIndex].word, 1.0);
  });

  document.getElementById('quiz-slow-btn').addEventListener('click', () => {
    const pool = getQuizPool();
    if (pool[state.quizIndex]) speakWord(pool[state.quizIndex].word, 0.8);
  });

  document.getElementById('quiz-hint-btn').addEventListener('click', () => {
    const pool = getQuizPool();
    const item = pool[state.quizIndex];
    if (!item) return;
    const fbEl = document.getElementById('quiz-feedback');
    fbEl.hidden = false;
    fbEl.className = 'quiz-feedback';
    fbEl.textContent = `提示：首字母 "${item.word[0]}"（共 ${item.word.length} 字符）｜${item.tip}`;
  });

  document.getElementById('quiz-skip-btn').addEventListener('click', () => {
    const pool = getQuizPool();
    const item = pool[state.quizIndex];
    if (!item) return;
    const fbEl = document.getElementById('quiz-feedback');
    fbEl.hidden = false;
    fbEl.className = 'quiz-feedback is-wrong';
    fbEl.textContent = `标准答案：${item.word}（已加入错词本）｜${item.tip}`;
    wrongWordSet.add(item.id);
    syncSetsToState();
    renderQuizFilters();
    document.getElementById('quiz-wrong-count').textContent = `错词本：${wrongWordSet.size} 词`;
  });

  document.getElementById('quiz-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const pool = getQuizPool();
    const item = pool[state.quizIndex];
    if (!item) return;
    const val = normalizeAnswer(document.getElementById('quiz-input').value);
    if (!val) {
      showToast('请先输入拼写');
      return;
    }

    const fbEl = document.getElementById('quiz-feedback');
    fbEl.hidden = false;
    const isOk = item.accepted.some((acc) => normalizeAnswer(acc) === val);
    if (isOk) {
      fbEl.className = 'quiz-feedback is-correct';
      fbEl.textContent = `✅ 正确！标准写法：${item.word}｜${item.tip}`;
      if (wrongWordSet.has(item.id)) {
        wrongWordSet.delete(item.id);
        syncSetsToState();
        renderQuizFilters();
      }
    } else {
      fbEl.className = 'quiz-feedback is-wrong';
      fbEl.textContent = `❌ 拼错了（你写了 "${val}"）→ 正确：${item.word}｜${item.tip}`;
      wrongWordSet.add(item.id);
      syncSetsToState();
      renderQuizFilters();
    }
    document.getElementById('quiz-wrong-count').textContent = `错词本：${wrongWordSet.size} 词`;
  });

  document.getElementById('quiz-prev-btn').addEventListener('click', () => {
    const pool = getQuizPool();
    if (pool.length === 0) return;
    state.quizIndex = (state.quizIndex - 1 + pool.length) % pool.length;
    saveState();
    renderQuizCard();
  });

  document.getElementById('quiz-next-btn').addEventListener('click', () => {
    const pool = getQuizPool();
    if (pool.length === 0) return;
    state.quizIndex = (state.quizIndex + 1) % pool.length;
    saveState();
    renderQuizCard();
  });
}

/* =========================================================
 * 全局事件委托（打卡 / 标星 / 标记已过 / 遮罩 / 导航 / 计时器 / 复制）
 * ========================================================= */
function bindGlobalEvents() {
  // 底部主导航
  document.querySelector('.bottom-nav').addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-btn[data-view]');
    if (!btn) return;
    switchView(btn.dataset.view, true);
  });

  // 考试时间切换
  const examSelect = document.getElementById('exam-slot');
  examSelect.value = state.examSlot;
  examSelect.addEventListener('change', () => {
    state.examSlot = examSelect.value;
    saveState();
    updateCountdown();
  });

  // 模考计时器按钮
  document.addEventListener('click', (e) => {
    const startBtn = e.target.closest('[data-timer-min]');
    if (startBtn) {
      startTimerMinutes(Number(startBtn.dataset.timerMin));
      return;
    }
    const actBtn = e.target.closest('[data-timer-action]');
    if (actBtn) {
      handleTimerAction(actBtn.dataset.timerAction);
      return;
    }

    // 复制文本
    const copyBtn = e.target.closest('[data-copy-text]');
    if (copyBtn) {
      copyText(copyBtn.dataset.copyText);
      return;
    }

    // 标星 ★
    const starBtn = e.target.closest('[data-toggle-star]');
    if (starBtn) {
      const id = starBtn.dataset.toggleStar;
      if (starredSet.has(id)) starredSet.delete(id);
      else starredSet.add(id);
      syncSetsToState();
      refreshItemDecorations(id);
      return;
    }

    // 已过 ✓
    const doneBtn = e.target.closest('[data-toggle-done]');
    if (doneBtn) {
      const id = doneBtn.dataset.toggleDone;
      if (doneSet.has(id)) doneSet.delete(id);
      else doneSet.add(id);
      syncSetsToState();
      refreshItemDecorations(id);
      return;
    }

    // 遮罩状态下点击单个答案揭晓
    const ansEl = e.target.closest('.is-masked .answer-value');
    if (ansEl) {
      ansEl.classList.toggle('revealed');
    }
  });

  // 日程打卡勾选
  document.getElementById('sprint-plan-container').addEventListener('change', (e) => {
    const cb = e.target.closest('.plan-checkbox');
    if (!cb) return;
    const id = cb.dataset.taskId;
    const li = cb.closest('.check-item');
    if (cb.checked) {
      checkedTaskSet.add(id);
      li.classList.add('is-done');
    } else {
      checkedTaskSet.delete(id);
      li.classList.remove('is-done');
    }
    syncSetsToState();
  });

  // 听力 & 阅读遮罩开关
  const lMaskBtn = document.getElementById('listening-mask-btn');
  lMaskBtn.addEventListener('click', () => {
    const list = document.getElementById('listening-list');
    const next = lMaskBtn.getAttribute('aria-pressed') !== 'true';
    lMaskBtn.setAttribute('aria-pressed', String(next));
    lMaskBtn.textContent = next ? '遮罩自测：开（点击答案揭晓）' : '遮罩自测：关';
    list.classList.toggle('is-masked', next);
    if (!next) {
      list.querySelectorAll('.revealed').forEach((el) => el.classList.remove('revealed'));
    }
  });

  const rMaskBtn = document.getElementById('reading-mask-btn');
  rMaskBtn.addEventListener('click', () => {
    const list = document.getElementById('reading-list');
    const next = rMaskBtn.getAttribute('aria-pressed') !== 'true';
    rMaskBtn.setAttribute('aria-pressed', String(next));
    rMaskBtn.textContent = next ? '遮罩自测：开（点击答案揭晓）' : '遮罩自测：关';
    list.classList.toggle('is-masked', next);
    if (!next) {
      list.querySelectorAll('.revealed').forEach((el) => el.classList.remove('revealed'));
    }
  });

  window.addEventListener('hashchange', () => {
    const h = location.hash.replace('#', '');
    if (VALID_VIEWS.includes(h)) switchView(h, false);
  });
}

/** 仅刷新对应类别列表但保留展开状态，避免点击标星时页面跳回折叠 */
function refreshItemDecorations(id) {
  const isStar = starredSet.has(id);
  const isDone = doneSet.has(id);

  document.querySelectorAll(`[data-toggle-star="${id}"]`).forEach((btn) => {
    btn.setAttribute('aria-pressed', String(isStar));
    btn.textContent = isStar ? (id.startsWith('w-') ? '★ 已标考前必背' : '★ 已标重点') : '☆ 老师范围标星';
  });

  document.querySelectorAll(`[data-toggle-done="${id}"]`).forEach((btn) => {
    btn.setAttribute('aria-pressed', String(isDone));
    btn.textContent = isDone ? (id.startsWith('w-') ? '✓ 已练完' : '✓ 已复习') : (id.startsWith('w-') ? '标记已练' : '标记已过');
  });

  // 同步 summary 上的徽章显示
  const detailsEl = document.querySelector(`[data-toggle-star="${id}"]`)?.closest('details');
  if (detailsEl) {
    const summaryMain = detailsEl.querySelector('.summary-main');
    if (summaryMain) {
      summaryMain.querySelectorAll('.dynamic-badge').forEach((b) => b.remove());
      if (isStar) {
        const span = document.createElement('span');
        span.className = 'badge badge-hot dynamic-badge';
        span.textContent = '★ 重点';
        summaryMain.appendChild(span);
      }
      if (isDone) {
        const span = document.createElement('span');
        span.className = 'badge badge-ok dynamic-badge';
        span.textContent = '✓ 已过';
        summaryMain.appendChild(span);
      }
    }
  }
}

/* =========================================================
 * 启动初始化
 * ========================================================= */
function init() {
  function applyListeningFilter(next) {
    state.listeningFilter = next;
    saveState();
    renderFilterButtons('listening-filters', next, applyListeningFilter);
    renderListeningList();
  }

  function applyReadingFilter(next) {
    state.readingFilter = next;
    saveState();
    renderFilterButtons('reading-filters', next, applyReadingFilter);
    renderReadingList();
  }

  renderPlanView();
  renderListeningAudioHub();
  renderFilterButtons('listening-filters', state.listeningFilter, applyListeningFilter);
  renderListeningList();

  renderReadingView();
  renderFilterButtons('reading-filters', state.readingFilter, applyReadingFilter);
  renderReadingList();

  renderWritingPrompts();
  renderWritingTask1Guide();
  renderWritingTask2Guide();
  setupWritingTabs();

  renderQuizFilters();
  renderQuizCard();
  setupQuizHandlers();

  bindGlobalEvents();
  updateCountdown();
  setInterval(updateCountdown, 30000);
  updateOverallProgress();

  const initialHash = location.hash.replace('#', '');
  switchView(VALID_VIEWS.includes(initialHash) ? initialHash : 'plan', false);
}

init();
