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
    const i = 4
    const d = 4.0
    const s = 'HackerRank '
    
    // Enter your code here
    let inputInt = parseInt(readLine()) 
    let inputFloat = parseFloat(readLine())
    let inputText = readLine()
    
    let sumInt = i + inputInt
    let sumFloat = d + inputFloat
    let concat = s + inputText 
    
    console.log(sumInt)
    console.log(sumFloat.toFixed(1))
    console.log(concat)
}
