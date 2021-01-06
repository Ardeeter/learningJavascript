
const prompt = require('prompt-sync')();
const url = prompt('URL: ');
const fileName = prompt('Save to file: ')
const request = require('request');
const fs = require('fs');

request.get(url, function(error,response,body){
    if(error){
        console.log(error.message);
        return;
    }
    fs.writeFile(fileName, body, (error) => {
        if(error){
            console.log(error.message);
            return;
        }
        console.log("HTML saved to file:", fileName);
    })
});


// const fs = require('fs');
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// const request = require("request");

// rl.question("URL: ", function(inputURL){

//     rl.question("Save to file: ", function(file){

//         request({
//             uri: inputURL,
//         }, function(error, response, body) {

//             fs.writeFile(file, body, function (error) {

//                 if (error) {
//                     console.error("Error: Invalid Input");
//                 return;
//                 }
//                 console.log(`Saved to file ${file}`);
//             });
//         });

//     })

// })