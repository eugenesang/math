const fs = require('fs');

// read the coding dictionary
const raw =  fs.readFileSync("./coding_qual_input.txt");

// const dict = {};
const arr = 
raw.toString().split('\n').filter(d=>d).map(d=>{
    const [n, t] = d.split(' ');
    return {
        n, t: t.trim()
    }
}).sort((a, b)=>a.n - b.n);

function getIndices(max){
    const arr = [];

    

    let index = 1;
    while(sqFn(index) < max){
        arr.push(sqFn(index++));
    };

    arr.push(max)

    return arr.map(d=>d-1);
}

const words = getIndices(arr.length).map(d=>arr[d]['t']);

console.log(words);