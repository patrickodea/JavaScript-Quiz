var buttonClick = document.querySelector("#button");
var timer = document.querySelector(".timer");
var quiz = document.querySelector("#quiz");
var secondsLeft = 76;
var currentQuestion = 0;
var score = 0;

var quizQuestions = [
    {
        question: "Inside which HTML Element do we put the JS?",
        answers: ["script", "javascript", "js", "scripting"],
        correctAnswer: 0
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["Html", "Head", "Body", "All the above"],
        correctAnswer: 2
    },
    {
        question: "How do you write Hello World in an alert box?",
        answers: ["msg(Hello World)", "alert(Hello World)", "alertBox(Hello World)", "msgBox(Hello World)"],
        correctAnswer: 1
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function myFunction()", "function:myFunction()", "function = myFunction", "function function"],
        correctAnswer: 0
    }
];

    function setTime(event){ 
        event.preventDefault(setTime);
    var timeEnd = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time Left: " + secondsLeft;

        if (secondsLeft === 0 || currentQuestion >= quizQuestions.length) {
            clearInterval(timeEnd);
            sendMessage();
        }
    }, 1000);
}


function quizQuestionOne(event) {
    event.preventDefault();
    var homepageSection = document.querySelector("section");
    var quizSection = document.createElement("section");
    var currentQuizQuestion = quizQuestions[currentQuestion];
    quizSection.innerHTML = `
    <h2>Question ${currentQuestion + 1}</h2>
    <p>${currentQuizQuestion.question}</p>
    <button id="answer1">${currentQuizQuestion.answers[0]}</button>
    <button id="answer2">${currentQuizQuestion.answers[1]}</button>
    <button id="answer3">${currentQuizQuestion.answers[2]}</button>
    <button id="answer4">${currentQuizQuestion.answers[3]}</button>
    `;
    homepageSection.style.display = "none";
    document.body.appendChild(quizSection);

    var answerButtons = quizSection.querySelectorAll("button");
    answerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var selectedAnswerIndex = parseInt(button.id.slice(-1)) - 1;
        if (selectedAnswerIndex === currentQuizQuestion.correctAnswer) {
            score++;
        } else {
            secondsLeft -= 10;
        }

        currentQuestion++;
        quizSection.remove();

        if (currentQuestion < quizQuestions.length) {
            quizQuestionOne(event);
        } else {
            endGame();
        }
    });
    });
}

function sendMessage(){
    timer.textContent = " ";
    var timeEnd = document.createElement ("h1");
    timeEnd.textContent = "Times Up";
    document.body.appendChild(timeEnd);

}

buttonClick.addEventListener("click", setTime);
buttonClick.addEventListener("click", quizQuestionOne);

var submitInitialsButton = document.querySelector("#submitInitials");
var initialsInput = document.querySelector("#initialsInput");

submitInitialsButton.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = initialsInput.value;
    set_LocalStorage("initials", initials);
    showHighScores();
});

function showHighScores() {
    var storedInitials = get_LocalStorage("initials");
    var storedScore = get_LocalStorage("score");
    if (storedInitials && storedScore) {
        alert("Initials: " + storedInitials + "\nScore: " + storedScore);
    } else {
        alert("No high score available.");
    }
}
