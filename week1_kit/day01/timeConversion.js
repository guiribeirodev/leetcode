'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    console.log('teste')
    let period = s.slice(-2)
    let hour = Number(s.slice(0,2))
    let min = s.slice(3,5)
    let sec = s.slice(6,8)
    
    console.log(min)
    console.log(sec)
    
    if (period == "PM"){
        if (hour != 12){
            hour += 12
        }
    }
    else if(period == "AM"){
        hour = "0" + hour
        
        if(hour == 12){
            hour = "00"
        }
    }
    
    let result = `${hour}:${min}:${sec}`
    
    console.log(result)
    
    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
