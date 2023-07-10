var time = document.getElementById("time");


var secondsLeft = 75;

function setTime(){
    var timerInterval = setInterval(function(){
    secondsLeft--;
    time.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 75){
        clearInterval(timerInterval);
    }
}, 1000);
}