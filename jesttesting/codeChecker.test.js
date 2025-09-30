/*Checking for shift default value and functions existence*/
test('Default shift value should be 3', () => {
    const shift = 3; // Default shift value
    expect(shift).toBe(3);
});

/*Try edge values (1 and 25)*/
test('Shift value should be 1', () => {
    const shift = 1; // Edge shift value
    expect(shift).toBe(1);
});
test('Shift value should be 25', () => {
    const shift = 25; // Edge shift value
    expect(shift).toBe(25);
});

/*Try invalid values (0, 26, negative, non-numeric).*/
test('Shift value should not be 0', () => {
    const shift = 0; // Invalid shift value
    expect(shift).not.toBe(0);
});
test('Shift value should not be 26', () => {
    const shift = 26; // Invalid shift value
    expect(shift).not.toBe(26);
});
test('Shift value should not be negative', () => {
    const shift = -3; // Invalid shift value
    expect(shift).not.toBeLessThan(0);
});         
test('Shift value should be a number', () => {
    const shift = 'three'; // Invalid shift value
    expect(typeof shift).toBe('number');
});

/* Test with lowercase, uppercase, mixed case */
test('Lowercase input should be handled correctly', () => {
    const message = 'hello';
    const shift = 3;
    const expected = 'KHOOR';
    const result = caesarCipherEncrypt(message, shift);
    expect(result).toBe(expected);
});
test('Uppercase input should be handled correctly', () => {
    const message = 'HELLO';
    const shift = 3;
    const expected = 'KHOOR';
    const result = caesarCipherEncrypt(message, shift);
    expect(result).toBe(expected);
});         
test('Mixed case input should be handled correctly', () => {
    const message = 'HeLLo';
    const shift = 3;
    const expected = 'KHOOR';
    const result = caesarCipherEncrypt(message, shift);
    expect(result).toBe(expected);
});
