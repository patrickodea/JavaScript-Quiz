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
            var quizSection = document.getElementById("quiz");
            quizSection.style.display = "none";
            sendMessage();
        }
    }, 1000);
}


function quizQuestionOne(event) {
    event.preventDefault();
    var homepageSection = document.querySelector("section");
    var quizSection = document.createElement("section");
    quizSection.innerHTML = `
    <h2>Question 1</h2>
    <p>Inside which HTML Element do we put the JS?</p>
    <button id="answer1">script</button>
    <button id="answer2">javascript</button>
    <button id="answer3">js</button>
    <button id="answer4">scripting</button>
    `;
    homepageSection.style.display = "none";
    document.body.appendChild(quizSection);
}


buttonClick.addEventListener("click", setTime);
buttonClick.addEventListener("click", quizQuestionOne);



function sendMessage(){
    timer.textContent = " ";
    var timeEnd = document.createElement ("h1");
    timeEnd.textContent = "Times Up";
    document.body.appendChild(timeEnd);

}
