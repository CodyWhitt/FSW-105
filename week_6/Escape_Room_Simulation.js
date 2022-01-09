// player chooses one of the 3 options and each option give a different response and asks another. 
// key is needed to opern door
// player picks kill hole than dies

const readline = require("readline-sync");

const name = readline.question("What is your name? ");
console.log("...")

// First question of the game
while (true) {
    input = readline.question("OK " + name + ". You have chosen to play a very dangerous game with dire consiquences if you chose wrong. Would you like to play? Y/N ")
    if (input === "Y") {
        console.log("...")
        break;
    } else if (input === "N"){
        return console.log("Probably for the best. Good bye.") + process.exit()
    }
}

console.log("Your now in a locked room. you need to escape. What would you like to do?")
console.log("...")
console.log("A: You've found a hole and decide to put your hand in it.")
console.log("B: You decide to ignore the hole and instead search for the key")
console.log("C: You see the door but try to open it even though I just told you it was locked.")
console.log("...")

var key = false

// Second question of the game
while (true) {
    input = readline.question("What is your choice? (A,B,C)")
    // Choose hole and die
    if (input === "A") {
        return console.log("Really??? Why would you put your hand in a random hole in a creepy locked room? Now look what you have done. You're dead! GAME OVER!") + process.exit()
    // Find key
    } else if ((input === "B") && (key == false)) {
        console.log("...")
        console.log("Ah! You've found the key. All you had to do was look!") + (key = true)
        console.log("...")
        // Re-ask
        console.log("A: You decide to put your hand in the hole.")
        console.log("B: You must be confused and decide to search for the key again?")
        console.log("C: You decide to use the key you found on the door.")
        console.log("...")
    // Already have key response
    } else if ((input === "B") && (key == true)) {
        console.log("...")
        console.log("Why are you looking for what you have already found??")
        console.log("...")
        // Re-ask
        console.log("A: You decide to put your hand in the hole.")
        console.log("B: You must be confused and decide to search for the key again?")
        console.log("C: You decide to use the key you found on the door.")
        console.log("...")
    // Choose door w/o key
    } else if ((input === "C") && (key == false)) {
        console.log("...")
        console.log("I just told you it was locked.... Try again.")
        console.log("...")
        // Re-ask
        console.log("A: You've found a hole and decide to put your hand in it.")
        console.log("B: You decide to ignore the hole and instead search for the key")
        console.log("C: You must be insane but you try the door again.")
        console.log("...")
    // Win the game
    } else if ((input === "C") && (key == true)) {
        // End game
        return console.log ("You've made it out. I know it was a challenge but congrats!!!")
    }
}