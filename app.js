/* ============================================================
   CITTADINI CONSAPEVOLI — Logica applicativa
   Richiede data.js caricato prima di questo file.
   ============================================================ */

'use strict';

// ---------- STATO ----------
const state = {
  lang: 'it',
  currentModule: 0,
  totalModules: 8,
  scenarioIndex: 0,
  scenarioAnswered: [],   // indice scelta per ogni scenario
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: [],       // indice risposta per ogni domanda
  gameState: {},          // cardId -> 'right' | 'duty' | null
  darkMode: false,
};

// ---------- UTILITÀ ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

// Recupera traduzione dalla lingua attiva
function t(key) {
  return (i18n[state.lang]?.[key]) ?? (i18n.it[key]) ?? key;
}

// Recupera campo localizzato da oggetto {it, en, pt}
function loc(obj) {
  if (!obj) return '';
  return obj[state.lang] ?? obj.it ?? '';
}

// ============================================================
//  AVVIO UNICO
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();

  // Render componenti dinamici
  renderConstitution();
  renderEUCharter();
  renderGlossary();
  renderScenario();
  renderGame();
  renderQuiz();

  // Binding eventi
  bindLangSwitcher();
  bindThemeToggle();
  bindGlossarySearch();
  bindStepButtons();
  bindModuleNav();
  bindKeyboard();
  bindScenarioNav();
  bindGameCheck();
  bindQuizNext();
  bindSummaryButtons();

  updateProgress();
});

// ============================================================
//  TEMA LIGHT / DARK
// ============================================================
function initTheme() {
  // Rispetta preferenza di sistema
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) applyDark();
}

function applyDark() {
  document.body.classList.replace('theme-light', 'theme-dark');
  state.darkMode = true;
  $('#themeToggle .theme-icon').textContent = '☀️';
  $('#themeToggle').setAttribute('aria-label', t('dark_off'));
}

function applyLight() {
  document.body.classList.replace('theme-dark', 'theme-light');
  state.darkMode = false;
  $('#themeToggle .theme-icon').textContent = '🌙';
  $('#themeToggle').setAttribute('aria-label', t('dark_on'));
}

function bindThemeToggle() {
  $('#themeToggle').addEventListener('click', () => {
    state.darkMode ? applyLight() : applyDark();
  });
}

// ============================================================
//  INTERNAZIONALIZZAZIONE
// ============================================================
function initLang() {
  const saved = localStorage.getItem('cc_lang');
  if (saved && i18n[saved]) state.lang = saved;
  applyTranslations();
}

function applyTranslations() {
  document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : state.lang;
  document.title = t('appTitle');

  $$('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // Ri-renderizza componenti con testo localizzato
  renderConstitution();
  renderEUCharter();
  renderGlossary();
  renderScenario();
  renderGame();
  renderQuiz();
  if (state.currentModule === 7) renderSummary();
}

function bindLangSwitcher() {
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.langTarget;
      localStorage.setItem('cc_lang', state.lang);
      $$('.lang-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      applyTranslations();
    });
  });
}

// ============================================================
//  NAVIGAZIONE MODULI
// ============================================================
function goToModule(index) {
  $$('.module').forEach(m => m.classList.add('hidden'));
  const target = $(`#module-${index}`);
  if (target) {
    target.classList.remove('hidden');
    // Scroll all'inizio del contenuto principale senza saltare l'header
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  state.currentModule = index;

  $$('.step-btn').forEach(btn => {
    const s = parseInt(btn.dataset.step);
    btn.classList.toggle('active', s === index);
    btn.setAttribute('aria-current', s === index ? 'step' : 'false');
    if (s < index) btn.classList.add('completed');
  });

  $('#prevModule').disabled = index === 0;
  $('#nextModule').disabled = index === state.totalModules - 1;

  updateProgress();
  if (index === 7) renderSummary();
}

function bindModuleNav() {
  $('#prevModule').addEventListener('click', () => {
    if (state.currentModule > 0) goToModule(state.currentModule - 1);
  });
  $('#nextModule').addEventListener('click', () => {
    if (state.currentModule < state.totalModules - 1) goToModule(state.currentModule + 1);
  });
}

function bindStepButtons() {
  $$('.step-btn').forEach(btn => {
    btn.addEventListener('click', () => goToModule(parseInt(btn.dataset.step)));
  });
}

function bindKeyboard() {
  document.addEventListener('keydown', (e) => {
    // Ignora se focus è in un campo di testo
    if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
    if (e.key === 'ArrowRight' && state.currentModule < state.totalModules - 1)
      goToModule(state.currentModule + 1);
    if (e.key === 'ArrowLeft' && state.currentModule > 0)
      goToModule(state.currentModule - 1);
  });
}

function updateProgress() {
  const pct = (state.currentModule / (state.totalModules - 1)) * 100;
  const fill = $('#progressFill');
  fill.style.width = pct + '%';
  fill.closest('[role=progressbar]').setAttribute('aria-valuenow', Math.round(pct));
}

// ============================================================
//  MODULO 1: COSTITUZIONE
// ============================================================
function renderConstitution() {
  const grid = $('#constitutionGrid');
  if (!grid) return;
  grid.innerHTML = '';

  constitutionArticles.forEach(art => {
    const card = document.createElement('article');
    card.className = 'article-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');
    card.innerHTML = `
      <div class="article-num">${art.num}</div>
      <h3 class="article-heading">${loc(art.title)}</h3>
      <p class="article-summary">${loc(art.summary)}</p>
      <div class="article-detail">${loc(art.detail)}</div>
      <span class="article-tag">${loc(art.tag)}</span>
    `;
    const toggle = () => {
      const exp = card.classList.toggle('expanded');
      card.setAttribute('aria-expanded', exp);
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
    grid.appendChild(card);
  });
}

// ============================================================
//  MODULO 2: CARTA UE
// ============================================================
function renderEUCharter() {
  const container = $('#euCategories');
  if (!container) return;
  container.innerHTML = '';

  euCharter.forEach(cat => {
    const wrap = document.createElement('div');
    wrap.innerHTML = `<h3 class="eu-category-title">${cat.icon} ${loc(cat.category)}</h3>`;
    const row = document.createElement('div');
    row.className = 'eu-cards-row';

    cat.rights.forEach(right => {
      const card = document.createElement('div');
      card.className = 'eu-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.innerHTML = `
        <div class="eu-card-icon">${cat.icon}</div>
        <div class="eu-card-title">${loc(right.title)}</div>
        <div class="eu-card-text">${loc(right.text)}</div>
      `;
      const select = () => {
        $$('.eu-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        showComparison(right, cat.id);
      };
      card.addEventListener('click', select);
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(); }
      });
      row.appendChild(card);
    });

    wrap.appendChild(row);
    container.appendChild(wrap);
  });
}

function showComparison(right, catId) {
  const box = $('#comparisonResult');
  if (!box) return;
  const relatedArt = constitutionArticles.find(a => a.euLink === catId);
  box.hidden = false;
  box.innerHTML = `
    <div class="compare-col">
      <h4>&#x1F1EA;&#x1F1FA; ${loc({ it:'Carta UE', en:'EU Charter', pt:'Carta UE' })}</h4>
      <p><strong>${loc(right.title)}</strong><br>${loc(right.text)}</p>
    </div>
    <div class="compare-col">
      <h4>&#x1F1EE;&#x1F1F9; ${loc({ it:'Costituzione italiana', en:'Italian Constitution', pt:'Constituição italiana' })}</h4>
      <p>${loc(right.italyRef)}${relatedArt ? '<br><em>' + loc(relatedArt.summary) + '</em>' : ''}</p>
    </div>
  `;
}

// ============================================================
//  MODULO 3: GLOSSARIO
// ============================================================
function renderGlossary(filter) {
  const grid = $('#glossaryGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const q = (filter || '').toLowerCase().trim();

  glossaryTerms.forEach(term => {
    const termTxt = loc(term.term).toLowerCase();
    const defTxt  = loc(term.def).toLowerCase();
    if (q && !termTxt.includes(q) && !defTxt.includes(q)) return;
    const card = document.createElement('div');
    card.className = 'gloss-card';
    card.innerHTML = `
      <div class="gloss-term">${term.icon} ${loc(term.term)}</div>
      <p class="gloss-def">${loc(term.def)}</p>
      <p class="gloss-source">${loc(term.source)}</p>
    `;
    grid.appendChild(card);
  });

  if (!grid.children.length) {
    grid.innerHTML = `<p style="color:var(--color-text-muted)">${loc({ it:'Nessun termine trovato.', en:'No terms found.', pt:'Nenhum termo encontrado.' })}</p>`;
  }
}

function bindGlossarySearch() {
  const input = $('#glossSearch');
  if (!input) return;
  input.addEventListener('input', () => renderGlossary(input.value));
}

// ============================================================
//  MODULO 4: SCENARI
// ============================================================
function renderScenario() {
  const container = $('#scenarioContainer');
  if (!container) return;

  const s       = scenarios[state.scenarioIndex];
  const answered = state.scenarioAnswered[state.scenarioIndex]; // undefined o indice
  const total   = scenarios.length;

  const counter = $('#scenarioCounter');
  if (counter) counter.textContent = `${state.scenarioIndex + 1} / ${total}`;

  container.innerHTML = `
    <div class="scenario-label">${t('scenario_label')} ${state.scenarioIndex + 1}</div>
    <h3 class="scenario-title">${loc(s.title)}</h3>
    <p class="scenario-text">${loc(s.text)}</p>
    <div class="scenario-choices" role="group" aria-label="${loc({ it:'Scegli una risposta', en:'Choose an answer', pt:'Escolha uma resposta' })}">
      ${s.choices.map((c, i) => {
        let cls = 'choice-btn';
        if (answered !== undefined) {
          if (c.correct) cls += ' correct';
          else if (answered === i && !c.correct) cls += ' incorrect';
        }
        return `<button class="${cls}" data-index="${i}" ${answered !== undefined ? 'disabled' : ''}>
          <span>${['A','B'][i]}</span>
          <span>${loc(c.text)}</span>
        </button>`;
      }).join('')}
    </div>
    ${answered !== undefined ? `
      <div class="scenario-result ${s.choices[answered]?.correct ? 'ok' : 'ko'}">
        ${loc(s.choices[answered]?.feedback)}
        <br><strong>${loc({ it:'Diritto/dovere coinvolto:', en:'Right/duty involved:', pt:'Direito/dever envolvido:' })}</strong>
        ${loc(s.rightInvolved)}
      </div>` : ''}
  `;

  container.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.scenarioAnswered[state.scenarioIndex] = parseInt(btn.dataset.index);
      renderScenario();
    });
  });

  const prev = $('#prevScenario');
  const next = $('#nextScenario');
  if (prev) prev.disabled = state.scenarioIndex === 0;
  if (next) next.disabled = state.scenarioIndex === total - 1;
}

function bindScenarioNav() {
  $('#prevScenario')?.addEventListener('click', () => {
    if (state.scenarioIndex > 0) { state.scenarioIndex--; renderScenario(); }
  });
  $('#nextScenario')?.addEventListener('click', () => {
    if (state.scenarioIndex < scenarios.length - 1) { state.scenarioIndex++; renderScenario(); }
  });
}

// ============================================================
//  MODULO 5: GIOCO DIRITTI/DOVERI
// ============================================================
function renderGame() {
  const pool = $('#cardsPool');
  if (!pool) return;

  gameCards.forEach(c => { if (state.gameState[c.id] === undefined) state.gameState[c.id] = null; });

  pool.innerHTML = '';
  $('#droppedRights').innerHTML = '';
  $('#droppedDuties').innerHTML = '';
  const fb = $('#gameFeedback');
  if (fb) fb.hidden = true;

  gameCards.forEach(card => {
    const el = makeGameCard(card);
    const placed = state.gameState[card.id];
    if (placed === 'right')     $('#droppedRights').appendChild(el);
    else if (placed === 'duty') $('#droppedDuties').appendChild(el);
    else                         pool.appendChild(el);
  });
}

function makeGameCard(card) {
  const el = document.createElement('button');
  el.className = 'game-card';
  el.dataset.id = card.id;
  el.dataset.type = card.type;
  el.textContent = loc(card.text);
  // Cicla: pool → diritti → doveri → pool
  el.addEventListener('click', () => {
    const cur = state.gameState[card.id];
    state.gameState[card.id] = cur === null ? 'right' : cur === 'right' ? 'duty' : null;
    renderGame();
  });
  return el;
}

function bindGameCheck() {
  $('#checkGame')?.addEventListener('click', checkGameAnswers);
}

function checkGameAnswers() {
  let correct = 0;
  const lines = [];

  gameCards.forEach(card => {
    const placed = state.gameState[card.id];
    const ok = placed === card.type;
    if (ok) correct++;
    const el = document.querySelector(`.game-card[data-id="${card.id}"]`);
    if (el) {
      el.classList.remove('correct-placed', 'wrong-placed');
      el.classList.add(ok ? 'correct-placed' : 'wrong-placed');
    }
    if (!ok) {
      const correctLabel = loc({ it: card.type === 'right' ? 'Diritto' : 'Dovere', en: card.type === 'right' ? 'Right' : 'Duty', pt: card.type === 'right' ? 'Direito' : 'Dever' });
      lines.push(`• <strong>${loc(card.text)}</strong>: ${loc({ it:'appartiene a', en:'belongs to', pt:'pertence a' })} <em>${correctLabel}</em> — ${loc(card.note)}`);
    }
  });

  const fb = $('#gameFeedback');
  if (!fb) return;
  fb.hidden = false;
  if (correct === gameCards.length) {
    fb.innerHTML = `✅ ${t('well_done')} ${loc({ it:'Tutte le carte sono nella categoria giusta!', en:'All cards are in the right category!', pt:'Todas as cartas estão na categoria certa!' })}`;
    fb.style.borderLeftColor = 'var(--color-success-fg)';
  } else {
    fb.innerHTML = `<strong>${t('game_result')}: ${correct}/${gameCards.length}</strong><br>${lines.join('<br>')}`;
    fb.style.borderLeftColor = 'var(--color-accent)';
  }
}

// ============================================================
//  MODULO 6: QUIZ
// ============================================================
function renderQuiz() {
  const card  = $('#quizCard');
  const label = $('#quizProgressLabel');
  const fill  = $('#quizMiniFill');
  const fb    = $('#quizFeedback');
  const btn   = $('#nextQuestion');
  if (!card) return;

  const total = quizQuestions.length;

  // Quiz terminato
  if (state.quizIndex >= total) {
    card.innerHTML = `<p style="font-size:1.2rem;font-weight:700;color:var(--color-primary);text-align:center">
      🌟 ${t('score_label')}: ${state.quizScore}/${total}<br>
      ${state.quizScore >= Math.ceil(total * 0.7) ? t('well_done') : t('keep_going')}
    </p>`;
    if (btn) btn.style.display = 'none';
    return;
  }

  const q        = quizQuestions[state.quizIndex];
  const answered = state.quizAnswered[state.quizIndex];

  if (label) label.textContent = `${t('question_label')} ${state.quizIndex + 1} ${t('quiz_of')} ${total}`;
  if (fill)  fill.style.width = `${(state.quizIndex / total) * 100}%`;

  card.innerHTML = `
    <p class="quiz-question">${loc(q.q)}</p>
    <div class="quiz-options" role="radiogroup">
      ${q.options.map((opt, i) => {
        let cls = 'quiz-option';
        if (answered !== undefined) {
          if (i === q.correct) cls += ' correct';
          else if (i === answered) cls += ' wrong';
        } else if (i === answered) cls += ' selected';
        return `<button class="${cls}" data-opt="${i}" ${answered !== undefined ? 'disabled' : ''} role="radio" aria-checked="${answered === i}">
          <span>${['A','B','C','D'][i]}</span><span>${loc(opt)}</span>
        </button>`;
      }).join('')}
    </div>
  `;

  if (fb) {
    if (answered !== undefined) {
      fb.hidden = false;
      const ok = answered === q.correct;
      fb.className = 'quiz-feedback ' + (ok ? 'ok' : 'ko');
      fb.textContent = (ok ? '✅ ' : '❌ ') + loc(q.feedback);
    } else {
      fb.hidden = true;
    }
  }

  if (btn) btn.disabled = answered === undefined;

  card.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.quizAnswered[state.quizIndex] !== undefined) return;
      const opt = parseInt(btn.dataset.opt);
      state.quizAnswered[state.quizIndex] = opt;
      if (opt === q.correct) state.quizScore++;
      renderQuiz();
    });
  });
}

function bindQuizNext() {
  $('#nextQuestion')?.addEventListener('click', () => {
    state.quizIndex++;
    if (state.quizIndex >= quizQuestions.length) {
      renderQuiz();
      setTimeout(() => goToModule(7), 700);
    } else {
      renderQuiz();
    }
  });
}

// ============================================================
//  MODULO 7: RIEPILOGO
// ============================================================
function renderSummary() {
  const badge   = $('#scoreBadge');
  const grid    = $('#summaryGrid');
  const review  = $('#reviewSection');
  if (!badge) return;

  const total   = quizQuestions.length;
  const pct     = Math.round((state.quizScore / total) * 100);
  const scenOk  = state.scenarioAnswered.filter((ans, i) => scenarios[i]?.choices[ans]?.correct).length;
  const gameOk  = gameCards.filter(c => state.gameState[c.id] === c.type).length;

  badge.innerHTML = `${t('score_label')}: <strong>${state.quizScore}/${total}</strong> (${pct}%) ${pct >= 70 ? '🌟' : ''}`;

  if (grid) {
    grid.innerHTML = `
      <div class="summary-stat"><span class="summary-stat-icon">🧩</span><div class="summary-stat-label">${t('quiz_title')}</div><div class="summary-stat-value">${state.quizScore}/${total}</div></div>
      <div class="summary-stat"><span class="summary-stat-icon">🎭</span><div class="summary-stat-label">${t('scen_title')}</div><div class="summary-stat-value">${scenOk}/${scenarios.length}</div></div>
      <div class="summary-stat"><span class="summary-stat-icon">⚖️</span><div class="summary-stat-label">${t('game_title')}</div><div class="summary-stat-value">${gameOk}/${gameCards.length}</div></div>
    `;
  }

  if (review) {
    const wrong = state.quizAnswered
      .map((ans, i) => ans !== quizQuestions[i]?.correct ? i : -1)
      .filter(i => i >= 0);
    if (wrong.length) {
      review.innerHTML = `<h3>${t('review_title')}</h3>` +
        wrong.map(i => `
          <div class="review-item">
            <span class="review-icon">📚</span>
            <span class="review-text"><strong>${t('question_label')} ${i+1}:</strong> ${loc(quizQuestions[i].q)}<br><em>${loc(quizQuestions[i].feedback)}</em></span>
          </div>`).join('');
    } else {
      review.innerHTML = `<p style="color:var(--color-success-fg)">✅ ${t('well_done')} ${loc({ it:'Nessun concetto da ripassare!', en:'No concepts to review!', pt:'Nenhum conceito para rever!' })}</p>`;
    }
  }
}

function bindSummaryButtons() {
  $('#restartBtn')?.addEventListener('click', restartApp);
  $('#printBtn')?.addEventListener('click', () => window.print());
}

// ============================================================
//  RESET
// ============================================================
function restartApp() {
  Object.assign(state, {
    currentModule: 0,
    scenarioIndex: 0,
    scenarioAnswered: [],
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: [],
    gameState: {},
  });
  $$('.step-btn').forEach(b => b.classList.remove('completed'));
  const nextBtn = $('#nextQuestion');
  if (nextBtn) nextBtn.style.display = '';
  renderScenario();
  renderGame();
  renderQuiz();
  goToModule(0);
}
