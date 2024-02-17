function rawSum(n) {
    // for loop implementation
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        const currentSum = i * (i + 1);
        sum += currentSum;
    }
    return sum;
}
console.log(rawSum(12));// expect 728

function rawSquaredSum(n) {
    let rawTotal = 0;
    let squaredTotal = 0;
    for (let i = 1; i <= n; i++) {
        rawTotal += i;
        squaredTotal += (i * i);
    }
    return rawTotal + squaredTotal;
}
console.log(rawSquaredSum(28)) // 8120

function chadFn(n) {
    if (n < 1) return new Error('n cannot be less than 0');
    let nCubed = Math.pow(n, 3);
    let nSquared = Math.pow(n, 2);
    let numerator = nCubed + 3 * nSquared + 2 * n;
    return numerator / 3;
}
function proof() {
    const testArray = createRangeArray();
    console.log(testArray); // see what has been generated, comment if you don't want to
    let startNumber = testArray[0];
    let answerArray = testArray.map(d => chadFn(d));
    //when start number = 22, answer array= [f(22), f(22) + 23*24, f(22) + 23*24 + 24*25, ...]
    let proofArray = [];
    proofArray.push(chadFn(startNumber));
    for (let i = 1; i < testArray.length; i++) {
        const n = startNumber + i, nSquared = Math.pow(n, 2);
        const currentValue = proofArray[proofArray.length - 1] + n + nSquared;
        // f(n-1) + n + n² ⟹ f(n-1) + n∙(n + 1)
        proofArray.push(currentValue);
    }
    for (let i = 0; i < answerArray.length; i++) {
        let a = answerArray[i], p = proofArray[i];
        if (a != p) return false;
    }
    return true
}
function createRangeArray() {
    const minValue = 200; // set your minimum value greater than 1;
    const range = 800; // this is such that max value of the start number = minValue + range;
    const startNumber = parseInt(minValue + (Math.random() * range));
    const size = 10; // number of elements in the array
    const arr = [];
    for (let i = 0; i < size; i++) arr.push(startNumber + i);
    return arr;
}
console.log(proof()); // returns true, every time