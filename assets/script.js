var startQuiz = document.querySelector("#button")
var timer = document.querySelector(".timer");
var secondsLeft = 75;

    function setTime(){ 

    var timeEnd = setInterval(function() {

        secondsLeft--;
        timer.textContent = "Time Left: " + secondsLeft;

        if(secondsLeft === 0){
            clearInterval(timeEnd);
            sendMessage();
        }
    }, 1000);
 }




function sendMessage(){
    timer.textContent = " ";
    var timeUp = document.createElement ("h1");
    h1.setAttribute("Times Up!");

}
setTime();