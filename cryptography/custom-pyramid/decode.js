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

function makePyramid(max){
    const arr = [];
    for(let i=1; i<=max; i++){
        arr.push(i);
    }

    let cur = 1;

    const ans = [];

    while(arr.length){
        ans.push(arr.splice(0, cur++));
    }

    return ans;
}