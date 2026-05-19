/* ═══════════════════════════════════════════════════════
   APP STATE
═══════════════════════════════════════════════════════ */
let currentUnit      = null;
let quizQuestions    = [];
let currentIndex     = 0;
let score            = 0;
let answered         = 0;
let userAnswers      = []; // {selected, correct, skipped}

/* ═══════════════════════════════════════════════════════
   UTILITY HELPERS
═══════════════════════════════════════════════════════ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═══════════════════════════════════════════════════════
   BUILD HOME SCREEN
═══════════════════════════════════════════════════════ */
function buildHome() {
  const grid = document.getElementById('unit-grid');
  grid.innerHTML = '';

  // Standard units only for "All Units" total
  const standardUnits = Object.entries(QUESTION_BANK).filter(([id]) => id !== 'ut1' && id !== 'ut2');
  const total = standardUnits.reduce((s, [id, u]) => s + u.questions.length, 0);

  grid.innerHTML += `
    <div class="unit-card unit-card-all" onclick="startQuiz('all')">
      <div class="unit-num">All Units</div>
      <div class="unit-title">Full Mock Test</div>
      <div class="unit-count">${total} Questions · Randomized</div>
    </div>`;

  // UT1 card
  const ut1Total = QUESTION_BANK['ut1'] ? QUESTION_BANK['ut1'].questions.length : (QUESTION_BANK[1].questions.length + QUESTION_BANK[2].questions.length);
  grid.innerHTML += `
    <div class="unit-card unit-card-all" onclick="startQuiz('ut1')">
      <div class="unit-num">Unit Test 1</div>
      <div class="unit-title">Unit Test Question Bank 1</div>
      <div class="unit-count">${ut1Total} Questions · Randomized</div>
    </div>`;

  // UT2 card
  const ut2Total = QUESTION_BANK['ut2'] ? QUESTION_BANK['ut2'].questions.length : (QUESTION_BANK[3].questions.length + QUESTION_BANK[4].questions.length + QUESTION_BANK[5].questions.length);
  grid.innerHTML += `
    <div class="unit-card unit-card-all" onclick="startQuiz('ut2')">
      <div class="unit-num">Unit Test 2</div>
      <div class="unit-title">Unit Test Question Bank 2</div>
      <div class="unit-count">${ut2Total} Questions · Randomized</div>
    </div>`;

  // Individual unit cards
  standardUnits.forEach(([id, unit]) => {
    grid.innerHTML += `
      <div class="unit-card" onclick="startQuiz('${id}')">
        <div class="unit-num">Unit ${id}</div>
        <div class="unit-title">${unit.title}</div>
        <div class="unit-count">${unit.questions.length} Questions · Randomized</div>
      </div>`;
  });
}

/* ═══════════════════════════════════════════════════════
   START QUIZ
═══════════════════════════════════════════════════════ */
function startQuiz(unitId) {
  currentUnit = unitId;

  if (unitId === 'all') {
    // Combine standard questions, shuffle
    const standardUnits = Object.entries(QUESTION_BANK).filter(([id]) => id !== 'ut1' && id !== 'ut2');
    const all = standardUnits.flatMap(([id, u]) => u.questions);
    quizQuestions = shuffle(all);
  } else if (unitId === 'ut1') {
    if (QUESTION_BANK['ut1']) {
      quizQuestions = shuffle(QUESTION_BANK['ut1'].questions);
    } else {
      const ut1 = [QUESTION_BANK[1], QUESTION_BANK[2]].flatMap(u => u.questions);
      quizQuestions = shuffle(ut1);
    }
  } else if (unitId === 'ut2') {
    if (QUESTION_BANK['ut2']) {
      quizQuestions = shuffle(QUESTION_BANK['ut2'].questions);
    } else {
      const ut2 = [QUESTION_BANK[3], QUESTION_BANK[4], QUESTION_BANK[5]].flatMap(u => u.questions);
      quizQuestions = shuffle(ut2);
    }
  } else {
    quizQuestions = shuffle(QUESTION_BANK[unitId].questions);
  }

  currentIndex = 0;
  score        = 0;
  answered     = 0;
  userAnswers  = [];

  // Set unit tag
  const tag = document.getElementById('quiz-unit-tag');
  if (unitId === 'all') {
    tag.textContent = 'All Units — Full Test';
  } else if (unitId === 'ut1') {
    tag.textContent = QUESTION_BANK['ut1'] ? `Unit Test 1 — ${QUESTION_BANK['ut1'].title}` : 'Unit Test 1 — Question Bank 1';
  } else if (unitId === 'ut2') {
    tag.textContent = QUESTION_BANK['ut2'] ? `Unit Test 2 — ${QUESTION_BANK['ut2'].title}` : 'Unit Test 2 — Question Bank 2';
  } else {
    tag.textContent = `Unit ${unitId} — ${QUESTION_BANK[unitId].title}`;
  }

  renderQuestion();
  showScreen('screen-quiz');
}

/* ═══════════════════════════════════════════════════════
   RENDER QUESTION
═══════════════════════════════════════════════════════ */
function renderQuestion() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const total = quizQuestions.length;
  const q     = quizQuestions[currentIndex];
  const pct   = ((currentIndex) / total) * 100;

  // Progress
  document.getElementById('quiz-progress').textContent = `Question ${currentIndex + 1} of ${total}`;
  document.getElementById('progress-bar').style.width  = pct + '%';
  document.getElementById('question-number').textContent = `Q${currentIndex + 1}`;
  document.getElementById('question-text').textContent   = q.q;
  document.getElementById('live-score').textContent      = `Score: ${score}`;

  // Clear explanation
  const exBox = document.getElementById('explanation-box');
  exBox.style.display = 'none';

  // Enable/disable buttons
  document.getElementById('btn-next').disabled = true;
  document.getElementById('btn-skip').disabled = false;

  // Build options
  const letters = ['A', 'B', 'C', 'D'];
  const list    = document.getElementById('options-list');
  list.innerHTML = '';

  q.opts.forEach((opt, i) => {
    const li  = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.onclick = () => selectAnswer(i);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

/* ═══════════════════════════════════════════════════════
   SELECT ANSWER
═══════════════════════════════════════════════════════ */
function selectAnswer(selectedIdx) {
  const q       = quizQuestions[currentIndex];
  const correct = q.ans;
  const btns    = document.querySelectorAll('.option-btn');

  // Disable all options
  btns.forEach(b => b.disabled = true);

  // Mark correct
  btns[correct].classList.add('correct');

  if (selectedIdx === correct) {
    score++;
    userAnswers.push({ selected: selectedIdx, correct, skipped: false, wasCorrect: true });
  } else {
    btns[selectedIdx].classList.add('wrong');
    userAnswers.push({ selected: selectedIdx, correct, skipped: false, wasCorrect: false });
  }

  answered++;

  // Show explanation
  const exBox  = document.getElementById('explanation-box');
  const exText = document.getElementById('explanation-text');
  exText.textContent  = q.expl || 'No explanation available.';
  exBox.style.display = 'block';

  // Update score display
  document.getElementById('live-score').textContent = `Score: ${score}`;

  // Enable next button
  document.getElementById('btn-next').disabled = false;
  document.getElementById('btn-skip').disabled = true;

  // Auto-scroll to buttons to prevent manual scrolling
  setTimeout(() => {
    const btnRow = document.querySelector('.btn-row');
    if (btnRow) {
      btnRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 100);
}

/* ═══════════════════════════════════════════════════════
   NEXT QUESTION
═══════════════════════════════════════════════════════ */
function nextQuestion() {
  // If no answer was selected, record as skipped
  if (userAnswers.length === currentIndex) {
    userAnswers.push({ selected: -1, correct: quizQuestions[currentIndex].ans, skipped: true, wasCorrect: false });
  }

  currentIndex++;

  if (currentIndex >= quizQuestions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

/* ═══════════════════════════════════════════════════════
   SHOW RESULT
═══════════════════════════════════════════════════════ */
function showResult() {
  const total   = quizQuestions.length;
  const wrong   = userAnswers.filter(a => !a.wasCorrect && !a.skipped).length;
  const skipped = userAnswers.filter(a => a.skipped).length;
  const pct     = Math.round((score / total) * 100);

  document.getElementById('score-big').textContent  = score;
  document.getElementById('score-denom').textContent = `/ ${total}`;
  document.getElementById('stat-correct').textContent = score;
  document.getElementById('stat-wrong').textContent   = wrong;
  document.getElementById('stat-skip').textContent    = skipped;
  document.getElementById('stat-pct').textContent     = pct + '%';

  // Message
  let msg, sub;
  if (pct >= 90) { msg = '🏆 Outstanding!';  sub = 'You\'re exam ready!'; }
  else if (pct >= 75) { msg = '🌟 Great Work!'; sub = 'Almost perfect! Review a few more.'; }
  else if (pct >= 60) { msg = '👍 Good Job!';   sub = 'Keep practicing to improve your score.'; }
  else if (pct >= 40) { msg = '📚 Keep Going!'; sub = 'Review the topics and try again.'; }
  else                { msg = '💪 Don\'t Give Up!'; sub = 'Study the material and retake the quiz.'; }

  document.getElementById('result-message').textContent = msg;
  document.getElementById('result-sub').textContent     = sub;

  // Animate score ring
  const ring = document.getElementById('score-ring');
  ring.style.background = `conic-gradient(var(--accent) ${pct * 3.6}deg, rgba(255,255,255,0.05) 0deg)`;

  showScreen('screen-result');
}

/* ═══════════════════════════════════════════════════════
   REVIEW QUIZ
═══════════════════════════════════════════════════════ */
function reviewQuiz() {
  const list    = document.getElementById('review-list');
  const letters = ['A', 'B', 'C', 'D'];
  list.innerHTML = '';

  const skipped = userAnswers.filter(a => a && a.skipped).length;
  document.getElementById('review-label').textContent = `Answer Review • ${skipped} Skipped`;

  quizQuestions.forEach((q, i) => {
    const ua      = userAnswers[i] || { selected: -1, correct: q.ans, skipped: true, wasCorrect: false };
    const correct = ua.wasCorrect;
    const skip    = ua.skipped;

    let badge, ansLine;
    if (skip) {
      badge   = '<span class="rq-badge wrong">Skipped</span>';
      ansLine = `<div class="rq-answer"><span class="rq-correct">✓ Correct: ${letters[q.ans]}. ${q.opts[q.ans]}</span></div>`;
    } else if (correct) {
      badge   = '<span class="rq-badge correct">✓ Correct</span>';
      ansLine = `<div class="rq-answer rq-correct">✓ ${letters[q.ans]}. ${q.opts[q.ans]}</div>`;
    } else {
      badge   = '<span class="rq-badge wrong">✗ Wrong</span>';
      const sel = ua.selected >= 0 ? `<span class="rq-wrong">✗ Your answer: ${letters[ua.selected]}. ${q.opts[ua.selected]}</span><br>` : '';
      ansLine = `<div class="rq-answer">${sel}<span class="rq-correct">✓ Correct: ${letters[q.ans]}. ${q.opts[q.ans]}</span></div>`;
    }

    list.innerHTML += `
      <div class="review-item">
        <div class="rq-header">
          <span class="rq-num">Q${i + 1}</span>
          ${badge}
        </div>
        <div class="rq-q">${q.q}</div>
        ${ansLine}
        ${q.expl ? `<div class="rq-expl">💡 ${q.expl}</div>` : ''}
      </div>`;
  });

  showScreen('screen-review');
}

/* ═══════════════════════════════════════════════════════
   RETAKE QUIZ
═══════════════════════════════════════════════════════ */
function retakeQuiz() {
  startQuiz(currentUnit);
}

/* ═══════════════════════════════════════════════════════
   GO HOME
═══════════════════════════════════════════════════════ */
function goHome() {
  showScreen('screen-home');
}

/* ═══════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════ */
buildHome();
