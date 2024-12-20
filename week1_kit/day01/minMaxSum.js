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

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let bigIntArr = arr.map(BigInt);
    
    bigIntArr.sort((a, b) => (a > b ? 1 : -1));
    
    const totalSum = bigIntArr.reduce((acc, num) => acc + num, BigInt(0));
    
    const minSum = totalSum - bigIntArr[bigIntArr.length - 1];
    const maxSum = totalSum - bigIntArr[0];
    
    console.log(minSum.toString(), maxSum.toString());
}


function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

