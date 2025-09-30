let shift = 3;
let decryptShift = 3;
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function caesarCipherEncrypt(message, shift) {
  if (typeof shift !== 'number' || shift < 1 || shift > 25 || !Number.isInteger(shift)) {
    throw new Error('Shift value must be a whole number between 1 and 25');
  }
  if (typeof message !== 'string') {
    throw new Error('Message must be a string');
  }
  if (message.length === 0) {
    throw new Error('Message cannot be empty');
  }
  if (!/^[A-Za-z\s.,!?]*$/.test(message)) {
    throw new Error('Message contains invalid characters (only letters, spaces, and . , ! ? are allowed)');
  }

  return message.toUpperCase().split('').map(char => {
    const index = alphabet.indexOf(char);
    return index === -1 ? char : alphabet[(index + shift) % 26];
  }).join('');
}

function caesarCipherDecrypt(message, shift) {
  if (typeof shift !== 'number' || shift < 1 || shift > 25 || !Number.isInteger(shift)) {
    throw new Error('Shift value must be a whole number between 1 and 25');
  }
  if (typeof message !== 'string') {
    throw new Error('Message must be a string');
  }
  if (message.length === 0) {
    throw new Error('Message cannot be empty');
  }
  if (!/^[A-Za-z\s.,!?]*$/.test(message)) {
    throw new Error('Message contains invalid characters');
  }

  return message.toUpperCase().split('').map(char => {
    const index = alphabet.indexOf(char);
    return index === -1 ? char : alphabet[(index - shift + 26) % 26];
  }).join('');
}

// Event Listeners
document.getElementById('shift').addEventListener('input', (e) => {
  const newShift = parseInt(e.target.value);
  if (Number.isInteger(newShift) && newShift >= 1 && newShift <= 25) {
    shift = newShift;
    document.getElementById('error-message').textContent = '';
  } else {
    document.getElementById('error-message').textContent = 'Shift value must be a whole number between 1 and 25';
  }
  document.getElementById('info-message').textContent = 'Note: Only letters are encrypted/decrypted. Spaces and punctuation are preserved.';
});

document.getElementById('encrypt-btn').addEventListener('click', () => {
  const message = document.getElementById('message').value;
  try {
    const encryptedMessage = caesarCipherEncrypt(message, shift);
    document.getElementById('encrypted-message').textContent = encryptedMessage;
    document.getElementById('error-message').textContent = '';
  } catch (error) {
    document.getElementById('error-message').textContent = error.message;
  }
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
  const message = document.getElementById('decrypted-message-input').value;
  const decryptShiftValue = parseInt(document.getElementById('decrypted-shift').value);
  try {
    const decryptedMessage = caesarCipherDecrypt(message, decryptShiftValue);
    document.getElementById('decrypted-message').textContent = decryptedMessage;
    document.getElementById('error-message').textContent = '';
  } catch (error) {
    document.getElementById('error-message').textContent = error.message;
  }
});



       






