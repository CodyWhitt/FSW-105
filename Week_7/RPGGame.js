const readline = require("readline-sync")
// The year is 1985. Your job is to build a text-based (console) RPG game.

// Project Requirements:
// [X] Console must greet player with a fun message
// [X] Console must ask for the player's name and store it
// [X] The console will ask the user to enter a "w" to walk
// [X] Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
// If a wild enemy appears:
// [X] The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// [X] The user can decide to attack or run
// [X] If attacking, you will choose a random attack power between a min and max
// [X] If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
// [X] After the player attacks or runs the enemy attacks back for a random damage amount
// [X] If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
// [X] If the enemy kills the player the console prints a cool death message and the game ends
// Inventory
// [X] When the player kills enemies, they are awarded with items
// [X] If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory

// **Reused items(modules would make more sense but for easy submission I'll keep it to one file.)**

// Walking function(w)
function index(){
  while (true) {
    const options = ['Walk', 'Exit', 'Print']
    const index = readline.keyInSelect(options, 'choose your next move') 
    if (options[index] == "Walk") {
      return console.log("You continue to walk forward frantically as the noises seem to become louder and more aggressive.")
    } else if (options[index] == "Print") {
      console.log("Name: " + name + "\nHP: " + self.hp + "\nAP: " + self.ap + "\nInventory: " + inventory.toString())
    } else if (options[index] == "Exit") {
      return process.exit()
    }
  }
}
// Items & inventory

var treasure = ["debloon", "gold nugget", "finger", "A dollar", "a whole car", "a pet cat", "3 chickens"]

var inventory = [] // Empty but fills as items picked up

function treasureDrop(){
  x = treasure[Math.floor(Math.random() * treasure.length)]
  console.log(x)
  inventory.push(x)
}

function boost(){
  while (true){
    answer = (readline.question("would you like to use a health boost or attack power boost. Type HP or AP then press return "))
    if (answer === "HP"){
      return self.hp = (self.hp + 10),
      console.log("you now have " + self.hp + " HP")
    } else if (answer === "AP"){
      return self.ap  = (self.ap + 2),
      console.log("you now have " + self.ap + " AP")
    }
  }
}

// Creatures
var creatures = [
  {name: 'fledgling' , hp: 5, ap: 2},
  {name: 'grotesque golem', hp: 8, ap: 5},
  {name: 'rotting dead', hp: 7, ap: 4},
  {name: 'putrid mud slinger', hp: 10, ap: 3},
];

// self 
var self = {hp: 10, ap: 4}

function deathCheck(x) {
  if (self.hp === 0) {
    console.log("You've been struck down. Laying on the ground the enemy beats the ground with there fist and lets out a howl that could only be described as demonic. Smashes your skull into the ground with there foot. GAME OVER!!!")
    process.exit()
  }
}

// battle loop
function battleChance(x) {
  chance = Math.random()
  while (true) {
    var attacker = creatures[Math.floor(Math.random() * creatures.length)]
    exit = 0
    if (chance <= .5 && attacker.hp > 0 && self.hp > 0 && exit === 0) {
      console.log("A " + attacker.name + " appears from the shadows!")
      while (self.hp > 0 && attacker.hp > 0 && exit === 0) {
        answer = readline.question("Would you like to attack or try and run? Type A/R than return. ")
        chance = Math.random()
        if (answer === "R" && chance <= .5) {
          console.log("you decide to chance it and run and narrowly escape the enemies attack!")
          exit = 1
        } else if (answer === "R" && chance >= .5) {
          eAttack = [Math.floor(Math.random() * attacker.ap)]
          console.log("you couldnt escape and got hit for " + eAttack)
          self.hp = (self.hp - eAttack)
          console.log("Your HP: " + self.hp)
          console.log("Enemy HP: " + attacker.hp)
        } else if (answer === "A") {
          sAttack = [Math.floor(Math.random() * self.ap)]
          console.log("you attack for " + sAttack)
          attacker.hp = (attacker.hp - sAttack)
            if (attacker.hp > 0) {
              eAttack = [Math.floor(Math.random() * attacker.ap)]
              console.log("the " + attacker.name + " hits you back for " + eAttack)
              self.hp = (self.hp - eAttack)
              console.log("Your HP: " + self.hp)
              console.log("Enemy HP: " + attacker.hp)
            } else {
              console.log("You defeated the enemy and recieved")
              treasureDrop()
              boost()
            } 
        } chance = 2
      }
    } else if (self.hp <= 0) {
      return console.log("The creature lets out a demonic scream as you shake in agony. It then lifts its leg into the air, and your head explodes under the impact of its foot. GAME OVER!!"),
      process.exit()
    } else {
      return console.log("you hear a thud behind you.")  
    }
  }
}

function game(x) {
  while (x <= 11) { 
    if (x <= 10) {
      x++,
      console.log(x),
      index(),
      battleChance(),
      deathCheck()
    } else if (x > 9) { 
      return console.log("The trees finaly break light as you fall to the ground, bloody, worn, and beaten in an open meadow and look back to see hudreds of eyes and shadows staring at you as if they just missed there last meal. You're able to barely stand and dust yourself off. A helicopter appears with goverment officials and throw you in. Your vision goes black. GAME OVER")
    }
  }
}

// **GAME START POINT**
// Fun Greeting.
console.log("Lost Forest RPG: a Short Walk out of Hell.")

// Name Question(stored)
const name = readline.question("What is your name? ")
console.log("The setting is a dark wet forest. You hear noises of uknown creatures all around you. It's raining and you must walk out of this forest to survive. Good Luck " + name + ".")

game(0)

// **Ending**
