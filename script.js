let shift = 3;
let decryptShift = 3; // Default shift value
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Function to encrypt the message  
function caesarCipherEncrypt(message, shift) {
     if (typeof shift !== 'number' || shift < 1 || shift > 25 || !Number.isInteger(shift)) {
        throw new Error('Shift value must be a whole number between 1 and 25');
     }
     if (message.length === 0) {
        throw new Error('Message cannot be empty');
     }
     if (!/^[A-Za-z\s.,!?]*$/.test(message)) {
        throw new Error('Message contains invalid characters');
     }
     if (typeof message !== 'string') {
        throw new Error('Message must be a string');
     }
    return message.toUpperCase().split('').map(char => {
        let index = alphabet.indexOf(char);
        if (index === -1) return char; // Non-alphabetic characters are not changed
        return alphabet[(index + shift) % 26];
    }).join('');
}

// Function to decrypt the message
function caesarCipherDecrypt(message, shift) {
    if (typeof shift !== 'number' || shift < 1 || shift > 25 || !Number.isInteger(shift)) {
        throw new Error('Shift value must be a whole number between 1 and 25');
     }
     if (message.length === 0) {
        throw new Error('Message cannot be empty');
     }
     if (!/^[A-Za-z\s.,!?]*$/.test(message)) {
        throw new Error('Message contains invalid characters');
     }
     if (typeof message !== 'string') {
        throw new Error('Message must be a string');
     }
    return message.toUpperCase().split('').map(char => {
        let index = alphabet.indexOf(char);
        if (index === -1) return char; // Non-alphabetic characters are not changed
        return alphabet[(index - shift + 26) % 26];
    }).join('');
}

document.getElementById('shift').addEventListener('input', (e) => {
    shift = parseInt(e.target.value);
    document.getElementById('shift-value').textContent = shift;
});

document.getElementById('encrypt-btn').addEventListener('click', () => {
    const message = document.getElementById('message').value;
    try {
        const encryptedMessage = caesarCipherEncrypt(message, shift);
        document.getElementById('encrypted-message').textContent = encryptedMessage;
    } catch (error) {
        document.getElementById('error-message').textContent = error.message;
    }
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const message = document.getElementById('decrypted-message-input').value;
    try {
        const decryptedMessage = caesarCipherDecrypt(message, shift);
        document.getElementById('decrypted-message').textContent = decryptedMessage;
    } catch (error) {
        document.getElementById('error-message').textContent = error.message;
    }
}); 

// Initial display of shift value
document.getElementById('shift-value').textContent = shift;  
document.getElementById('decrypted-shift').value = decryptShift;
document.getElementById('shift').value = shift;     

       






