/**
 * Convert decimal to binary and create a Markdown table of the steps
 * 
 * @param {Number} d - Decimal number to convert
 * @returns {String} - Markdown table of the steps
 */
function decimalToBinary(d) {
    let str = "| n | n/2 | rem |\n";
    str += "|:--|:--:|:--:|\n";

    let n = d;
    let steps = [];

    while (n > 0) {
        const remainder = n % 2;
        steps.push([n, Math.floor(n / 2), remainder]);
        n = Math.floor(n / 2);
    }

    for (let i = steps.length - 1; i >= 0; i--) {
        const [n, nOver2, rem] = steps[i];
        str += `| ${n} | ${nOver2} | ${rem} |\n`;
    }

    return str;
}

// Example usage:
const decimalValue = 13;
console.log(decimalToBinary(decimalValue));
