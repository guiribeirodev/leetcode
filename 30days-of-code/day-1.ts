'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // Enter your code here
    let inputInt = parseInt(readLine()) 
    let inputFloat = parseFloat(readLine())
    let inputText = readLine()
    
    let sumNumbers = inputInt + inputFloat
    
    let phrase = 'HackerRank ' + inputText
    
    console.log(inputInt)
    console.log(sumNumbers)
    console.log(phrase)
}