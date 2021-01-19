const quiz= [
  {
    question: "Who was the only 6 star General in American History",
    choices: [
      "Mickey Mouse", "Capt'n Crunch", "John J. Pershing", "Lex Luthor" ],
    answer: "John J. Pershing"
  },
  {
    question: "Who was the only 6 star General in American History",
    choices: [
      "Mickey Mouse", "Capt'n Crunch", "John J. Pershing", "Lex Luthor" ],
    answer: "John J. Pershing"
  },
  {
    question: "Who was the only 6 star General in American History",
    choices: [
      "Mickey Mouse", "Capt'n Crunch", "John J. Pershing", "Lex Luthor" ],
    answer: "John J. Pershing"
  },
  {
    question: "Who was the only 6 star General in American History",
    choices: [
      "Mickey Mouse", "Capt'n Crunch", "John J. Pershing", "Lex Luthor" ],
    answer: "John J. Pershing"
  }
]

let index;
let timer;
let quizTime;
const timerSpan = document.getElementById("timer");
const questionH1 = document.getElementById("question");
const answersDiv = document.getElementById("answers");

function onLoad(){
   timerSpan.textContent="";
   questionH1.textContent="Quiz";
   const startBtn = document.createElement("button");
   startBtn.textContent="Begin Quiz!";
   startBtn.addEventListener("click", startQuiz);
   answersDiv.append(startBtn);
}

function setTimer(){
  timer=setInterval(function(){
    quizTime --;
    timerSpan.textContent="Time Left: "+quizTime;
    if(quizTime<=0){
      quizTime=0;
      timerSpan.textContent="Time's Up!";
      clearInterval(timer);

    }
  })
}

function startQuiz(){
  quizTime=10;
  index=0;
  setTimer();
  questionH1.textContent=quiz[index].question;
  for(let i=0; i<quiz[index].choices.length; i++){
    const button= document.createElement("button");
    button.textContent= quiz[index].choices[i];
    button.addEventListener("click", compareAnswer)
    answersDiv.append(button);
  }
}

function compareAnswer(event){
  console.log(event);
}

onLoad();









// const quiz =[
//   {
//     question: "How well does this app work?",
//     answers: [
//       {text: "Flaming hot cheetos", correct: false},
//       {text: "Dumpster Fire", correct: true},
//       {text: "Kind of ok", correct: false},
//       {text: "Got the questions to show up", correct: false}
//     ]
//   },
//   {
//     question: "Who was the only 6 star General in American History?",
//     answers: [
//       {text: "Mickey Mouse", correct: false},
//       {text: "Capt'n Crunch", correct: false},
//       {text: "John J. Pershing", correct: true},
//       {text: "Lex Luthor", correct: false}
//     ]
//   },
//   {
//     question: "What is the longest river in the world?",
//     answers: [
//       {text: "Nile", correct: true},
//       {text: "Yellor River", correct: false},
//       {text: "Amazon", correct: false},
//       {text: "Yangtze", correct: false}
//     ]
//   },
//   {
//     question: "Which band is NOT in the Rock N Roll hall of fame?",
//     answers: [
//       {text: "ACDC", correct: false},
//       {text: "Aerosmith", correct: false},
//       {text: "Beastie Boys", correct: false},
//       {text: "Motörhead", correct: true},
//     ]
//   }
// ]

// const startButton = document.getElementById("startbtn");
// const nextButton =document.getElementById("nextbtn")
// const questionContainerElement = document.getElementById("questionContainer");
// const questionElement = document.getElementById("question");
// const answerButtonsElement = document.getElementById("answerbtn");
// // const timerSpan = document.getElementById("#timer");

// var timeEl = document.querySelector("#timer");
// var secondsLeft;
// var timer = secondsLeft;
// var count = localStorage.getItem("count");

// count = secondsLeft;

// let shuffledQuestions, currentQuestionIndex
// // let nextbutton = submit;
// // let startButton = restart;

// // click events for the navigation buttons. Starts game, returns next question, or score on last question.
// startButton.addEventListener("click", startGame)
// nextButton.addEventListener("click", () =>{
//   // preventDefault();
//   currentQuestionIndex++
//   setNextQuestion();
//   // if (nextButton = submit){
//   //   score();
    
//   // }
// })

// // setting up timer interval. When game starts begins counting down to 0; on 0 displays game over screen and returns score. Logs score to local storage.
// function setTime(){
//   var timerInterval = setInterval(function(){
//     // timer.reset();
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left";

//     if(secondsLeft <=0){
//       secondsLeft=0;
//       clearInterval(timerInterval);
//       sendMessage();
//     }
//   }, 1000);
// }

// function sendMessage(){
//   timeEl.textContent = "Times UP! ";
//   answerButtonsElement.classList.add("hide");
//   localStorage.getItem("count");
//   // questionElement.appendChild("Your Score " + count);
  
// }

// function score(){
//   if (shuffledQuestions > currentQuestionIndex +1){
//     localStorage.setItem("count", count)
//   }
// }

// // Begins game, randomly shuffles questions. When answered, hitting next displays next randomized question. 
// function startGame(){
//   setTime();
//   secondsLeft=10;
//   // timeEl.textContent= secondsLeft + " seconds left";
//   startButton.classList.add("hide")
//   shuffledQuestions = questions.sort(() => Math.random() -.5)
//   currentQuestionIndex = 0
//   questionContainerElement.classList.remove("hide")
//   setNextQuestion()
// }

// function setNextQuestion(){
//   resetState()
//   showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// // Displays questions
// function showQuestion(question){
//   questionElement.innerText = question.question
//   question.answers.forEach(answer => {
//     const button = document.createElement("button")
//     button.innerText = answer.text
//     button.classList.add("btn")
//     if (answer.correct) {
//       button.dataset.correct = answer.correct
//     }
//     button.addEventListener("click", selectAnswer)
//     answerButtonsElement.appendChild(button)
//   })

// }
// // Resets green and red true/false settings
// function resetState() {
//   clearStatusClass(document.body)
//   nextButton.classList.add("hide")
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild
//     (answerButtonsElement.firstChild)
//   }
// }

// // Determines if answer correct, displays new options when all q's answered.
// function selectAnswer(e){
//   const selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   setStatusClass(document.body, correct)
//   Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
//   })
//   if (shuffledQuestions.length > currentQuestionIndex +1 ){
//     nextButton.classList.remove("hide")
//   } else {
//     startButton.innerText = "Restart"
//     startButton.classList.remove("hide")
//     nextButton.classList.remove("hide")
//     nextButton.innerText = "Submit"
//   }
// }

// function setStatusClass(element, correct){
//   clearStatusClass(element)
//   if (correct){
//     element.classList.add("correct")
//   } else {
//     element.classList.add("wrong")
//   }
// }

// function clearStatusClass(element){
//   element.classList.remove("correct")
//   element.classList.remove("wrong")
// }

