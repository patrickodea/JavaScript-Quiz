var buttonClick = document.querySelector("#button");
var timer = document.querySelector(".timer");
var quiz = document.querySelector("#quiz");
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
        var quizQuestions = document.getElementById("#quiz")
 }   





 buttonClick.addEventListener("click", setTime);
 buttonClick.addEventListener("click", quizQuestions);



function sendMessage(){
    timer.textContent = " ";
    var timeEnd = document.createElement ("h1");
    h1.setAttribute("Times Up!");

}
