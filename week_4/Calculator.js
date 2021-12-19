var readLine = require('readline-sync');

var x = readLine.question("Please enter your first number ")
var y = readLine.question("Please enter your second number ")
var operator = readLine.question("Please enter the operation to perform: add, sub, mul, div ")

function calculation(a){
    if (a == "add"){
        console.log("the result is " + (parseInt(x) + parseInt(y)))
    }
    else if (a == 'sub'){
        console.log("the result is " + (parseInt(x) - parseInt(y)))
    }
    else if (a == "mul"){
        console.log("the result is " + (parseInt(x) * parseInt(y)))
    }
    else if (a == "div"){
        console.log("the result is " + (parseInt(x) / parseInt(y)))
    }
    else{
        console.log("error")
    }
    console.log("The result is " + a)
}

calculation(operator)