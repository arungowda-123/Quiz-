// script.js

// Sample questions in JSON format
const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Load the current question
function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const answersList = document.getElementById('answers');
    answersList.innerHTML = '';

    // Display answer options
    question.answers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<button onclick="checkAnswer(${index})">${answer}</button>`;
        answersList.appendChild(li);
    });

    // Update navigation button states
    document.getElementById('prev').disabled = currentQuestionIndex === 0;
    document.getElementById('next').disabled = currentQuestionIndex === quizData.length - 1;
}

// Check answer and update score
function checkAnswer(selectedIndex) {
    const question = quizData[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        score++;
    }
    navigate(1);
}

// Handle navigation between questions
function navigate(direction) {
    currentQuestionIndex += direction;
    if (currentQuestionIndex >= quizData.length) {
        showResult();
    } else {
        loadQuestion();
    }
}

// Show final result
function showResult() {
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = score;

    let message = '';
    if (score === quizData.length) {
        message = "Perfect! You answered all questions correctly!";
    } else if (score > quizData.length / 2) {
        message = "Good job! You did well!";
    } else {
        message = "Better luck next time!";
    }
    document.getElementById('message').textContent = message;
}

// Restart the quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    loadQuestion();
}

// Initialize quiz
loadQuestion();
