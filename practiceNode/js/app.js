
// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// sayHello("Mosh") 

// console.log(module);

// Export Object

// const logger = require('./logger');

// console.log(logger);

// logger.log("message");

// Export single function

// const log = require('./logger');

// log("message");

// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// Template string
// ES6 / ES2015 : ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const fs = require('fs');

// const files = fs.readdirSync('./');

// console.log(files);

// fs.readdir('./.', function(err,files){
//     if (err) console.log("Error", err);
//     else console.log("result", files);
// });

// EVENTS

const EventEmitter = require.event('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
})

// Making a noise, produce - signal

emitter.emit('messageLogged');


