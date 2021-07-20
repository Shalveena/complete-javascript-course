'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Destructuring Arrays //////////////////////////
/*
// This is how we would normally retrieve the individual elements
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// But with destructuring, we call declare all three variables atthe same time:
const [x, y, z] = arr; // this looks like an array, but it is not! It is just the destructuring assignment
console.log(x, y, z); // 2 3 4
console.log(arr); // the original array is not affected.

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

// What if we only wanted to take the first and the third elements in restaurant.categories? Just leave a gap - see below:
const [first1, , third1] = restaurant.categories;
console.log(first1, third1); // Italian Vegetarian

// Switching variables:
let [main, , secondary] = restaurant.categories;

// instead of doing this...
// const temp = main;
// const main = secondary;
// const secondary = main;
// console.log(main, secondary); // Vegetarian Italian

// ... we can now do this with destructuring:
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

// Another trick with destructuring is that we can have a function return an array and then we can immediately destructure the result into different variables. This allows us to return multiple values from a function.
restaurant.order(2, 0); // [garlic bread, pizza]

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // but what if we wanted all the individual values?
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Setting default values for the variables when we are extracting them.
// very useful in the case where we don't know the length of the array.
const arr2 = [8, 9];
const [p, q, r] = arr2;
console.log(p, q, r); // 8, 9, undefined. Undefined because this is the same is trying to read the element at position 2, which will give undefined because it does not exist!

//if we set default values, the variables will become those values instead of 'undefined'
const arr3 = [8, 9];
const [s = 1, t = 1, u = 1] = arr3;
console.log(s, t, u); // 8, 9, 1
*/

// Destructuring Objects /////////////////////////////
/*
// Use curly brackets, and write the variable names exactly the same as the properties that contain the elements that you want to extract.
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// If we want the variable names to be different to the property names:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);
// very helpful when dealing with third party data!

// Default values
//for the case where we are trying to read a property that doesn't exist on the object:
// restaurant.menu // undefined!

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // will get an empty array for the menu (because we set that as the default value), and the starterMenu array for starters variable.

// Mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // error: Unexpected token '=' (Because when we start a line of code with curly brackets, JS expects a codeblock). So, the trick is to wrap it in parenthesis.
console.log(a, b); // 23 7

// Nested Objects
// Let's say we want to create two variables (open and close), and these should contain the open and close hours for Friday. The fri opening hours is an object, inside the openingHours object, which is itself inside the restaurant object.
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11 23

// Practical application of destructuring
// We can use use destructuring to pass a whole object as an argument to a function and destructure it right in the function to get multiple variables!
const orderObject = {
  time: '22.30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
};

restaurant.orderDelivery(orderObject); // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22.30
// Note, the properties in the object being passed in don't have to match the order in which we are doing the destructuring in the function!
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
}); // Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00. Uses default values of Pizza and 20:00.
*/

// Spread Operator ///////////////////////////
// Used to expand an array into all it's elements
/*
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(newArray);

// Used to pass multiple variables as argument into function
console.log(...newArray);

// Practical example:

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu); // [Pizza, Pasta, Risotto, Gnocchi]

// Two Important Use Cases:

// Create shallow copies of arrays
// Create a new copy of the main menu:
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays or more
// Create a menu variable, which is a menu containing both the main menu and the starter menu:
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// The Spread Operator works on all 'iterables'
// "Iterables" are things like all arrays, strings, maps or sets but not objects.

// Example of spread operator being used on strings
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters); // ["J", "o", "n", "a", "s", "", "S."]

// We can ONLY use spread operator when building an array or passing arguments into a function. E.g. We cannot use it to build a temperate literal (this is because multiple values separated by a comma are only expected in arrays or when passing arguments into functions.)

// Let's write our own function that accepts multiple arguments and then use the spread operator to pass those arugments to the function.
const ingredients = [
  // prompt(`Let's make pasta! Ingredient 1?`),
  // prompt(`Let's make pasta! Ingredient 2?`),
  // prompt(`Let's make pasta! Ingredient 3?`),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Old way
restaurant.orderPasta(...ingredients); // new way using the spread operator

// Objects
// since 2018, the spread operator also works on objects, even though objects are not iterables. For example, lets create a new restaurant object:
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant); // will be the same as the restaurant object, but with the additional new properties.

// finally, since we were able to do shallow copies of arrays using the Spread Operator, we can do the same with objects!
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(
  `Old restaurant name: ${restaurant.name}, new restaurant name: ${restaurantCopy.name}`
); // Proves that it works, otherwise the name would be the same for both.
*/

// Rest Operator and Rest Parameters
/*
// Has the same syntax as the spread operator but does the exact opposite!
// We used spread operator to build new arrays or to pass multiple values into a function. We used it to expand an array into multiple elements (unpack it). The rest operator is to pack elements into an array.

// 1) Destructuring

// recap: use of spread operator. SPREAD because it is only the right side of the equal sign.
const arr = [1, 2, ...[3, 4]];

// spread operator with destructuring. This is the REST operator because it is on the left hand-side of the equal sign.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]

// Eg: we only want to get pizza and risotto from the main menu, assign those to two new variables with the same name, and then create a variable (array) to hold the remaining food items.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // Pizza Risotto ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// NOTE: the rest element must be the last element, and there can only be one rest in any destructuring assignment.

// Objects
// The difference is that the remaining elements will be collected into a new object and not into a new array.
// E.g we want to take out Saturday from our opening hours and collect the rest into a new object:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}

// 2) Functions
// We want to create a simple add function that can add together any amount of numbers
const add = function (
  ...numbers // puts the nubers together into an array
) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3); // [2, 3] // 5
add(5, 3, 7, 2); // [5, 3, 7, 2] // 15

const x = [23, 5, 7];
// if we wanted to take these values and call the add function with these three values, we can:
add(...x); // 35

// Example, ordering pizza using our newly made OrderPizza function:
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // we can specify as many arguments as we want! Gives: mushrooms ["onion", "olives", "spinach"]
// We could also only give one input:
restaurant.orderPizza('mushrooms'); // mushrooms []

// IMP: The Spread Operator is used where we would otherwise write values separated by a comma. The REST pattern is used where we would otherwise write variable names separated by commas.
*/

// Short Circuiting (&& and ||) //////////////
/*
// 1. They can use any data type
// 2. They can return any data type
// 3. They can do short-circuiting.

console.log('---- OR ----');
// || OR operator
// The result of the OR operator doesn't always have to be a boolean
// In the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that value. For example:
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas. Because "" is a falsy value so the second operant will also be evaluated, it will be found to be a truthy value and so it will be returned.
console.log(true || 0); // true
console.log(undefined || null); // undefined is a falsy value, so we move into the next operant - null - and that gets displayed (even though it is also falsy!)

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// More practical application: We want to check whether restaurant.numGuests exists. If it does exist, we want to save it's value in a variable (guests1). If it does not exist, we want to save the value of 10.

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // 10. Because numGuests doesn't exist.

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 23. Because numGuests now DOES exist.

// Instead of doing the above, we can take advantage of short circuiting and the OR operator:
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 23

console.log('---- AND ----');

// AND Operator
// When it comes to short circuit evaluation, the AND operator works in the exact opposite way of the OR operator. That is, it short circuits when the first value is falsy and then immediately returns that falsy value without even evaluating the second value.
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas. When the first value is truthy, the evaluation continues and the last value returns, even if that is not a truthy value.

console.log('Hello' && 23 && null && 'Jonas'); // null

// Practical example: checking if the orderPizza method exists, and if it exists then calling it.
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// can use && operator to short circuit:
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // if it dosesn't exists, the first will be a falsy value so it will just stop there and not call the function.

// SUMMARY;
// So the OR operator will return the first truthy value of all the operands, or simply the last value if all of them are falsy. On the other hand, the AND operator will return the first falsy value or the last value if all of them are truthy. And as for practical applications,we can use the OR operator to set default values, and we can use the AND operator to execute code in the second operand if the first one is true.
*/

// Nullish Coalescing Operator ///////////
/*
// The following won't work because the value of restaurant.numGuests is set to 0, which is a falsy value so the OR operator will ignore it and move on to the next value.
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish Coalescing Operator works with the concept of nullish values. Nullish values are: null and undefined. So, for the Nullish Co.. operator, it is as if all other values (including 0) are truthy values! So only if the first operand is null or undefined than the evaluation continues. When it finds a nullish value, the evaluation short circuits and the first non-nullish value is returned.
//This works:
const guests = restaurant.numGuests ?? 10; // 0
*/

// Challenge //////////////////
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

// 2 The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
