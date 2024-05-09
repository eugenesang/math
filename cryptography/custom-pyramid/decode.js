const fs = require('fs');

// read the coding dictionary
const raw =  fs.readFileSync("./coding_qual_input.txt");

const dict = {};

raw.toString().split('\n').filter(d=>d).forEach(d=>{
    const [n, t] = d.split(' ');
    dict[n]=t;
})

function decode(message){
    const arr = message.split('\n').filter(d=>d).map(d=>d.split(' ').pop());
    const str = arr.map(d=>dict[d]).map(d=>d.trim());

    return str.join(" ");
}

const encodedMessage = `
162
12 191
34 18 103
1 3 89 187
12 34 56 17 47
89 67 34 92 12 91
`

console.log(decode(encodedMessage));