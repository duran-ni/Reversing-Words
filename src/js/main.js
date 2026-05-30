import { reverseWords } from './word-reverser.js';

const form = document.querySelector('#reverserForm');
const input = document.querySelector('#textInput');
const resultContainer = document.querySelector('#resultContainer');
const resultText = document.querySelector('#resultText');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const originalText = input.value;
  const processedText = reverseWords(originalText);
  
  resultText.textContent = processedText;
  resultContainer.classList.remove('hidden');
});