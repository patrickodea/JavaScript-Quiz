var buttonClick = document.querySelector("#button");
var timer = document.querySelector(".timer");

var secondsLeft = 76;

    function setTime(event){ 
        event.preventDefault(setTime);
    var timeEnd = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time Left: " + secondsLeft;

        if(secondsLeft === 0){
            clearInterval(timeEnd);
            sendMessage();
        }
    }, 1000);
 }

 function quizQuestions(){
    var quizQuestion = "Inside which HTML element do we put the JavaScript?";
    var questionElement = document.querySelector("#question");
    var descriptionElement = document.querySelector("#quiz-description");

    questionElement.textContent = quizQuestion;
    descriptionElement.style.display = "none";
    buttonClick.style.display="none";


    var answerElement = document.querySelector("#answer");

    var answerOptions = ["<script>", "<javascript>", "<js>", "<java-s>"];

    answerOptions.forEach(function(option){
        var li = document.createElement("button");
        li.textContent = option;
        answerElement.appendChild(li);
    });


 }



 buttonClick.addEventListener("click", setTime);
 buttonClick.addEventListener("click", quizQuestions);



function sendMessage(){
    timer.textContent = " ";
    var timeEnd = document.createElement ("h1");
    h1.setAttribute("Times Up!");

}
