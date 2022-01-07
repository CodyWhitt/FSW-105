// Section A.
// Use the built-in array method .filter() to solve all of these problems (9 points):
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr)
{
    const result = arr.filter(function(number){
        if (number >= 5){
        return true};
    }) 
    return result;
}

console.log("--- Array Filter #1 ---");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));  // Output: [6, 8]

// Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr)
{
    const result = arr.filter(function(number){
        if (number % 2 == 0){
        return true};
    })
    return result
}

console.log("--- Array Filter #2 ---");
console.log(evensOnly([3, 6, 8, 2]));  // Output: [6, 8, 2]

// Extra Credit: Make a filtered list of all the people who are old enough to see The Matrix (17+).

function ofAge(arr)
{
    const result = arr.filter(function(number){
        if (number.age > 17)
        return true
    })
    return result
}

console.log("--- Extra Credit for .filter() Method ---");
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]))

//Output: 
//[ { name: "Angelina Jolie", age: 80 },
//    { name: "Bob Ziroll", age: 100 } ]

//Section B. Use the built-in .map() method on arrays to solve all of these problems (12 points):  

//Make an array of numbers that are doubles of the first array.

function doubleNumbers(arr)
{
    const result = arr.map(function(number){
        return (number + 2)
    })
    return result
}

console.log("---  Array Map #1 ---");
console.log(doubleNumbers([2, 5, 100]));  // Output: [4, 10, 200]

//Take an array of numbers and make them strings.

function stringItUp(arr)
{
    const result = arr.map(function(number){
        return (number.toString())
    })     
    return result
}

console.log("---  Array Map #2 ---");
console.log(stringItUp([2, 5, 100]));  // Output: ["2", "5", "100"]

// Capitalize first letter for each name within the array of names.

function capitalizeNames(arr)
{
    const result = arr.map(function(correction){
        correction = correction.toLowerCase()
        return correction.charAt(0).toUpperCase() + correction.slice(1)
        })
    return result
}

console.log("---  Array Map #3 ---"); 
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
//Output: ["John", "Jacob", "Jingleheimer", "Schmidt"]

//Extra Credit 1: Make an array of strings of the names.

function namesOnly(arr){
    result = arr.map(function(justNames){
        return justNames.names
    })
    return result
}

console.log("---  Array Map Extra Credit #1 ---");
console.log(namesOnly([
    {
        names: "Angelina Jolie",
        age: 80
    },
    {
        names: "Eric Jones",
        age: 2
    },
    {
        names: "Paris Hilton",
        age: 5
    },
    {
        names: "Kanye West",
        age: 16
    },
    {
        names: "Bob Ziroll",
        age: 100
    },
]));
//Output: 
// [ "Angelina Jolie", "Eric Jones", "Paris Hilton", "Kanye West", "Bob Ziroll" ]

//Extra Credit 2: Make an array of strings of the names saying whether or not they can go to The Matrix.

function makeStrings(arr){
    result = arr.map(function(justNames){
        if (justNames.age >= 17)
            return justNames.names + "can go to the Matrix"
        else 
            return justNames.names + "is under age"
    })
    return result
}

console.log("---  Array Map Extra Credit #2 ---");
console.log(makeStrings([
    {
        names: "Angelina Jolie",
        age: 80
    },
    {
        names: "Eric Jones",
        age: 2
    },
    {
        names: "Paris Hilton",
        age: 5
    },
    {
        names: "Kanye West",
        age: 16
    },
    {
        names: "Bob Ziroll",
        age: 100
    },
]));
//Output: 
// [ "Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!"
// "Kanye West is under age!!"
// "Bob Ziroll can go to The Matrix" ]

// Section C. Use the built-in .reduce() method on arrays to solve all of these problems (12 points):  

//Turn an array of numbers into a total of all the numbers

function total(arr)
{
    let result = arr.reduce((accumulator, current) => accumulator + current, 0);
    return result
}

console.log("---  Array Reduce #1 ---");
console.log(total([1, 2, 3]));  // Output: 6

//Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) 
{
    const result = arr.reduce((accumulator, current) => [...accumulator, current], []).join("");
    return result
}

console.log("---  Array Reduce #2 ---")
console.log(stringConcat([1, 2, 3]));   // Output: "123"

//Turn an array of voter objects into a count of how many people voted.  Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this. 

function totalVoters(array) {
    return array.reduce((accumulator, current,) => { 
        if (current.voted == true){
            return accumulator += 1
        } else {
            return accumulator
        }}, 0)
}

var voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary' , age: 31, voted: false},
    {name: 'Becky' , age: 43, voted: false},
    {name: 'Joey' , age: 41, voted: true},
    {name: 'Jeff' , age: 30, voted: true},
    {name: 'Zack' , age: 19, voted: false},
];

console.log("---  Array Reduce #3 ---")
console.log( totalVoters(voters) );  // Output: 7*/

//Extra Credit 1: Given an array of all your wish list items, return the total cost of all items. 

function shoppingSpree(array) {
    let result = array.reduce((accumulator, current) => accumulator += current.price, 0);
    return result
}

var wishlist = [
    { title: "Telsa Model S", price: 90000},
    { title: "4 carat diamond ring", price: 45000},
    { title: "Fancy hacky Sack", price: 5},
    { title: "Gold fidget spinner", price: 2000},
    { title: "A second Tesla Model S", price: 90000},
];

console.log("---  Array Reduce Extra Credit #1 ---");
console.log( shoppingSpree(wishlist) );  // Output: 227005

//Extra Credit 2: Given an array of arrays, flatten them into a single array.

function flatten(array) {
    let result = array.reduce((accumulator, current) => accumulator + current);
    return result
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log("---  Array Reduce Extra Credit #2 ---");
console.log(flatten(arrays));  // Output: ["1", "2", "3", true, 4, 5, 6];*/

//Section D: Use the built-in .sort() method on arrays to solve all of these problems (12 points):  

//Sort an array from smallest number to largest.

function leastToGreatest(arr) {
    const result = arr.sort((a, b) => a - b)
    return result
}

console.log("---  Array Sort #1 ---");
console.log( leastToGreatest([1, 3, 5, 2, 90, 20]) );  //Output: [1, 2, 3, 5, 20, 90]

// Sort an array from largest number to smallest.

function  greatestToLeast(arr){
    const result = arr.sort((a, b) => b - a)
    return result
}

console.log("---  Array Sort #2 ---")
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));  // Output: [90, 20, 5, 3, 2, 1]

// Sort an array from shortest string to longest. 

function lengthSort(arr) {
    const result = arr.sort((a, b) => a.length - b.length)
    return result
}

console.log("---  Array Sort #3 ---")
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));  // Output: ["by", "dog", "wolf", "eaten", "family"]

// Extra Credit 1: Given an array of arrays, flatten them into a single array.

function alphabetical(arr){
    const result = arr.sort()
    return result
}

console.log("---  Array Sort Extra Credt ---");
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));  // Output: ["by", "dog", "eaten", "family", "wolf"]