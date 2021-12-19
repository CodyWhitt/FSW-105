var shopper = {
    firstName: "Cody",
    lastName: "Whitt",
    age: 27,
    hasFamily: true,
    groceryCart: ["Chicken", "Cheese", "Eggs", "Turkey"],
    generalStatement: function() {
        return this.firstName + " " + this.lastName + " who is " + this.age + " purchased these items " + this.groceryCart + ".";
    }

};

console.log( shopper.generalStatement() );