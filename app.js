/* ============================================================
   CITTADINI CONSAPEVOLI — Logica applicativa principale
   Dipende da: data.js (caricato prima in index.html)
   ============================================================ */

'use strict';

// ---------- STATO GLOBALE ----------
const state = {
  lang: 'it',
  currentModule: 0,
  totalModules: 8,
  scenarioIndex: 0,
  scenarioAnswered: [],   // booleano per ogni scenario
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: [],       // { correct: bool, feedback: string }
  gameState: {},          // { cardId: 'right'|'duty'|null }
  darkMode: false,
};

// ---------- SELETTORI DOM ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ---------- AVVIO ----------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  renderConstitution();
  renderEUCharter();
  renderGlossary();
  renderScenario();
  renderGame();
  renderQuiz();
  bindNavigation();
  bindLangSwitcher();
  bindThemeToggle();
  bindGlossarySearch();
  bindGameButtons();
  bindQuizNext();
  bindModuleNav();
  bindStepButtons();
  updateProgress();
});

// ============================================================
//  TEMA LIGHT / DARK
// ============================================================
function initTheme() {
  // Rispetta la preferenza di sistema
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyDark();
  }
}

function applyDark() {
  document.body.classList.replace('theme-light', 'theme-dark');
  state.darkMode = true;
  $('#themeToggle').querySelector('.theme-icon').textContent = '☀️';
  $('#themeToggle').setAttribute('aria-label', t('dark_off'));
}

function applyLight() {
  document.body.classList.replace('theme-dark', 'theme-light');
  state.darkMode = false;
  $('#themeToggle').querySelector('.theme-icon').textContent = '🌙';
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

// Recupera stringa nella lingua attiva
function t(key) {
  return (i18n[state.lang] && i18n[state.lang][key]) || (i18n.it[key]) || key;
}

// Recupera campo localizzato da un oggetto dati {it, en, pt}
function loc(obj) {
  if (!obj) return '';
  return obj[state.lang] || obj.it || '';
}

function initLang() {
  const saved = localStorage.getItem('cc_lang');
  if (saved && i18n[saved]) state.lang = saved;
  applyTranslations();
}

function applyTranslations() {
  document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : state.lang;
  document.title = t('appTitle');

  // Aggiorna tutti gli elementi [data-i18n]
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder') || key);
    } else {
      el.textContent = t(key);
    }
  });

  // Aggiorna placeholder degli input
  $$('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  // Ri-renderizza i componenti dinamici che contengono testo localizzato
  renderConstitution();
  renderEUCharter();
  renderGlossary();
  renderScenario();
  renderGame();
  renderQuiz();
  renderSummary();
}

function bindLangSwitcher() {
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-target');
      state.lang = lang;
      localStorage.setItem('cc_lang', lang);
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
  // Nascondi tutti i moduli
  $$('.module').forEach(m => m.classList.add('hidden'));
  // Mostra quello target
  const target = $(`#module-${index}`);
  if (target) {
    target.classList.remove('hidden');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  state.currentModule = index;

  // Aggiorna step-btn nella navbar
  $$('.step-btn').forEach(btn => {
    const s = parseInt(btn.getAttribute('data-step'));
    btn.classList.toggle('active', s === index);
    btn.setAttribute('aria-current', s === index ? 'step' : 'false');
    // Segna come completato tutto ciò che precede
    if (s < index) btn.classList.add('completed');
  });

  // Abilita/disabilita bottoni prev/next
  $('#prevModule').disabled = index === 0;
  $('#nextModule').disabled = index === state.totalModules - 1;

  updateProgress();

  // Azioni specifiche al modulo
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
    btn.addEventListener('click', () => {
      goToModule(parseInt(btn.getAttribute('data-step')));
    });
  });
}

function bindNavigation() {
  // Tastiera: frecce sinistra/destra per navigare
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
    if (e.key === 'ArrowRight' && state.currentModule < state.totalModules - 1) goToModule(state.currentModule + 1);
    if (e.key === 'ArrowLeft' && state.currentModule > 0) goToModule(state.currentModule - 1);
  });
}

function updateProgress() {
  const pct = (state.currentModule / (state.totalModules - 1)) * 100;
  $('#progressFill').style.width = pct + '%';
  $('#progressFill').closest('[role=progressbar]').setAttribute('aria-valuenow', Math.round(pct));
}

// ============================================================
//  MODULO 1: COSTITUZIONE
// ============================================================
function renderConstitution() {
  const grid = $('#constitutionGrid');
  if (!grid) return;
  grid.innerHTML = '';
  constitutionArticles.forEach((art, idx) => {
    const card = document.createElement('article');
    card.className = 'article-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');
    card.innerHTML = `
      <div class="article-num">${art.num}</div>
      <h3 class="article-heading">${loc(art.title)}</h3>
      <p class="article-summary">${loc(art.summary)}</p>
      <div class="article-detail">${loc(art.detail)}</div>
      <span class="article-tag">${loc(art.tag)}</span>
    `;
    // Click o Enter/Space per espandere
    const toggle = () => {
      const expanded = card.classList.toggle('expanded');
      card.setAttribute('aria-expanded', expanded);
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
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
    const section = document.createElement('div');
    section.innerHTML = `<h3 class="eu-category-title">${cat.icon} ${loc(cat.category)}</h3>`;
    const row = document.createElement('div');
    row.className = 'eu-cards-row';

    cat.rights.forEach(right => {
      const card = document.createElement('div');
      card.className = 'eu-card';
      card.setAttribute('tabindex', '0');
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
      card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(); } });
      row.appendChild(card);
    });

    section.appendChild(row);
    container.appendChild(section);
  });
}

function showComparison(right, catId) {
  const box = $('#comparisonResult');
  if (!box) return;
  const italyRef = loc(right.italyRef);
  // Trova articolo costituzionale correlato
  const relatedArt = constitutionArticles.find(a => a.euLink === catId);
  box.hidden = false;
  box.innerHTML = `
    <div class="compare-col">
      <h4>&#x1F1EA;&#x1F1FA; ${loc({ it: 'Carta dei diritti UE', en: 'EU Charter of Rights', pt: 'Carta de Direitos da UE' })}</h4>
      <p><strong>${loc(right.title)}</strong><br>${loc(right.text)}</p>
    </div>
    <div class="compare-col">
      <h4>&#x1F1EE;&#x1F1F9; ${loc({ it: 'Costituzione italiana', en: 'Italian Constitution', pt: 'Constituição italiana' })}</h4>
      <p>${italyRef}${relatedArt ? '<br><em>' + loc(relatedArt.summary) + '</em>' : ''}</p>
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
  const q = (filter || '').toLowerCase();
  glossaryTerms.forEach(term => {
    const termText = loc(term.term).toLowerCase();
    const defText = loc(term.def).toLowerCase();
    if (q && !termText.includes(q) && !defText.includes(q)) return;
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
    grid.innerHTML = `<p style="color:var(--color-text-muted)">${loc({ it: 'Nessun termine trovato.', en: 'No terms found.', pt: 'Nenhum termo encontrado.' })}</p>`;
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
  const counter = $('#scenarioCounter');
  if (!container) return;

  const s = scenarios[state.scenarioIndex];
  const answered = state.scenarioAnswered[state.scenarioIndex];
  const total = scenarios.length;

  if (counter) counter.textContent = `${state.scenarioIndex + 1} / ${total}`;

  container.innerHTML = `
    <div class="scenario-label">${t('scenario_label')} ${state.scenarioIndex + 1}</div>
    <h3 class="scenario-title">${loc(s.title)}</h3>
    <p class="scenario-text">${loc(s.text)}</p>
    <div class="scenario-choices" role="group" aria-label="${loc({ it: 'Scegli una risposta', en: 'Choose an answer', pt: 'Escolha uma resposta' })}">
      ${s.choices.map((c, i) => `
        <button class="choice-btn${answered !== undefined && c.correct ? ' correct' : ''}${answered !== undefined && !c.correct && answered === i ? ' incorrect' : ''}" data-index="${i}" ${answered !== undefined ? 'disabled' : ''}>
          <span>${i === 0 ? 'A' : 'B'}</span>
          <span>${loc(c.text)}</span>
        </button>
      `).join('')}
    </div>
    ${answered !== undefined ? `
      <div class="scenario-result ${s.choices[answered] && s.choices[answered].correct ? 'ok' : 'ko'}">
        ${loc(s.choices[answered] ? s.choices[answered].feedback : s.choices[0].feedback)}
        <br><strong>${loc({ it: 'Diritto/dovere coinvolto:', en: 'Right/duty involved:', pt: 'Direito/dever envolvido:' })}</strong> ${loc(s.rightInvolved)}
      </div>
    ` : ''}
  `;

  // Bind scelte
  container.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      state.scenarioAnswered[state.scenarioIndex] = idx;
      renderScenario();
    });
  });

  // Abilita/disabilita navigazione scenario
  if ($('#prevScenario')) $('#prevScenario').disabled = state.scenarioIndex === 0;
  if ($('#nextScenario')) $('#nextScenario').disabled = state.scenarioIndex === total - 1;
}

function bindNavigation() {
  // Rimosso duplicato — vedi sotto il consolidato
}

// Inizializzo navigation bind separato per scenari
document.addEventListener('DOMContentLoaded', () => {
  const prev = $('#prevScenario');
  const next = $('#nextScenario');
  if (prev) prev.addEventListener('click', () => { if (state.scenarioIndex > 0) { state.scenarioIndex--; renderScenario(); } });
  if (next) next.addEventListener('click', () => { if (state.scenarioIndex < scenarios.length - 1) { state.scenarioIndex++; renderScenario(); } });
  if ($('#restartBtn')) $('#restartBtn').addEventListener('click', restartApp);
  if ($('#printBtn')) $('#printBtn').addEventListener('click', () => window.print());
});

// ============================================================
//  MODULO 5: GIOCO DIRITTI/DOVERI
// ============================================================
function renderGame() {
  const pool = $('#cardsPool');
  if (!pool) return;

  // Inizializza stato gioco
  gameCards.forEach(c => { if (!state.gameState[c.id]) state.gameState[c.id] = null; });

  pool.innerHTML = '';
  $('#droppedRights').innerHTML = '';
  $('#droppedDuties').innerHTML = '';
  $('#gameFeedback').hidden = true;

  // Ripartisci le carte
  gameCards.forEach(card => {
    const el = createGameCard(card);
    const placed = state.gameState[card.id];
    if (placed === 'right') $('#droppedRights').appendChild(el);
    else if (placed === 'duty') $('#droppedDuties').appendChild(el);
    else pool.appendChild(el);
  });
}

function createGameCard(card) {
  const el = document.createElement('button');
  el.className = 'game-card';
  el.setAttribute('data-id', card.id);
  el.setAttribute('data-type', card.type);
  el.textContent = loc(card.text);
  el.setAttribute('aria-label', loc(card.text));
  // Click: cicla tra pool → rights → duties → pool
  el.addEventListener('click', () => cycleCard(card.id));
  return el;
}

function cycleCard(id) {
  const current = state.gameState[id];
  if (current === null) state.gameState[id] = 'right';
  else if (current === 'right') state.gameState[id] = 'duty';
  else state.gameState[id] = null;
  renderGame();
}

function bindGameButtons() {
  document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = $('#checkGame');
    if (checkBtn) checkBtn.addEventListener('click', checkGameAnswers);
  });
}

// Merge con il listener DOMContentLoaded principale
document.addEventListener('DOMContentLoaded', () => {
  const checkBtn = $('#checkGame');
  if (checkBtn) checkBtn.addEventListener('click', checkGameAnswers);
});

function checkGameAnswers() {
  let correct = 0;
  const feedbackLines = [];

  gameCards.forEach(card => {
    const placed = state.gameState[card.id];
    const isCorrect = placed === card.type;
    if (isCorrect) correct++;

    // Colora le card nel DOM
    const el = document.querySelector(`.game-card[data-id="${card.id}"]`);
    if (el) {
      el.classList.remove('correct-placed', 'wrong-placed');
      el.classList.add(isCorrect ? 'correct-placed' : 'wrong-placed');
    }

    if (!isCorrect) {
      const correctLabel = loc({ it: card.type === 'right' ? 'Diritto' : 'Dovere', en: card.type === 'right' ? 'Right' : 'Duty', pt: card.type === 'right' ? 'Direito' : 'Dever' });
      feedbackLines.push(`• <strong>${loc(card.text)}</strong>: ${loc({ it: 'appartiene a', en: 'belongs to', pt: 'pertence a' })} <em>${correctLabel}</em> — ${loc(card.note)}`);
    }
  });

  const fb = $('#gameFeedback');
  fb.hidden = false;
  if (correct === gameCards.length) {
    fb.innerHTML = `✅ ${t('well_done')} ${loc({ it: 'Tutte le carte sono nella categoria giusta!', en: 'All cards are in the right category!', pt: 'Todas as cartas estão na categoria certa!' })}`;
    fb.style.borderLeftColor = 'var(--color-success-fg)';
  } else {
    fb.innerHTML = `${t('game_result')}: ${correct}/${gameCards.length}<br>${feedbackLines.join('<br>')}`;
    fb.style.borderLeftColor = 'var(--color-accent)';
  }
}

// ============================================================
//  MODULO 6: QUIZ
// ============================================================
function renderQuiz() {
  const card = $('#quizCard');
  const label = $('#quizProgressLabel');
  const fill = $('#quizMiniFill');
  const nextBtn = $('#nextQuestion');
  const fb = $('#quizFeedback');
  if (!card) return;

  const total = quizQuestions.length;

  if (state.quizIndex >= total) {
    // Quiz terminato
    card.innerHTML = `<p style="font-size:1.1rem;font-weight:700;color:var(--color-primary)">${t('well_done')} ${state.quizScore}/${total}</p>`;
    if (nextBtn) nextBtn.style.display = 'none';
    return;
  }

  const q = quizQuestions[state.quizIndex];
  const answered = state.quizAnswered[state.quizIndex];

  if (label) label.textContent = `${t('question_label')} ${state.quizIndex + 1} ${t('quiz_of')} ${total}`;
  if (fill) fill.style.width = `${((state.quizIndex) / total) * 100}%`;

  card.innerHTML = `
    <p class="quiz-question">${loc(q.q)}</p>
    <div class="quiz-options" role="radiogroup" aria-label="${loc({ it: 'Opzioni di risposta', en: 'Answer options', pt: 'Opções de resposta' })}">
      ${q.options.map((opt, i) => `
        <button class="quiz-option${answered !== undefined && i === q.correct ? ' correct' : ''}${answered !== undefined && i === answered && i !== q.correct ? ' wrong' : ''}${answered === i ? ' selected' : ''}"
          data-opt="${i}" ${answered !== undefined ? 'disabled' : ''}
          role="radio" aria-checked="${answered === i}">
          <span>${['A','B','C','D'][i]}</span>
          <span>${loc(opt)}</span>
        </button>
      `).join('')}
    </div>
  `;

  // Feedback
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

  // Abilita "Prossima"
  if (nextBtn) nextBtn.disabled = answered === undefined;

  // Bind opzioni
  card.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.quizAnswered[state.quizIndex] !== undefined) return;
      const opt = parseInt(btn.getAttribute('data-opt'));
      state.quizAnswered[state.quizIndex] = opt;
      if (opt === q.correct) state.quizScore++;
      renderQuiz();
    });
  });
}

function bindQuizNext() {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = $('#nextQuestion');
    if (btn) btn.addEventListener('click', () => {
      if (state.quizIndex < quizQuestions.length - 1) {
        state.quizIndex++;
        renderQuiz();
      } else {
        // Fine quiz → segna completato e vai al riepilogo
        renderQuiz();
        setTimeout(() => goToModule(7), 600);
      }
    });
  });
}

// Anche questo bind va nel DOMContentLoaded principale
document.addEventListener('DOMContentLoaded', () => {
  const btn = $('#nextQuestion');
  if (btn) btn.addEventListener('click', () => {
    if (state.quizIndex < quizQuestions.length - 1) {
      state.quizIndex++;
      renderQuiz();
    } else {
      renderQuiz();
      setTimeout(() => goToModule(7), 600);
    }
  });
});

// ============================================================
//  MODULO 7: RIEPILOGO
// ============================================================
function renderSummary() {
  const scoreBadge = $('#scoreBadge');
  const grid = $('#summaryGrid');
  const reviewSection = $('#reviewSection');
  if (!scoreBadge) return;

  const total = quizQuestions.length;
  const pct = Math.round((state.quizScore / total) * 100);
  const scenariosCorrect = state.scenarioAnswered.filter((ans, i) => scenarios[i] && scenarios[i].choices[ans] && scenarios[i].choices[ans].correct).length;
  const gameCorrect = gameCards.filter(c => state.gameState[c.id] === c.type).length;

  // Badge punteggio
  scoreBadge.innerHTML = `
    ${t('score_label')}: <strong>${state.quizScore}/${total}</strong> (${pct}%)
    ${pct >= 70 ? ' 🌟' : ''}
  `;

  // Statistiche
  if (grid) {
    grid.innerHTML = `
      <div class="summary-stat">
        <span class="summary-stat-icon">🧩</span>
        <div class="summary-stat-label">${t('quiz_title')}</div>
        <div class="summary-stat-value">${state.quizScore}/${total}</div>
      </div>
      <div class="summary-stat">
        <span class="summary-stat-icon">🎭</span>
        <div class="summary-stat-label">${t('scen_title')}</div>
        <div class="summary-stat-value">${scenariosCorrect}/${scenarios.length}</div>
      </div>
      <div class="summary-stat">
        <span class="summary-stat-icon">⚖️</span>
        <div class="summary-stat-label">${t('game_title')}</div>
        <div class="summary-stat-value">${gameCorrect}/${gameCards.length}</div>
      </div>
    `;
  }

  // Domande sbagliate da ripassare
  if (reviewSection) {
    const wrong = state.quizAnswered
      .map((ans, i) => ans !== undefined && ans !== quizQuestions[i].correct ? i : -1)
      .filter(i => i >= 0);

    if (wrong.length) {
      reviewSection.innerHTML = `
        <h3>${t('review_title')}</h3>
        ${wrong.map(i => `
          <div class="review-item">
            <span class="review-icon">📚</span>
            <span class="review-text"><strong>${t('question_label')} ${i + 1}:</strong> ${loc(quizQuestions[i].q)}<br><em>${loc(quizQuestions[i].feedback)}</em></span>
          </div>
        `).join('')}
      `;
    } else {
      reviewSection.innerHTML = `<p style="color:var(--color-success-fg)">✅ ${t('well_done')} ${loc({ it: 'Nessun concetto da ripassare!', en: 'No concepts to review!', pt: 'Nenhum conceito para rever!' })}</p>`;
    }
  }
}

// ============================================================
//  RESET PERCORSO
// ============================================================
function restartApp() {
  state.scenarioIndex = 0;
  state.scenarioAnswered = [];
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = [];
  state.gameState = {};
  $$('.step-btn').forEach(b => b.classList.remove('completed'));
  renderScenario();
  renderGame();
  renderQuiz();
  goToModule(0);
}
