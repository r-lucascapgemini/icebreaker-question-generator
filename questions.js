let questions = {};

fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
  })
  .catch(error => {
    console.error('Error loading questions:', error);
  });

function generateQuestion() {
  const category = document.getElementById('category').value;
  const categoryQuestions = questions[category];
  if (!categoryQuestions) {
    document.getElementById('question-display').innerText = "No questions found for this category.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
  const randomQuestion = categoryQuestions[randomIndex];
  document.getElementById('question-display').innerText = randomQuestion;
}
