document.getElementById('generateBtn').addEventListener('click', function() {
    const randomValue = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    document.getElementById('result').innerText = `Random Value: ${randomValue}`;
});
