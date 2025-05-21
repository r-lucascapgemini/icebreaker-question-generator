
const questions = {
    "Science": ["What is gravity?", "What is photosynthesis?", "What is the speed of light?"],
    "History": ["Who was Napoleon?", "What caused WWI?", "Who discovered America?"]
};

function generateQuestion() {
    const category = document.getElementById('category').value;
    const categoryQuestions = questions[category];
    const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
    const randomQuestion = categoryQuestions[randomIndex];
    document.getElementById('question-display').innerText = randomQuestion;
}
