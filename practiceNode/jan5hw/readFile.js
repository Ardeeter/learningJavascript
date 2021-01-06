
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("filename: ", function(filename){

    fs.readFile(filename, function (error, buffer){
        if (error) {
            console.error(`ENOENT: no such file or directory, open '${filename}'`);
        return
        }
        var contents = buffer.toString().toUpperCase();
        console.log(contents);
    })

})




