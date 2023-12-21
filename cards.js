const questions = [
    {
        question: "Are you a student?",
        answers: ["Yes", "No"],
    },
    {
        question: "Are you a low-income person?",
        answers: ["Yes", "No"],
    },
    {
        question: "Do you have a Membership card?",
        answers: ["Yes", "No"],
    },
];

const offerInfo = {
    "Yes,Yes,Yes": { offer: "$100 off", reason: "Because you are a student, low-income person, and you have a membership card" },
    "Yes,Yes,No": { offer: "$75 off", reason: "Because you are a student and a low-income person" },
    "Yes,No,Yes": { offer: "$50 off", reason: "Because you are a student and you have a membership card" },
    "Yes,No,No": { offer: "$25 off", reason: "Because you are a student" },
    "No,No,No": { offer: "No offer", reason: "Not eligible" },
    "Unanswered,Unanswered,Unanswered": { offer: "No offer", reason: "Not eligible" },
    "Unanswered,Yes,Yes": { offer: "25%", reason: "Because you are a low-income person, and you have a membership card" },
    "Unanswered,Yes,No": { offer: "10% off", reason: "Because you are a low-income person" },
    "Unanswered,No,Yes": { offer: "10% off", reason: "Because you have a membership card" },
    "Unanswered,No,No": { offer: "No offer", reason: "Not eligible" },
    "Yes,Unanswered,No": { offer: "10% off", reason: "Because you are a student" },
    "Yes,No,Unanswered": { offer: "10% off", reason: "Because you are a student" },
    "Yes,Unanswered,Unanswered": { offer: "$10 off", reason: "Because you are a student" },
    "No,Unanswered,Unanswered": { offer: "No offer", reason: "Not eligible" },
    "No,Unanswered,Yes": { offer: "$10 off", reason: "Because you have a membership card" },
    "No,Yes,Unanswered": { offer: "$10 off", reason: "Because you are a low-income person" },
    "No,Yes,Yes": { offer: "50% off", reason: "Because you are a low-income person, and you have a membership card" },
    "No,Yes,No": { offer: "$10 off", reason: "Because you are a low-income person" }
};

let currentQuestion = 0;
let userAnswers = [];
let timeSpent = 0;
const startTime = Date.now();

function displayQuestion() {
    if (currentQuestion < questions.length) {
        const questionBox = document.getElementById("questions");
        const question = questions[currentQuestion];
        questionBox.innerHTML = `<p>Question ${currentQuestion + 1}: ${question.question}</p>`;
        question.answers.forEach(answer => {
            questionBox.innerHTML += `<label><input type="radio" name="q${currentQuestion}" value="${answer}">${answer}</label><br>`;
        });
        document.getElementById("next").style.display = "inline"; 
        document.getElementById("skip").style.display = "inline";
    } else {
        showResults();
    }
}

function showResults() {
    const resultsContainer = document.getElementById("results");
    const offer = offerInfo[userAnswers.join(",")];
    resultsContainer.style.display = "block";
    document.getElementById("offer").textContent = offer.offer;
    document.getElementById("reason").textContent = offer.reason;
    document.getElementById("time-spent").textContent = `${(timeSpent / 1000).toFixed(2)} seconds`;
}

function recordAnswer() {
    const selectedAnswer = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selectedAnswer) {
        userAnswers[currentQuestion] = selectedAnswer.value;
        currentQuestion++;
        displayQuestion();
    }
}

document.getElementById("next").addEventListener("click", recordAnswer);
document.getElementById("skip").addEventListener("click", () => {
    userAnswers[currentQuestion] = "Unanswered";
    currentQuestion++;
    displayQuestion();
});

setInterval(() => {
    timeSpent = Date.now() - startTime;
}, 1000);
