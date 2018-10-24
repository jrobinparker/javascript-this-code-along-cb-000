function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  };
  this.serve = function() {
    console.log("here's your " + this.name + ", enjoy!")
  };
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

function visitTable() {
  console.log("The server is visiting " + this.name + " at table #" + this.tableNumber)
}

let pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PBJ");

let salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

salad.describe = pbj.describe.bind(salad);

let sally = new Customer("Sally", "4");

let visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
