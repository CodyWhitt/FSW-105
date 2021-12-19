var readLine = require('readline-sync');

var x = readLine.question("Please enter your first number ")
var y = readLine.question("Please enter your second number ")
var operator = readLine.question("Please enter the operation to perform: add, sub, mul, div ")

function calculation(operator){
    if (operator = "add"){
        console.log(parseInt(x) + parseInt(y))
    }
    else if (operator = "sub"){
        console.log(parseInt(x) - parseInt(y))
    }
    else if (operator = "mul"){
        console.log(parseInt(x) * parseInt(y))
    }
    else if (operator = "div"){
        console.log(parseInt(x) / parseInt(y))
    }
    else{
        console.log("error")
    }
}

calculation("The result is " + operator)