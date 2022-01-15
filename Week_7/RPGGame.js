const readline = require("readline-sync")
// The year is 1985. Your job is to build a text-based (console) RPG game.

// [X] Project Requirements:
// [X] Console must greet player with a fun message
// [X] Console must ask for the player's name and store it
// [X] The console will ask the user to enter a "w" to walk
// [ ] Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
// If a wild enemy appears:
// [ ] The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// [ ] The user can decide to attack or run
// [ ] If attacking, you will choose a random attack power between a min and max
// [ ] If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
// [ ] After the player attacks or runs the enemy attacks back for a random damage amount
// [ ] If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
// [ ] If the enemy kills the player the console prints a cool death message and the game ends
// [ ] Inventory

// [ ] When the player kills enemies, they are awarded with items
// [ ] If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory

// **Reused items(modules would make more sense but for easy submission I'll keep it to one file.)**
// Walking function(w)
function walk(x){
    while (true) {
    const x = readline.question('Press "w" than hit return to walk ')
    if (x === "w")
        break
}}

// Item selection and item array
var items = []

function itemSelect(x){
    switch(readline.question("Which item would you like to use " + items + "?")) {
      case "fight":
      console.log("continue walking")
      break;
    case "run":
      console.log("fart")
      break;
    default:
      console.log("idk")
}}


const creatures [
    {fledgling: "thing", poop: "thing"}
]


// **GAME START POINT**
// Fun Greeting.
console.log("Little Monsters RPG: A short adventure.")

// Name Question(stored)
const name = readline.question("What is your name? ")
console.log("The setting is a dark wet forest. You hear noises of uknown creatures all around you. It's raining and you must walk out of this forest to survive. Good Luck " + name + ".")



console.log("Codes Good")
