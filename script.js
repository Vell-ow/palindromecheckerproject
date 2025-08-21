document.getElementById('check-btn').addEventListener('click', function () {
  const textInput = document.getElementById('text-input');
  const result = document.getElementById('result');
  const originalText = textInput.value.trim();

  if (originalText === '') {
    alert('Please input a value.');
  } else {
    // Normalize input: remove non-alphanumeric characters and convert to lowercase
    const cleanedText = originalText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === reversedText) {
      result.textContent = `${originalText} is a palindrome.`;
    } else {
      result.textContent = `${originalText} is not a palindrome.`;
    }
  }
});
