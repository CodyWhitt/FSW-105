console.log("Part 1:")
/*Write a function that accepts two numbers as parameters and returns the sum.*/

function add(a, b){
    return  a + b;
}

var sum = add(14, 3)
console.log("The total of the 2 numbers are " + sum + "!");

console.log("Part 2:")
/*Write a function that accepts three numbers as parameters and returns the largest of those numbers.  
Hint: you will need to Math.max() to find the largest of all numbers provided as input.*/

function greatest(a, b, c){
    return Math.max(a, b, c)
}

var max = greatest(1, 7, 3)
console.log(max + " is the largest integer.")

console.log("Part 3:")
/*Write a function that accepts one number as a parameter and returns whether that number is even or odd. 
(Return the string "even" or "odd")*/

function evenodd(a){
    return ((a % 2) === 0) ? "even" : "odd"
}

var number = evenodd(13)
console.log("Your number is " + number + "!")

console.log("Part 4:")
/*Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long,
return the string concatenated with itself (string + string). 
If the string is more than twenty characters long, return the first half of the string.  
Hint: for the else part, you will need to use  .slice()  (Links to an external site.) property in conjunction with .length() property.*/

function doubleslice (a){
    return (a.length <= 20) ? a + a : a.slice(0 , (a.length / 2));
}

var word = "this is 22 chars long.";
console.log(word.length);
/*length of word used for easy visibility in console log*/

var string = doubleslice(word);
console.log(string);

console.log("Extra credit:");
/*Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
The first numbers are: (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144)
So, if n were 6, the sum of 1+1+2+3+5+8 would be 20
Don't hardcode the sequence.*/

function fibonacci(n){
    var n1 = 0,
        n2 = 1;
    for (i = 0; i <= n; i++){
        console.log(n1 + " +");
        addIt = n1 + n2;
        n1 = n2;
        n2 = addIt;
        total = addIt - 1;
    }
    return ("= " + total);
}

console.log(fibonacci(6));

console.log("Extra credit 2");

//Write a function that accepts a string as a parameter. Return the most frequently occurring letter in that string. (White spaces count as a letter)

function mostUsed (a){
    var a1 = 0,
        a2 = '';
        a.split("").forEach(function(char){
    if (a.split(char).length > a1) {
        a1 = a.split(char).length;
        a2 = char;
        }
    })
    return a2;
}

console.log("Your most use character is (" + mostUsed("arandomsentence") + ")")