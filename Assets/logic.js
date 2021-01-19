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
   const highscoreBtn = document.createElement("button");
   highscoreBtn.textContent="View Highscores";
   highscoreBtn.addEventListener("click", displayHighScores);
   answersDiv.append(highscoreBtn);
}

function setTimer(){
  timer=setInterval(function(){
    quizTime --;
    timerSpan.textContent="Time Left: "+quizTime;
    if(quizTime<=0){
      quizTime=0;
      endGame();

    }
  }, 1000)
}

function startQuiz(){
  quizTime=30;
  index=0;
  setTimer();
  timerSpan.textContent = "Time Left: "+quizTime;
  populateQuestion();
}

function populateQuestion(){
  questionH1.textContent=quiz[index].question;
  answersDiv.innerHTML = "";
  for(let i=0; i<quiz[index].choices.length; i++){
    const button= document.createElement("button");
    button.textContent= quiz[index].choices[i];
    button.addEventListener("click", compareAnswer)
    answersDiv.append(button);
  }
}

function compareAnswer(event){
  if(event.target.textContent !== quiz[index].answer){
    quizTime -=5;
  } 
  if(++index < quiz.length){
    populateQuestion();
  } else{
    endGame();
  }
}

function endGame(){
  clearInterval(timer);
  timerSpan.textContent="Quiz Over!";
  questionH1.textContent="Your Score is: "+quizTime;
  answersDiv.innerHTML="";

  const instructions = document.createElement("p");
  instructions.textContent="Enter Initials";

  const nameInput = document.createElement("input");
  nameInput.placeholder="GG";
  nameInput.setAttribute("id", "name");

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit!";
  submitBtn.addEventListener("click", submitScore);

  answersDiv.append(instructions);
  answersDiv.append(nameInput);
  answersDiv.append(submitBtn);

}

function submitScore(){
  let scoreArr = JSON.parse(localStorage.getItem("highscores"));
  const newScore = {
    name: document.getElementById("name").value,
    score: quizTime
  }
  if(scoreArr){
    scoreArr.push(newScore);
  } else {
    scoreArr=[newScore];
  }
  scoreArr.push(newScore);
  localStorage.setItem("highscores", JSON.stringify(scoreArr));
  displayHighScores();

}

function displayHighScores(){
  let scoreArr = JSON.parse(localStorage.getItem("highscores"));
  answersDiv.innerHTML="";
  if(scoreArr.length>1){
    scoreArr.sort((a,b) => (a.score < b.score) ? 1 : -1);
  }
  
  for (let i=0; i <scoreArr.length; i++){
    var newP = document.createElement("p");
    newP.textContent= scoreArr[i].name+": "+scoreArr[i].score;
    answersDiv.append(newP);
  }

  const replayBtn = document.createElement("button");
  replayBtn.textContent = "Replay?";
  replayBtn.addEventListener("click", startQuiz);
  answersDiv.append(replayBtn);
}

onLoad();