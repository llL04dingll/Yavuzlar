/*const homePageButton = document.getElementById("homePageButton");
const editPageButton = document.getElementById("editQuestionButton");
const panelPageButton = document.getElementById("panelPageButton");


function goToHomePage() {
    window.location.href = "home.html";
  }

  function goToEditPage() {
    window.location.href = "editQuestion.html";
  }

  function goToPanelPage() {
    window.location.href = "panelQuestions.html";
  }

  function nextQuestion() {
    window.location.href = "panelQuestions.html";
  }


  homePageButton.addEventListener("click", goToHomePage);
  editPageButton.addEventListener("click", goToHomePage);
  panelPageButton.addEventListener("click", goToHomePage);
*/

  const questions = [{
    question: "2 + 2 ?",
    answers:[
    {text:"5",correct:false},
    {text:"3",correct:false},
    {text:"4",correct:true},
    {text:"1",correct:false}]},
    {
      question:"5 x 4 ?",
      answers:[
      {text:"2",correct:false},
      {text:"20",correct:true},
      {text:"4",correct:false},
      {text:"5",correct:false}]},
      {
        question: "4 - 1 ?",
        answers:[
        {text:"1",correct:false},
        {text:"5",correct:false},
        {text:"3",correct:true},
        {text:"2",correct:false}]}
];

const questionElement= document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("nextQuestionButton");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Sonraki soru";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion= questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex +1;
  questionElement.innerHTML=questionNo+ ". "+ currentQuestion.question;

  currentQuestion.answers.forEach(answer =>{
    const button= document.createElement("button");
    button.innerHTML= answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct= answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  });
}

function selectAnswer(e){
  const selectBtn = e.target;
  const isCorrect= selectBtn.dataset.correct ==="true";
  if(isCorrect){
    selectBtn.classList.add("correct");
    score++;
  }else{
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct ==="true"){
      button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextButton.style.display="block";
}

function resetState(){

  nextButton.style.display="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showScore(){
  resetState();
  questionElement.innerHTML=`Skorunuz:${score} `;
  nextButton.innerHTML="Tekrar";
  nextButton.style.display="block";
}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex< questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})
startQuiz();



