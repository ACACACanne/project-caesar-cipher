HTML Testing Checklist:
* Shift input (#shift):
  - Test default value (should be 3)
  - Try edge values (1 and 25)
  - Try invalid values (0, 26, negative, non-numeric).
* Message textarea (#message):
  - test with lowercase, uppercase, mixed case
  - include punctuation, mumbers, and spaces
* Encrypt button (#encrypt-btn):
  - confirm it triggers encryption
  - check if result appears in (#encrypted-message).
* Decryption section testing:
  - test (#decrypted-shift), (#decrypted-message-input), and (#decryt-btn).

JavaScript Testing Checklist
* Caesar Cipher Logic
  - Encryption: hello with shift with 3 -> khoor, and hello world! -> knhoor zruog! (non-letters unchanged).
  - Decryption: khoor with shift 3 -> hello, and mixed symbols: 123ABCxyz! -> should preserve numbers and symbols
* Shift Sync
  - Changing #shift or #decrypted-shift should:
    - update the global shift variable,
    - reflect in encryption/decryption results.
* Edge Cases
  - empty message input -> should return empty string,
  - shift = 1 and shift = 25 -> test wraparound behaviour,
  - non-alphabetic characters -> should remain unchanged.

UI/UX Testing
* Responsive layout across screen sizes (mobile, tablet, laptop, pc, tv)
* Font readability and contrast
* Button hover effects and transitions
* Rounded corners and padding, visual consistency.

Enhancements to Test
* adding <span id="shift-value"> to show current shift, 
* adding real-time encryption/decryption as user types,
* adding copy-to-clipboard buttons for results,
* adding error messages for invalid shift values. 
