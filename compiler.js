//Tokens

const token = {
    'Int': "Int",
    'Flt': "Flt",
    "Plus":"Plus",
    "Minus":"Minus",
    "Division":"Division",
    "Mult":"Mult",
    "BrR": "BrR",
    "BrL": "BrL"
}
const digits = "1234567890"

//main classes
class Error{
    constructor(name, msg) {
        this.name = name;
        this.msg = msg;

        return `@!${name}! ${msg}`;
    }
}
class formatToken {
    constructor(type, val = null) {
        this.type = type;
        this.val = val;
    }

    formattedToken() {
        return this.val !== null ? `@${this.type}:${this.val}` : `@${this.type}`;
    }
}

class Lexer{
    constructor(text) {
        this.text = text;
        this.index = -1;
        this.atChar = null;
        this.next();
    }
    next(){
        this.index += 1;
        if(this.text[this.index] !== undefined){
            this.atChar = this.text[this.index];
        }
    }
    intoToken(){
        this.tokens = [];
        while (this.index < this.text.length){

            switch (this.atChar){
                case " /t":
                    this.next();
                    break;
                case "+":
                    this.tokens.push(new formatToken(token["Plus"]).formattedToken());
                    this.next();
                    break;
                case "-":
                    this.tokens.push(new formatToken(token["Minus"]).formattedToken());
                    this.next();
                    break;
                case "#":
                    this.tokens.push(new formatToken(token["Mult"]).formattedToken());
                    this.next();
                    break;
                case "%":
                    this.tokens.push(new formatToken(token["Division"]).formattedToken());
                    this.next();
                    break;
                case "(":
                    this.tokens.push(new formatToken(token["BrL"]).formattedToken());
                    this.next();
                    break;
                case ")":
                    this.tokens.push(new formatToken(token["BrR"]).formattedToken());
                    this.next();
                    break;
                default:
                    if(digits.includes(this.atChar)){

                        this.tokens.push(this.returnNumberToken(this.atChar));
                        this.next();
                    }
                    else{
                        this.tokens = []
                        this.next();
                        return new Error("Incorrect Char", this.atChar)
                    }
                    break;
            }

        }
        return this.tokens;

    }
    returnNumberToken(token){
        let num = '';
        let isFloatingPoint = "Int";

        while(this.index < this.text.length && digits+".".includes(this.atChar)){
            if(this.atChar === "." && isFloatingPoint === "Int"){
                isFloatingPoint = "Flt";
                num += this.atChar;
                this.next();
            }else if(digits.includes(this.atChar)){
                num += this.atChar;
                this.next();
            }
        }

        return new formatToken(isFloatingPoint, num).formattedToken();
    }

}

module.exports.run=(input)=>{
    return new Lexer(input).intoToken();
}