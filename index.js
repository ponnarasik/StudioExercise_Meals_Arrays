//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
const input = require('readline-sync');

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let drink = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

for (let i = 0; i < protein.length; i++) {
  console.log(protein[i],grain[i],vegetable[i],drink[i],dessert[i]);
}

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

let info = 0
while (info < 1 || info > 6) {
  info=input.question("Please select the number of meals to assemble");
}
  console.log(info)
  for (let i = 0; i < info; i++) {
  console.log("Here is your", protein[i],grain[i],vegetable[i],drink[i],dessert[i]);
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.

// b. Use an “array of arrays” to store the food options in a ‘pantry’.

let pantry = [protein ,grain, vegetable, drink, dessert];
let astronautMeals = [];

for(let i = 0; i < info; i++){
  let meal = [];
  meal.push(protein[i], grain[i], vegetable[i], drink[i], dessert[i])
  astronautMeals.push(meal);
}
console.log(astronautMeals)

//console.log(pantry);
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow”
if (pantry.indexOf('kale'))

//if (pantry) 
{
  console.log("Don't worry, you can have double chocolate tomorrow")
  }