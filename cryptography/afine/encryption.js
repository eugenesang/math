function encrypt(data) {
    // affine cipher encryption
    let encryptedData = "";
    for (let i = 0; i < data.length; i++) {
        let char = data[i];
        let ascii = char.charCodeAt(0);
        encryptedData += String.fromCharCode((ascii - 97 + 3) % 26 + 97);
    }
    return encryptedData;
}

