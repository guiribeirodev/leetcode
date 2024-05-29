function processData(input) {
    //Enter your code here
    const [count, ...strings] = input.split('\n')
    
    function separateString(string) {
        let evenIndex = ""
        let oddIndex = ""
        
        for (let i = 0; i < string.length; i++){
            if (i % 2 != 0){
                evenIndex += string[i]
            } else {
                oddIndex += string[i]
            }
        }
        
        console.log(oddIndex, evenIndex)   
    }
    
    for (string of strings){
        separateString(string)
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
