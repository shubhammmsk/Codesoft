  // Add event listener to submit button
  document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user answers
    var answers = {};
    var questions = document.querySelectorAll(".question");
    questions.forEach(function(question) {
        var questionId = question.querySelector("label").textContent;
        var answer = question.querySelector("input[type='radio']:checked");
        if (answer) {
            answers[questionId] = answer.value;
        }
    });

    // Calculate quiz score
    var score = 0;
    Object.keys(answers).forEach(function(questionId) {
        if (answers[questionId] === getCorrectAnswer(questionId)) {
            score++;
        }
    });

    // Display quiz results
    var resultsHtml = "You scored " + score + " out of " + questions.length + "!";
    document.getElementById("quiz-results").innerHTML = resultsHtml;
});

// Function to get correct answer for a question
function getCorrectAnswer(questionId) {
    // Hardcode correct answers for now
    var correctAnswers = {
        "What is the capital of France?": "Paris",
        "What is the largest planet in our solar system?": "Jupiter"
    };
    return correctAnswers[questionId];
}