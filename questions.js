let questions = {};

fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
    console.log("Questions loaded:", questions); // Debugging line
  })
  .catch(error => {
    console.error('Error loading questions:', error);
  });

function generateQuestion() {
  const category = document.getElementById('category').value;

  let categoryQuestions = [];

  if (category === "Anything goes") {
    // Combine both categories
    categoryQuestions = [
      ...(questions["SFW"] || []),
      ...(questions["Anything goes"] || [])
    ];
  } else {
    // Use only the selected category
    categoryQuestions = questions[category] || [];
  }

  if (categoryQuestions.length === 0) {
    document.getElementById('question-display').innerText = "No questions found for this category.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
  const randomQuestion = categoryQuestions[randomIndex];
  document.getElementById('question-display').innerText = randomQuestion;
}
