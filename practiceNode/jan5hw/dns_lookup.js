
const dns = require('dns');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Domain name: ", function(domainName){

    dns.lookup(domainName, (err, address) => {

        if (err){
            console.error('Error: Invalid Domain')
            return
        }
        console.log(address);
    });

})