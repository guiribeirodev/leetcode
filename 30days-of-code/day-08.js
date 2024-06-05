function processData(input) {
    //Enter your code here
    let lines = input.split('\n')
    let count = lines.shift()
    let phoneBook = {}
    
    for (i = 0; i < count; i++){
        let [name, phone] = lines[i].split(' ')
        phoneBook[name] = phone
    }
    
    for (i = count; i < lines.length; i++){
        let name = lines[i]
        
        if(name in phoneBook){
            console.log(`${name}=${phoneBook[name]}`)
        } else {
            console.log('Not found')
        }
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
