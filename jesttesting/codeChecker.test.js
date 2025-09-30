const { caesarCipherEncrypt, caesarCipherDecrypt } = require('./codeChecker');

// Test cases
// Valid inputs
test('Default shift value should be 3', () => {
  expect(() => caesarCipherEncrypt('HELLO', 3)).not.toThrow();
});

// Edge cases
test('Shift value should be 1 and 25', () => {
  expect(() => caesarCipherEncrypt('HELLO', 1)).not.toThrow();
  expect(() => caesarCipherEncrypt('HELLO', 25)).not.toThrow();
});

// Invalid inputs
test('Invalid shift values should throw errors', () => {
  expect(() => caesarCipherEncrypt('HELLO', 0)).toThrow();
  expect(() => caesarCipherEncrypt('HELLO', 26)).toThrow();
  expect(() => caesarCipherEncrypt('HELLO', -3)).toThrow();
  expect(() => caesarCipherEncrypt('HELLO', 'three')).toThrow();
});

// Valid inputs
test('Encrypt lowercase, uppercase, mixed case', () => {
  expect(caesarCipherEncrypt('hello', 3)).toBe('KHOOR');
  expect(caesarCipherEncrypt('HELLO', 3)).toBe('KHOOR');
  expect(caesarCipherEncrypt('HeLLo', 3)).toBe('KHOOR');
});

// Edge cases
test('Decrypt message correctly', () => {
  expect(caesarCipherDecrypt('KHOOR', 3)).toBe('HELLO');
});

// Invalid inputs
test('Message with invalid characters should throw error', () => {
  expect(() => caesarCipherEncrypt('hello@world', 3)).toThrow();
});

//Test for functions existence
test('Functions should exist', () => {
  expect(caesarCipherEncrypt).toBeDefined();
  expect(caesarCipherDecrypt).toBeDefined();
});

//Check for lower, upper and mixed case
test('Encrypt lowercase, uppercase, mixed case', () => {
  expect(caesarCipherEncrypt('hello', 3)).toBe('KHOOR');
  expect(caesarCipherEncrypt('HELLO', 3)).toBe('KHOOR');
  expect(caesarCipherEncrypt('HeLLo', 3)).toBe('KHOOR');
});

//Check for punctuation and spaces
test('Encrypt message with spaces and punctuation', () => {
  expect(caesarCipherEncrypt('Hello, World!', 3)).toBe('KHOOR, ZRUOG!');
});

//Check for empty message
test('Empty message should throw error', () => {
  expect(() => caesarCipherEncrypt('', 3)).toThrow();
});

//Throws error for non-string message
test('Non-string message should throw error', () => {
  expect(() => caesarCipherEncrypt(12345, 3)).toThrow();
});

//Throws error for not invalid characters
test('Message with invalid characters should throw error', () => {
  expect(() => caesarCipherEncrypt('hello@world', 3)).toThrow();
});

//Checking for shift < 1
test('Shift value less than 1 should throw error', () => {
  expect(() => caesarCipherEncrypt('HELLO', 0)).toThrow();
  expect(() => caesarCipherEncrypt('HELLO', -5)).toThrow();
});

//Checking for shift > 25
test('Shift value greater than 25 should throw error', () => {
  expect(() => caesarCipherEncrypt('HELLO', 26)).toThrow();
  expect(() => caesarCipherEncrypt('HELLO', 30)).toThrow();
});

//Checking for non-integer shift
test('Non-integer shift value should throw error', () => {
  expect(() => caesarCipherEncrypt('HELLO', 3.5)).toThrow();
  expect(() => caesarCipherEncrypt('HELLO', 'three')).toThrow();
  expect(() => caesarCipherEncrypt('HELLO', null)).toThrow();
  expect(() => caesarCipherEncrypt('HELLO', undefined)).toThrow();
  expect(() => caesarCipherEncrypt('HELLO', {})).toThrow();
  expect(() => caesarCipherEncrypt('HELLO', [])).toThrow();
});
