var readLine = require('readline-sync');
//initiates readline module

var x = readLine.question("Please enter your first number ");
var y = readLine.question("Please enter your second number ");
var operator = readLine.question("Please enter the operation to perform: add, sub, mul, div ");
//variables and questions shrunk into same line to decrease clutter

function calculation(a){
    if (a == "add"){
        console.log("The result is " + (parseInt(x) + parseInt(y)));
    }
    else if (a == 'sub'){
        console.log("The result is " + (parseInt(x) - parseInt(y)));
    }
    else if (a == "mul"){
        console.log("The result is " + (parseInt(x) * parseInt(y)));
    }
    else if (a == "div"){
        console.log("The result is " + (parseInt(x) / parseInt(y)));
    }
    else{
        console.log("error");
    }
}
//the function that equates to the calculators brain

calculation(operator);