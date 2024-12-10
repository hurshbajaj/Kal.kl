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

/*class Parser{
    constructor(tokenizedArr){
        this.tokenizedArr = tokenizedArr;

        this.i = -1;
        this.atChar = null;

        this.parsedArr = [];
        this.next();
    }
    next(){
        this.i += 1;
        this.atChar = this.tokenizedArr[this.i] != null ?  this.tokenizedArr[this.i]: undefined;
    }
    prev(){
        this.i -= 1;
        this.atChar = this.tokenizedArr[this.i] != null ?  this.tokenizedArr[this.i]: undefined;
    }
    binOp(leftNode,operator ,rightNode){
        return `(${leftNode},${operator},${rightNode})`;
    }
    type(node){
        return node !== undefined?node.split(":")[0]: undefined;
    }
    isNodeFactor(node){
        let status = ['@Int', "@Flt"].includes(this.type(node));
        if(status){
            return node;
        }
        else{
            return undefined;
        }
    }
    isNodeOp(operator){
        let status = ["@Mult", "@Division", "@Plus", "@Minus"].includes(this.type(operator));
        if(status){
            return operator;
        }
        else{
            return undefined;
        }
    }
    intoTermExpression() {
        let right;
        let left = this.isNodeFactor(this.atChar);
        if(left !== undefined){
            this.next();
        }

        let expressionInitiated = false;

        let operator = this.isNodeOp(this.atChar);



        if (this.atChar && ["@Division", "@Mult"].includes(this.type(this.atChar))) {

            operator = this.isNodeOp(this.atChar);
            this.next()
            right = this.isNodeFactor(this.atChar)
            this.next();
            left = (this.binOp(left, operator, right));

        }

        while (this.atChar && ["@Plus", "@Minus"].includes(this.type(this.atChar))) {
            if(!expressionInitiated){
                expressionInitiated = true;
            }
            operator = this.isNodeOp(this.atChar);

            this.next();
            right = this.isNodeFactor(this.atChar);


            this.next();
        }

        this.parsedArr.push(`${left}${operator}${right}`)
    }





    parse(){
        while(this.i < this.tokenizedArr.length){
            this.intoTermExpression();
        }


        return this.parsedArr;
    }
}*/

