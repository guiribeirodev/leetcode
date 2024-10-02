'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let n = parseInt(readLine().trim(), 10);
    
    let rests = [];
    let count = 0;
    let maxSequence = 0;
    
    if (n == 0 || n == 1){
        console.log(n);
    }
    
    while (n / 2 > 0){
        let rest = n % 2;
        rests += rest;
        n = Math.floor(n / 2);
    }
    
    for (let number of rests){
        if (number == 1){
            count += 1
            if (count > maxSequence){
                maxSequence = count
            }
        } else {
            count = 0
        }
    }
    
    console.log(maxSequence)
}
