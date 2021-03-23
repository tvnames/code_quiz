
var pos = 0, quiz, status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var button = btn;
const btn = document.querySelector("button");
const txt = document.querySelector("p");
btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start Quiz") {
   getElementById("questions");
  }


var questions = [
  {
      question: "What is a boolean?",
      a: "a type of pasta served with cheese",
      b: "a variable having two values called true and false",
      c: "a ghost who is very fit",
      d: "a maybe question",
      answer: "B"
    },
  {
      question: "What is a string?",
      a: "a piece of fiber woven together",
      b: "a thing used to create sweaters",
      c: "a global object that is used to store strings",
      d: "a verb",
      answer: "C"
    },
  {
      question: "What does NaN stand for?",
      a: "Not a Number",
      b: "Nancy ate Nectarines",
      c: "Noggins accept news",
      d: "Not a Nomenclature",      
      answer: "A"
    },
  {
      question: "What is onclick?",
      a: "a start button",
      b: "a way to turn on a flashlight ",
      c: "an expression that gets evaluated when you click",
      d: "a variable charged by clicking",
      answer: "C"
    },
  {
      question: "What is an array?",
      a: "a type of ligth wavelength",
      b: "a supervillans weapon of destruction",
      c: "a special variable that can hold more than one value at a time",
      d: "a pirate seeing marine life",
      answer: "C"
    }
  
  ];

// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function getQuestion(){
  quiz = get("quiz");
  if(pos >= questions.length){
    quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("status").innerHTML = "Quiz completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of getQuestion function running when test is completed
    return false;
  }
  get("status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;
  // displays the question
  quiz.innerHTML = "<h3>"+question+"</h3>";
  // displays the user choices of answers
  // the += appends to the data we started on the line above
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  //  if answer matches the correct choice
  if(choice == questions[pos].answer){
    // value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // getQuestion runs again to go to next question
  getQuestion();
}
// Add event listener to call getQuestion on page load event
window.addEventListener("load", getQuestion);