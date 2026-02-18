// 🎯 Quiz Data
const questions = [
  {
    question: "Which HTML tag is used to include JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: "<script>"
  },
  {
    question: "Which method adds an element at the end of an array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    answer: "push()"
  },
  {
    question: "What keyword is used to declare a constant variable?",
    options: ["let", "var", "const", "constant"],
    answer: "const"
  },
  {
    question: "What is the output of typeof null?",
    options: ["'null'", "'object'", "'undefined'", "'number'"],
    answer: "'object'"
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
    answer: "JSON.parse()"
  }
];

// 🔄 Elements
const quizBox = document.getElementById("quiz-box");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");
const resultBox = document.getElementById("result-box");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

let current = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let unanswered = 0;
let timeLeft = 10;
let timer;

// 🧠 Shuffle helper
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// ✅ Start Quiz
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.classList.add("hidden");
  resultBox.classList.add("hidden");
  restartBtn.classList.add("hidden");
  quizBox.classList.remove("hidden");

  current = 0;
  score = 0;
  correct = 0;
  wrong = 0;
  unanswered = 0;

  shuffleArray(questions);
  nextQuestion();
}

// 🎯 Display next question
function nextQuestion() {
  if (current >= questions.length) return endQuiz();

  const q = questions[current];
  progressEl.textContent = `Question ${current + 1} of ${questions.length}`;
  questionEl.textContent = q.question;

  optionsEl.innerHTML = "";
  const shuffledOptions = shuffleArray([...q.options]);

  shuffledOptions.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, handleResult);
    optionsEl.appendChild(btn);
  });

  timeLeft = 10;
  timerEl.textContent = `⏳ Time: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏳ Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      unanswered++;
      handleResult("unanswered");
    }
  }, 1000);
}

// 🧩 Check answer (with callback)
function checkAnswer(selected, callback) {
  clearInterval(timer);
  const q = questions[current];
  if (selected === q.answer) {
    score++;
    correct++;
    callback("correct");
  } else {
    wrong++;
    callback("wrong");
  }
}

// ⚙️ Handle feedback + next question
function handleResult(status) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (status === "correct" && btn.textContent === questions[current].answer) {
      btn.classList.add("correct");
    } else if (status === "wrong" && btn.textContent === questions[current].answer) {
      btn.classList.add("correct");
    } else if (status === "wrong" && btn.textContent !== questions[current].answer) {
      btn.classList.add("wrong");
    } else if (status === "unanswered" && btn.textContent === questions[current].answer) {
      btn.classList.add("unanswered");
    }
  });

  // ⏳ Wait 2 seconds, move next
  setTimeout(() => {
    current++;
    nextQuestion();
  }, 2000);
}

// 🏁 End Quiz
function endQuiz() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  restartBtn.classList.remove("hidden");

  resultBox.innerHTML = `
    <h2>Quiz Completed 🎉</h2>
    <p>Total Questions: ${questions.length}</p>
    <p>✅ Correct: ${correct}</p>
    <p>❌ Wrong: ${wrong}</p>
    <p>⏰ Unanswered: ${unanswered}</p>
    <p>🏆 Final Score: ${score}/${questions.length}</p>
  `;
}
