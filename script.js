function caesarCipher(message, shift) {
    let result = '';
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char.match(/[a-z]/i)) {
            let base = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            let shifted = ((char.charCodeAt(0) - base + shift) % 26) + base;
            result += String.fromCharCode(shifted);
        } else {
            result += char;
        }
    }
    return result;
}

function encrypt() {
    const message = document.getElementById('message').value;
    const key = parseInt(document.getElementById('key').value) || 1;
    const encrypted = caesarCipher(message, key);
    document.getElementById('encryptedMessage').textContent = encrypted;
}

function decrypt() {
    const cipher = document.getElementById('cipher').value;
    const key = parseInt(document.getElementById('decryptionKey').value) || 1;
    const decrypted = caesarCipher(cipher, -key);
    document.getElementById('decryptedMessage').textContent = decrypted;
}