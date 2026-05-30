import { describe, test, expect } from 'vitest';
import { reverseWords } from './word-reverser.js';

describe('reverseWords()', () => {
  test('should reverse the words of a given string', () => {
    const input = 'Hello World';
    const expectedOutput = 'World Hello';
    
    expect(reverseWords(input)).toBe(expectedOutput);
  });

  test('should handle multiple spaces between words and clean leading/trailing spaces', () => {
    const input = '   Flying   to   Asturias   ';
    const expectedOutput = 'Asturias to Flying';
    
    expect(reverseWords(input)).toBe(expectedOutput);
  });

  test('should return an empty string when the input is empty or only spaces', () => {
    expect(reverseWords('')).toBe('');
    expect(reverseWords('    ')).toBe('');
  });
});