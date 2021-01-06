const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input file: ", function(input){

    rl.question("Output file: ", function(output){

        fs.readFile(input, function (error, buffer){
            if (error) {
                console.error(`ENOENT: no such file or directory, open '${input}'`);
            return
            }
            var contents = buffer.toString().toUpperCase();

            fs.writeFile(output, contents, function (error) {
                if (error) {
                    console.error(error.message);
                return;
                }
                console.log(`Wrote to file ${output}`);
                console.log(`As a result, ${output} should now contain the text ${contents}`);
            });
        })

    })
    

})