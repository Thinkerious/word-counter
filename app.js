// Get the input field and the count elements
const input = document.getElementById('input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');

// Add an input listener to the input field
input.addEventListener('input', () => {
  // Get the input value and trim any extra whitespace
  const value = input.value.trim();

  // Split the value into an array of words and filter out any empty strings
  const words = value.split(/\s+/).filter(word => word !== '');

  // Update the word count element with the length of the words array
  wordCount.innerText = words.length;

  // Update the character count element with the length of the input value
  charCount.innerText = value.length;
});