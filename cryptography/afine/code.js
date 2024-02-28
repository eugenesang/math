const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * 
 * @param {String} str 
 * @returns {[String]}
 */
function getValues(str) {
    return str.split('').map(d => characters.indexOf(d.toUpperCase())).filter(d => d>=0?true: false);
}

/**
 * 
 * @typedef Primes // prime 1 and prime 2
 * 
 * @param {Number} n Number of characters in our encryption
 * @returns {{p1: Number, p2: Number}}
 */
function getPrimes(n=26){
    let p1 = Math.floor(Math.random() * n) + 1;
    let p2 = Math.floor(Math.random() * n) + 1;
    while(p1 == p2 || !isPrime(p1) || !isPrime(p2)){
        p1 = Math.floor(Math.random() * n) + 1;
        p2 = Math.floor(Math.random() * n) + 1;
    }
    return {p1, p2};
}

/**
 * 
 * @param {Number} n 
 * @returns {Boolean}
 */
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

/**
 * 
 * @param {Number} p1 
 * @param {Number} p2 
 * @param {String} str 
 * @returns {String}
 */
function encrypt(p1, p2, str) {
    let values = getValues(str);
    let encryptedValues = values.map(d => (d * p1 + p2) % 26);
    return encryptedValues.map(d => characters[d]).join('');
}

/**
 * 
 * @param {Number} p1 
 * @param {Number} p2 
 * @param {String} str 
 * @returns {String}
 */
function decrypt(p1, p2, str) {
    let values = getValues(str);
    let decryptedValues = values.map(d => (d - p2) * inverseMod(p1, 26) % 26);
    return decryptedValues.map(d => characters[d]).join('');
}

/**
 * 
 * @param {Number} a 
 * @param {Number} n 
 * @returns {Number}
 */
function inverseMod(a, n) {
    let t = 0, newt = 1, r = n, newr = a;
    while (newr != 0) {
        let quotient = Math.floor(r / newr);
        [t, newt] = [newt, t - quotient * newt];
        [r, newr] = [newr, r - quotient * newr];
    }
    if (r > 1) return -1;
    if (t < 0) t += n;
    return t;
}