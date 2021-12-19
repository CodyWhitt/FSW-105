//Example
console.log("Example.")

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
var count = 0;

for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
        count++;
    }
}
console.log(count);

/*1. Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.*/
console.log("1.")

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age) >= 18){
        console.log ("old enough")
    } else {console.log("not old enough")
    }
}
/*2. Log to the console a personalized message like below.  
Note, the only difference between this requirement and #1 listed above is the below output requires you to use the name to make it more of a personalized message.
Mike is not old enough to see Mad Max.
or
Madeline is old enough to see Mad Max.*/
console.log("2.")

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age) >= 18){
        console.log ((peopleWhoWantToSeeMadMaxFuryRoad[i].name) + " is old enough to go see Mad Max")
    } else {console.log((peopleWhoWantToSeeMadMaxFuryRoad[i].name) + " is not old enough to go see Mad Max")
    }
}

/*3. Check to see if the movie goer is a male or female for an even more personalized message.  Note: when a person is old enough, your display needs to include HE / SHE as appropriate, and similarly, when the person is NOT old enough, your display needs to include HIM / HER as appropriate.  One way to achieve this is to have a nested if statement that checks for age and gender at the same time.
Mike is not old enough to see Mad Max Fury Road, don't let HIM in.
or
Madeline is old enough. SHE'S good to see Mad Max Fury Road.*/
console.log("3.")

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age) >= 18){
        console.log ((peopleWhoWantToSeeMadMaxFuryRoad[i].name) + " is old enough. " + ((peopleWhoWantToSeeMadMaxFuryRoad[i].gender) === "male" ? "He" : "She") + " is good to go see Mad Max")
    } else {console.log((peopleWhoWantToSeeMadMaxFuryRoad[i].name) + " is not old. " + ((peopleWhoWantToSeeMadMaxFuryRoad[i].gender) === "male" ? "He" : "She") + " is not good to go see Mad Max")
}}

/*4. Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".*/
console.log("4.")

for (i = 0; i <= 100; i++){
    if ((i % 2) == 1){ 
        console.log(i + "odd")
    } else {console.log(i + "even")
}}

/*EC. Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. 
The array [2, 3, 2] would toggle the button 7 times.
The light is off to start with. Log to the console whether or not the light is on at the end.
Sample Arrays:*/
console.log("EC.")

toggler = [2, 3, 2]
light = 0

for (i = 0; i <= toggler.length; i++){
    for (int = 1; int <= toggler[i]; int++){
        if (light == 0){
            light = 1
            console.log("light on")
        } else {
            light = 0
            console.log("light off")
        }
    }
}