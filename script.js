// ═══════════════════════════════════
//         ALL STATE VARIABLES
// ═══════════════════════════════════
let currentQuestion = 0;   // which question we are on (0 to 9)
let score = 0;             // how many correct answers
let selectedCategory = ''; // which category the user picked
let username = '';         // name the user typed
let timer;                 // holds the countdown interval
let timeLeft = 15;         // seconds remaining for each question
let answered = false;      // did user answer the current question?


// ═══════════════════════════════════
//      FUNCTION 1 — SHOW SCREEN
// ═══════════════════════════════════
// This is the most important function.
// It hides ALL screens then shows only the one you ask for.

function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(function(screen) {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}


// ═══════════════════════════════════
//    FUNCTION 2 — START BUTTON
// ═══════════════════════════════════
// When user clicks Start on Home Screen

document.getElementById('start-btn').addEventListener('click', function() {
  const input = document.getElementById('username-input').value.trim();

  if (input === '') {
    alert('Please enter your name to start!');
    return;
  }

  username = input;
  showScreen('category-screen');
});


// ═══════════════════════════════════
//  FUNCTION 3 — CATEGORY BUTTONS
// ═══════════════════════════════════
// When user clicks a category

const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    selectedCategory = this.getAttribute('data-category');
    currentQuestion = 0;
    score = 0;
    showScreen('question-screen');
    loadQuestion();
  });
});


// ═══════════════════════════════════
//   FUNCTION 4 — LOAD QUESTION
// ═══════════════════════════════════
// Reads current question from questions.js and displays it

function loadQuestion() {
  answered = false;
  document.getElementById('next-btn').style.display = 'none';

  // get the current question object
  const q = questions[selectedCategory][currentQuestion];

  // update question counter
  document.getElementById('question-counter').textContent =
    'Question ' + (currentQuestion + 1) + ' of 10';

  // put question text on screen
  document.getElementById('question-text').textContent = q.question;

  // put each option on the 4 buttons
  const optBtns = document.querySelectorAll('.option-btn');
  optBtns.forEach(function(btn, index) {
    btn.textContent = q.options[index];
    btn.className = 'option-btn';  // reset green/red colors
    btn.disabled = false;          // re-enable buttons
  });

  // update progress bar
  const progress = (currentQuestion / 10) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';

  // update score
  document.getElementById('score-display').textContent = 'Score: ' + score;

  // start the timer
  startTimer();
}


// ═══════════════════════════════════
//  FUNCTION 5 — CHECK ANSWER
// ═══════════════════════════════════
// Runs when user clicks any option button

function checkAnswer(clickedBtn) {
  if (answered) return;  // ignore if already answered
  answered = true;
  clearInterval(timer);  // stop the timer

  const q = questions[selectedCategory][currentQuestion];
  const optBtns = document.querySelectorAll('.option-btn');

  // disable all buttons and highlight correct answer green
  optBtns.forEach(function(btn) {
    btn.disabled = true;
    if (btn.textContent === q.answer) {
      btn.classList.add('correct');
    }
  });

  // if clicked button was wrong color it red
  if (clickedBtn.textContent !== q.answer) {
    clickedBtn.classList.add('wrong');
  } else {
    score++;  // only increase score if correct
  }

  // update score display
  document.getElementById('score-display').textContent = 'Score: ' + score;

  // show next button
  document.getElementById('next-btn').style.display = 'block';
}


// ═══════════════════════════════════
//  FUNCTION 6 — OPTION BTN CLICKS
// ═══════════════════════════════════
// Attach checkAnswer to all 4 option buttons

const optBtns = document.querySelectorAll('.option-btn');
optBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    checkAnswer(this);
  });
});


// ═══════════════════════════════════
//   FUNCTION 7 — NEXT BUTTON
// ═══════════════════════════════════

document.getElementById('next-btn').addEventListener('click', function() {
  currentQuestion++;
  if (currentQuestion < 10) {
    loadQuestion();   // load next question
  } else {
    showResult();     // all 10 done — show result
  }
});


// ═══════════════════════════════════
//   FUNCTION 8 — SHOW RESULT
// ═══════════════════════════════════

function showResult() {
  clearInterval(timer);
  showScreen('result-screen');

  const wrong = 10 - score;
  const percentage = Math.round((score / 10) * 100);

  document.getElementById('result-username').textContent =
    'Well done, ' + username + '!';
  document.getElementById('final-score').textContent = score + ' / 10';
  document.getElementById('score-percentage').textContent = percentage + '%';
  document.getElementById('correct-count').textContent = '✓ Correct: ' + score;
  document.getElementById('wrong-count').textContent   = '✗ Wrong: '   + wrong;

  let msg = '';
  if      (score >= 9) msg = '🏆 Excellent! Outstanding performance!';
  else if (score >= 7) msg = '🎉 Great job! Well done!';
  else if (score >= 5) msg = '👍 Good effort! Keep practicing!';
  else                 msg = '💪 Keep trying! You will do better next time!';

  document.getElementById('performance-msg').textContent = msg;
  
  // ── HIGH SCORE LOGIC ──
  // key is unique per person e.g. "highScore_Chetan"
  const key = 'highScore_' + username;

  // get their previous high score from localStorage
  let highScore = localStorage.getItem(key);

  // if no score saved yet, start at 0
  if (highScore === null) {
    highScore = 0;
  } else {
    highScore = parseInt(highScore);
  }

  // if current score beats their high score, save it
  if (score > highScore) {
    localStorage.setItem(key, score);
    highScore = score;
  }

  // show on screen
  document.getElementById('high-score-display').textContent = highScore;
}


// ═══════════════════════════════════
//  FUNCTION 9 — PLAY AGAIN BUTTON
// ═══════════════════════════════════

document.getElementById('play-again-btn').addEventListener('click', function() {
  currentQuestion = 0;
  score = 0;
  document.getElementById('username-input').value = '';
  showScreen('home-screen');
});


// ═══════════════════════════════════
// FUNCTION 10 — CHANGE CATEGORY BTN
// ═══════════════════════════════════

document.getElementById('change-cat-btn').addEventListener('click', function() {
  currentQuestion = 0;
  score = 0;
  showScreen('category-screen');
});


// ═══════════════════════════════════
//   FUNCTION 11 — TIMER
// ═══════════════════════════════════

function startTimer() {
  clearInterval(timer);
  timeLeft = 15;

  const timerEl = document.getElementById('timer');
  timerEl.textContent = timeLeft;
  timerEl.className = '';  // remove danger class

  timer = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft;

    // turn red when 5 or below
    if (timeLeft <= 5) {
      timerEl.className = 'danger';
    }

    // time is up
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (!answered) {
        answered = true;
        const q = questions[selectedCategory][currentQuestion];

        // disable all buttons, show correct answer
        document.querySelectorAll('.option-btn').forEach(function(btn) {
          btn.disabled = true;
          if (btn.textContent === q.answer) {
            btn.classList.add('correct');
          }
        });

        document.getElementById('next-btn').style.display = 'block';
      }
    }
  }, 1000);  // runs every 1 second
}


// ═══════════════════════════════════
//   LAST LINE — SHOW HOME SCREEN
// ═══════════════════════════════════
showScreen('home-screen');