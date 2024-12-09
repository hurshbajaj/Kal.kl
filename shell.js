const compiler = require("./compiler.js")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function shell(){
    readline.question("@Run  ", input => {
        if(input === "!" || input === "close") readline.close();
        else{
            let output_ = compiler.run(input);
            console.log(output_, "\n")
            shell()
        }

    })
}

shell()

