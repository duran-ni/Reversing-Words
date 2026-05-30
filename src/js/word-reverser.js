/**
 * Invierte el orden de las palabras en una cadena dada, manejando espacios múltiples.
 * @param {string} text - La cadena de entrada a invertir.
 * @returns {string} La cadena invertida.
 */
export function reverseWords(text) {
  if (!text || typeof text !== 'string') {
    return '';
  }

  return text
    .trim()
    .split(/\s+/)
    .reverse()
    .join(' ');
}