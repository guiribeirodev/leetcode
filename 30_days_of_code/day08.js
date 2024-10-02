function processData(input) {
    //Enter your code here
    const [count, ...data] = input.split("\n")
    let phoneBook = {}
    
    for (let i = 0; i < count; i++){
        let [name, phone] = data[i].split(" ")
        phoneBook[name] = phone
    }
    
    for (let i = count; i < data.length; i++){
        let name = data[i];
        
        if (name in phoneBook){
            console.log(`${name}=${phoneBook[name]}`);
        } else {
            console.log("Not found");
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
