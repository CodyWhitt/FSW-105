var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function assigment(){
    vegetables.pop();
    //console.log("vegetables: ", vegetables);
    fruit.shift();
    //console.log("fruit: ", fruit)
    let indexOfOrange = fruit.indexOf("orange");
    //console.log(indexOfOrange)
    fruit.push(indexOfOrange);
    //console.log(fruit)
    let veglength = vegetables.length;
    //console.log(veglength)
    vegetables.push(veglength);
    //console.log(vegetables)
    let food = fruit.concat(vegetables);
    //console.log(food)
    food.splice(4, 2);
    //console.log(food)
    food.reverse();
    //console.log(food)
    return food.join();
}

console.log(assigment());