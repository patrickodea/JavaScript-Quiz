var timer = document.querySelector(".timer");


var secondsLeft = 75;

function startTime(){
    var timerInterval = setInterval(function(){
    secondsLeft--;
    time.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 75){
        clearInterval(timerInterval);
    }
}, 1000);
}