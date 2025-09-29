let shift = 3; // Default shift value
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');  
const messageInput = document.getElementById('message');
const shiftInput = document.getElementById('shift');
const decryptShiftInput = document.getElementById('decrypt-shift');
const encryptedMessageDisplay = document.getElementById('encrypted-message');
const decryptedMessageDisplay = document.getElementById('decrypted-message');
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { // Uppercase letters
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) { // Lowercase letters
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            return char; // Non-alphabetic characters remain unchanged
        }
    }).join('');
}
encryptBtn.addEventListener('click', () => {
    const message = messageInput.value;
    shift = parseInt(shiftInput.value) || 3;
    const encryptedMessage = caesarCipher(message, shift);
    encryptedMessageDisplay.textContent = encryptedMessage;
});
decryptBtn.addEventListener('click', () => {
    const encryptedMessage = encryptedMessageDisplay.textContent;
    const decryptShift = parseInt(decryptShiftInput.value) || 3;
    const decryptedMessage = caesarCipher(encryptedMessage, (26 - decryptShift) % 26);
    decryptedMessageDisplay.textContent = decryptedMessage;
});     

function updateShiftValue() {
    shift = parseInt(shiftInput.value) || 3;
}           
shiftInput.addEventListener('input', updateShiftValue); 
updateShiftValue();

