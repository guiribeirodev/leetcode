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

    let arr = Array(6);
    let maxSum = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            let currentLine = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
            let halfLine = arr[i + 1][j + 1]
            let bottomLine = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
            
            let sum = currentLine + halfLine + bottomLine
            if (sum > maxSum){
                maxSum = sum
            }
        }
    }
    
    console.log(maxSum)
}
