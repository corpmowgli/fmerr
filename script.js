
const questions = [
  {
    question: "Where did I work as an IT Infrastructure Engineer?",
    choices: ["INTRUM", "UNITED SOLUTIONS", "Amazon Web Services", "All of the above"],
    answer: "All of the above",
    cvContent: `<h4>Professional Experience</h4><p><strong>ITM:</strong> IT Infrastructure Engineer, Network Engineer</p>`
  },
  {
    question: "Box Joke: What do you do when you’ve been spotted?",
    choices: ["Run away", "Hide in a box", "Fight back", "Call for backup"],
    answer: "Hide in a box",
    cvContent: `<p>Hiding in a box might actually work in some situations!</p>`
  },
  {
    question: "What are my language skills?",
    choices: ["French, English, Italian", "Arabic", "Both A and B", "None"],
    answer: "Both A and B",
    cvContent: `<h4>Languages</h4><p>French, English, Italian (Fluent); Arabic (Conversational)</p>`
  }
];

let currentQuestionIndex = 0;

function startGame() {
  document.getElementById("game").classList.remove("hidden");
  document.querySelector("header").classList.add("hidden");
  alert("“This is Snake, ready for the mission.”");
  loadQuestion();
}

function loadQuestion() {
  const questionObj = questions[currentQuestionIndex];
  document.getElementById("question").innerText = questionObj.question;
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";

  questionObj.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.onclick = () => checkAnswer(choice);
    choicesContainer.appendChild(button);
  });
}

function checkAnswer(choice) {
  const questionObj = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");
  
  if (choice === questionObj.answer) {
    feedback.innerText = "“Good job, mission progress achieved.”";
    document.getElementById("cv-content").innerHTML += questionObj.cvContent;
    document.getElementById("cv-sections").classList.remove("hidden");
    currentQuestionIndex++;

    if (currentQuestionIndex === 2) {
      startMiniGame();
    } else {
      loadQuestion();
    }
  } else {
    feedback.innerText = "“Colonel, I’ve been spotted!”";
  }
}

function startMiniGame() {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("minigame-section").classList.remove("hidden");
  initGame();
}
