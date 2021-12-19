//Complete the Pause and Practice: String Methods
console.log("(1.)") //Make a function that will return any given string into all caps followed by the same string all lowercase.

function capitalizeAndLowercase(a){
    b = a.toLowerCase();
    a = a.toUpperCase();
    a = (a + b);
    console.log(a);
}

capitalizeAndLowercase("Hello");  // => HELLOhello
capitalizeAndLowercase("HelloHowAreYou");   // => HELLOHOWAREYOUhellohowareyou

console.log("(2.)") //Make a function that returns a number half the length and rounded down. You'll need to use Math.floor()  (Links to an external site.).

function findMiddleIndex(a){
    a = a.length;
    a = (a / 2);
    a = Math.floor(a);
    console.log(a);
}

findMiddleIndex("Hello");  // => 2
findMiddleIndex("Hello World");  // => 5

console.log("(3.)") //Make a function that uses slice()  (Links to an external site.) and the other functions you've written to return the first half of the string.

function returnFirstHalf(a){
    b = a.length;
    b = (b / 2);
    b = Math.floor(b);
    c = a.slice(0, b);
    console.log(c);
}

returnFirstHalf("Hello");  // => "He"
returnFirstHalf("Hello World");  // => "Hello"

console.log("(4.)") //Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

function capitalizeAndLowerCase(a){
    b = a.length;
    b = (b / 2);
    b = Math.floor(b);
    c = a.slice(0, b);
    c = c.toUpperCase();
    d = a.slice(b);
    d = d.toLowerCase();
    console.log(c + d);
}

capitalizeAndLowerCase("Hello");  // => "HEllo"
capitalizeAndLowerCase("Hello World");  // => "HELLO world"

console.log("(Optional.)") //Code Challenge (This one is a step up in difficulty):
//Make a function that takes any string and capitalizes any character that follows a space.

function capitalizeFirstLetter(a){
    b = a.split(" ");
        for (i = 0; i < b.length; i++){
            b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1);
        }
    c = b.join(" ");
    console.log(c);
}

capitalizeFirstLetter("hey friends! practice practice practice!"); // => "Hey Friends! Practice Practice Practice!"