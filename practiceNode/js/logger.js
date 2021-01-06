// (function (exports, require, module, __filename, __dirname){

console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message){
    // Send an HTTP request
    console.log(message);
}

module.exports = log;
// OR exports.log = log;



// })

// var url = 'http://mylogger.io/log';

// function log(message){
//     // Send an HTTP request
//     console.log(message);
// }
// Export Object

// module.exports.log = log;

// Export single function

// module.exports = log;


