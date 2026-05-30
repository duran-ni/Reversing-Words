import { reverseWords } from './word-reverser.js';

const form = document.querySelector('#reverserForm');
const input = document.querySelector('#textInput');
const resultContainer = document.querySelector('#resultContainer');
const resultText = document.querySelector('#resultText');

// Función asíncrona para manejar la lógica del código con retardo de ejecución.
async function handleTextTransformation(originalText) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedText = reverseWords(originalText);
      resolve(processedText);
    }, 300); // 300ms artificial delay
  });
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const originalText = input.value;
  
  try {
    // Esperando la resolución de texto asíncrona
    const processedText = await handleTextTransformation(originalText);
    
    resultText.textContent = processedText;
    resultContainer.classList.remove('hidden');
  } catch (error) {
    console.error('An error occurred during text processing:', error);
  }
});