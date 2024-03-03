function decrypt(data) {
    // affine cipher decryption
    let decryptedData = "";
    for (let i = 0; i < data.length; i++) {
        let char = data[i];
        let ascii = char.charCodeAt(0);
        decryptedData += String.fromCharCode((ascii - 97 - 3 + 26) % 26 + 97);
    }
    return decryptedData;
}