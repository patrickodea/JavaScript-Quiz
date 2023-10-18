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
    <button>script</button>
    <button>javascript</button>
    <button>js</button>
    <button>scripting</button>
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


buttonClick.addEventListener("click", setTime);
buttonClick.addEventListener("click", quizQuestionOne);



function sendMessage(){
    timer.textContent = " ";
    var timeEnd = document.createElement ("h1");
    timeEnd.textContent = "Times Up";
    document.body.appendChild(timeEnd);

}
