'use strict';

// Strings Methods Practice ----------------------

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => {
  return str.slice(0, 3).toUpperCase();
};

for (const flight of flights.split('+')) {
  // console.log(flight.split(';'));
  let [type, from, to, time] = flight.split(';');

  time = time.replace(':', 'h');
  type = type.replaceAll('_', ' ').trim();

  from = getCode(from);
  to = getCode(to);

  const isDelayed = type.startsWith('Delayed') ? '🔴' : '';

  const output =
    `${isDelayed} ${type} from ${from} to ${to} (${time})`.padStart(50);

  console.log(output);
}

// ------------------------------------------------------

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
/*
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

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log('---allPlayers array---');
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1 },
// } = game;
// console.log(team1);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// The function should put the values it receives into an array, then pass it in as an argument
// it should then print to the console the names of each player
// and it should print to the console the total number scores, which is based on the length of the array passed in
const printGoals = function (...playersNames) {
  for (let i = 0; i < playersNames.length; i++) {
    console.log(playersNames[i]);
  }
  console.log(playersNames.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator

// console.log(`${team1 < team2 || team2 < team1} is more likely to win`);

team1 < team2 && console.log(`Team 1 is more likey to win`);
team1 > team2 && console.log(`Team 2 is more likey to win`);
*/

// Looping over Arrays: the for-of loop /////////////////
/*

// Looping through the menu items
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
for (const item of menu) console.log(item);
// will automatically loop over the entire array and for each iteration it will give us access to the current array element.

// We can still use the continue and break keywords!

// What if we also wanted the current idex and not just the current element? This can be a pain, but you can do it like this:
// for (const item of menu.entries()) {
//   // console.log(item); // [0, "Focaccia"] (then the next iteration would be [1, "Bruschetta"] and so on)
//   console.log(`${item[0] + 1}: ${item[1]}`); // old way
// }

for (const [i, el] of menu.entries()) {
  // console.log(item); // [0, "Focaccia"] (then the next iteration would be [1, "Bruschetta"] and so on)
  console.log(`${i + 1}: ${el}`); // new way
}

console.log(menu.entries()); // Array Iterator {}
*/

// Enhanced Object Literals ////////////////////
/*

// The following is an object literal:
const objectExample = {
  property1: 'value1',
  property2: 'value2',
  property3: 'value3',
  method1: function (x) {
    console.log(x);
  },
};

// ES6 introduced three ways that make it easier to write object literals.

// 1. Let's say the opening hours object is outside the restaurants object, and we want to also include it in the restaurants object:
const openingHours = {
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
};

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // old way of doing it:
  // openingHours: openingHours // the problem: the property name is exactly the same as the variable name from which we are getting the object. With enhanced object literals, we don't have to write that!

  // ES6 enhanced object literals:
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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

console.log(restaurant2);

// 2. When creating methods, in Es6 we no longer have to create a property and then set it to a function expression.
const restaurant3 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  // we no longer have to do it this way:
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // Instead, we can do this:
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// 3. The third enhancement is that we can compute property names instead of writing them out manually and literally:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours2 = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
*/

// Optional Chaining ///////////////////////
/*
console.log(restaurant.openingHours.mon); // undefined
// console.log(restaurant.openingHours.mon.open); // error!

// We could check whether monday exists and log the open time if it does by doing this:
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // if mon doesn't exist then it just won't log anything.

// But imagine if we didn't even know if the restaurant had the openingHours property. Then it gets messy and can get out of hand quickly when we have deeply nested objects:
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// ES 2020 introduced Optional Chaining - a solution for the above. With Optional Chaining, if a certain property doesn't exist, undefined is returned immediately.
console.log(restaurant.openingHours.mon?.open); // only if the property before the ? exists (that is according to the nullish concept - a property exists if it is not null and not undefined. So if it is 0 or an empty string, it still exists.), then the .open property will be read from there. Otherwise, immediaetely undefined will be returned.

// Example:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// We want to loop over this array and log to the console whether the restaurant is open or closed on each day
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`); // use nullish coalescing operator instead of OR operator because otherwise there will be problems where the value is 0.
}

// Optional chaining also works on calling methods. We can check whether a method actually exists before we call it.
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// It also works on arrays:
const users = [];
console.log(users[0]?.name ?? 'User array empty'); // "User array empty"

const usersNew = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(usersNew[0]?.name ?? 'User array empty'); // Jonas

// without optional chaining, we would have to do something like:
if (usersNew.length > 0) console.log(usersNew[0].name);
else console.log('User array empty');
*/

// Looping Objcts: Object Keys, Values and Entries //////////
/*
// Looping over object property NAMES:

const openingHours = {
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
};

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// checking what Object.keys is:
const properties = Object.keys(openingHours);
console.log(properties); // ["thu", "fri", "sat"]
// we can use this to log how many days we are open:
console.log(`We are open ${properties.length} days of the week.`); // We are open 3 days of the week.

// we can now loop over this array!
for (const day of properties) {
  console.log(day);
}

// Now we can actually do something cool and build a string where we add to it by looping over the array:
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  // openStr = openStr + `${day}`
  openStr += `${day}, `;
}

console.log(openStr);

// Looping over object property VALUES:
const values = Object.values(openingHours);
console.log(values); // [{open: 12, close: 22}, {open: 11, close: 23}, {open: 0, close: 24}]

// Now we can loop over the values variable (which is an array)
for (const value of values) {
  console.log(value);
}

// We can ony really loop over the entire object if we loop over the entries. Looping over the entries (entries are the properties + values together):

const entries = Object.entries(openingHours);
console.log(entries); // [["thu", {open: 12, close: 22}], ["fri", {...}], ["sat", {...}]] Each key-value pair is put into an array and the arrays are nested inside a bigger array.

// looping through the entries array now:
for (const x of entries) {
  console.log(x);
} // will log each key-value pair

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`); // using destructuring here
}
*/

// Challenge 2 /////////////////////////
/*
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

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// my solution
const oddsArr = Object.values(game.odds);
let sum = 0;
for (const odd of oddsArr) {
  sum += odd;
}
let avgOdds = sum / oddsArr.length;
console.log(avgOdds);

// Jonas' solution
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them(except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

// a. Need to get the team names and odds from the odds object:
const oddsEntries = Object.entries(game.odds);
console.log(oddsEntries);

// b. Loop over the oddsEntries array:
for (const [team, odd] of oddsEntries) {
  // d. If the team element is "x", then the string should say "draw", otherwise, it should say the name of the team (which we can get from the game object)
  const str = team === 'x' ? 'draw' : game[team];
  // c. log the string to the console:
  console.log(`Odd of ${str}: ${odd}`);
}
*/

// Sets //////////////////////
/*
// Are a data structure, like objects and arrays.
// Sets are a collection of unique values so that means a Set can never have any duplicates.

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);

console.log(ordersSet); // The set will only have Pasta, Pizza and Risotto {"Pasta", "Pizza", "Risotto"}

// Sets are also iterables, just like arrays. However, they are different from arrays because (a) the elements in the Set are unique and (b) the order of elements in the Set is irrelevant.

// Remember that strings are also iterables, so we can do this:
console.log(new Set('Jonas')); // {"J", "o", "n", "a", "s"}

// Working with Sets

// 1. Getting the size of a Set:
console.log(ordersSet.size); // 3

// 2. Checking whether a certain element is in a Set:
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

// 3. Adding new elements to a Set:
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); // {"Pasta", "Pizza", "Risotto", "Garlic Bread"} Note: the Garlic Bread got added, but only once.

// 4. Deleting elements:
ordersSet.delete('Risotto');
console.log(ordersSet); // {"Pasta", "Pizza", "Risotto"}

// 5. Retrieving info from a Set:
// In Sets there are no indexes and in fact there is no way of getting info out of a Set. If you need to do so, you should use an array.

// 6. Deleting all of the elements of a Set:
// ordersSet.clear();
// console.log(ordersSet);

// Looping over Sets
// Sets are also iterables and therefore we can loop over them
for (const order of ordersSet) {
  console.log(order); // Pasta Pizza Garlic Bread
}

// Big use case for Sets
// Main use-case is to duplicate values in an array

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// say we are interested in knowing just how mnay different roles there are in the restaurant
// const staffUnique = new Set(staff);
// console.log(staffUnique); // {"Waiter", "Chef", "Manager"}

// now we want to make this into an array
// Conversion from Set to array:
const staffUnique = [...new Set(staff)];
console.log(staffUnique); //['Waiter', 'Chef', 'Manager'];

// checking how many different roles there are:
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

// Can use this to find out how many different letters there are in a string. For example:
console.log(new Set('shalveenarohde').size); // 10
*/

// Maps - Fundamentals //////////////
/*
// A map is a datastructure that we can use to map values to keys. Just like in an object, in Maps the data is stored in key-value pairs. The big difference between objects and maps is that in maps the keys can have any type. In objects, the keys are always strings but in maps we can have any type of key! It could even be objects or arrays, or other maps!

// Easiest way to create a map is to create an empty map and then use the .set method to fill it.
const rest = new Map();
rest.set('name', 'Classico Italiano'); // key-value pair
rest.set(1, 'Firenze, Italy'); // this doesn't only update the map that it is called on, but it also returns the updated map.
console.log(rest.set(2, 'Lisbon, Portugal')); // {"name => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}

// The fact that the .set method returns the updated map means that we an actually chain multiple .set methods together as follows:
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// Reading data from the map - the .get method
// All we have to do is pass in the name of the key into the get method.
console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // "We are open :D"

// Clever use of the boolean key in our rest map:
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // this will compute to rest.get(true) or rest.get(false). Result will be either: "We are open :D" or "We are closed :(" )
// While the above is clever, it is not very readable haha!

// Checking if a map contains a certain key: .has method
console.log(rest.has('categores')); // true

// Deleting keys from a map:
rest.delete(2);
console.log(rest);

// Size property:
console.log(rest.size); // 7

// Removing all elements from the map:
// rest.clear();
// console.log(rest);

// Example showing that we can use objects or arrays as map keys:
// rest.set([1, 2], 'Test');
// console.log(rest);
// Getting the data based on the array key:
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // Test

// Since DOM elements are nothing more than special types of objects, we can also use them as keys:
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/

// Maps: Iteration
/*
// another way of populating a new map without using the set method:
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
// The first element in the nested array will be the key and the second one will be the value.

console.log(question);

// Convert object to map
// const hoursMap = new Map(Object.entries(openingHours)); // we can use Object.entries() because the array of that is exactly the same as [[], [], []]

// Iterating through a map
// Maps are also iterables so they can be looped through.
console.log(question.get('question'));
for (const [key, value] of question) {
  // We only want to print the element if the key is a number
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// say we wanted to get the answer from the user through a prompt:
// const answer = Number(prompt('Your answer:'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// Converting a map back to an array:
console.log([...question]); // building a new array and then unpacking the question map inside it!

// Maps also have the other methods that were available on arrays:
console.log(...question.entries());
console.log(...question.keys()); // to get all the keys
console.log(...question.vaues()); // to get all the values
*/

// Which Data Structure to Choose?
// 1. Do we just need a simple list of values? If yes, then we use an Array or Set.
// 2. Do we need a key value pair? If yes, then we use Objects or Maps. (Keys allow us to describe values.)

// In modern JS applications, web APIs are usually the most common source of data. Data from web APIs usually comes in a special data formal called a JSON - JSON is essential just a long string, but it can easily be converted into an object because it uses the same formatting as JS objects and arrays.

// Note: Creating an array of objects is extremely common!

// Arrays vs Sets
// see slide

// Objects vs Maps
// see slide

// Coding Challenge 03
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)

console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. Remove the yellow card from minute 64 from the game events log.
gameEvents.delete(64);
// console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes"
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it happened in the first or second half (after 45min). Like this: [FIRST HALF] 17: GOAL

for (const [min, event] of gameEvents) {
  console.log(`[${min < 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${min}: ${event}`);
}
*/

// Working with Strings ////////////////
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

// 1. Getting the character of a string at a certain position:
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
// We can do the same directly on a string:
console.log('B737'[0]); // B

// Reading the length property of strings:
console.log(airline.length); // 16
// OR doing it directly:
console.log('TAP Air Portugal'.length); // 16

// 2. Methods for strings

// a. IndexOf: getting the position of a certain letter in the string
// Note, the index starts from 0 (strings are 0 based). Spaces also count as characters.
// Is case sensitive

console.log(airline.indexOf('r')); // 6

// IndexOf gives the position of the first occurence of the given letter. If you want the last occurence, you can use lastIndexOf:
console.log(airline.lastIndexOf('r')); // 10

// Searching for entire words:
console.log(airline.indexOf('Air')); // 4

// Note: if the character you are searching for does not exist, it will return -1

// Use case:
// To extract parts of a string using the slice method. The slice method needs indices as arguments. It returns a new string.

// the index is the position at which the extraction will start
// Note: it doesn't change the underlying string! This is because it is virtually mutate strings because they are primitives.
console.log(airline.slice(4)); // Air Portugal (called a sub-string)
// if we wanted to use this sub-string now, we would need to store it into a variable or some other data structure.

// we can also specify an end parameter:
// Note: the slice method/extraction will stop just before the position of the character given in second argument. It stops extracting just before reaching index 7.
console.log(airline.slice(4, 7)); // Air

// Up until this point, we have just hard-coded the index. But many times, we don't know the string we will receive yet. Let's now try to extract the first word of the string but without knowing any of  the indices. This is where indexOf and lastIndexOf become important!
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// extracting the last word:
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// we can even define a negative begin argument for the slice method:
console.log(airline.slice(-3)); // gal
// Giving a negative number to the slice method starts extracting from the end, moving left.

// we can also give the second argument a negative number:
console.log(airline.slice(0, -1)); // TAP Air Portuga

// Practice: write a function that receives an airplane seat and logs to the console whether it is a middle seat or not
const checkMiddleSeat = function (seatNumber) {
  // B and E are the middle seats
  // We need to take the last character of the seat and test whether it is a B or an E

  const seat = seatNumber.slice(-1);
  console.log(seat === 'B' || seat === 'E' ? 'Middle Seat' : 'Not middle seat');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// b. Changing the case of a string: toLowerCase and toUpperCase. Note: these don't mutate the original string.

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

console.log(airline);

// More practical example: fix the capitalisation in a passenger's name:
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase(); // jonas
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Another example: comparing email addresses of passengers:
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n'; // \n is the enter character.

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
//refactoring:
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// c. Replacing parts of strings. The replace method also creates a new string

const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceUS);

// replacing entire word instead of just a single character:
const announcement =
  'All passengers must go to boarding door 23. That is boarding door 23!';
console.log(announcement.replace('door', 'gate')); // only replaced first instance of "door"
//use replaceAll to replace all instances of the word
console.log(announcement.replaceAll('door', 'gate'));

// if cannot use replaceAll, can use regular expression instead:
console.log(announcement.replace(/door/g, 'gate'));

// Three simple methods that return Booleans: includes, startsWith, and endsWith

// includes
const airplane = 'Airbus A320neo';
console.log(airplane.includes('A320')); // true. Note: case sensitive

// startsWith
console.log(airplane.startsWith('Bo')); // false
console.log(airplane.startsWith('Air')); // true

// endsWith
// want to check if the plane's name starts with Airbus and ends with neo:
if (airplane.startsWith('Airbus') && airplane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// Practice exercise:
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You cannot take that on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);

// d. Split method
// Allows us to split a string into multiple parts based on a divider string.
console.log('a+very+nice+string'.split('+')); // the split method will split up the string by the + sign and then store the results into elements of a new array: ["a", "very", "nice", "string"]
console.log('Jonas Schmedtmann'.split(' ')); // ["Jonas", "Schmedtmann"]

// can now use the power of destructuring to create variables like this:
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName);

// d. Join method:
// let's say we want to make the last name uppercase and want to add "Mr" to the beginning:
['Mr.', firstName, lastName.toUpperCase()].join(' ');

// Use example: to capitalise a name
const capitaliseName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // OR
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitaliseName('jessica ann smith davis');
capitaliseName('shalveena rohde');

// Padding a string:
// Padding a string means to add a number of characters to a string until the string has a certain desired length

// padStart
const message = 'Go to gate 23!';
// padStart method adds padding to the start of the string. It adds the character given as the second argument and keeps adding it until the string contains the number of characters specified in the first argument.
// padEnd
// adds padding at the end. Works the same as the padStart method.

console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

// Practice use case:
// When you see a credit card number, you don't actually see the entire number. It is usually masked and you only see the last few numbers.
const maskCreditCard = function (number) {
  const str = number + ''; // converting number to string
  // need to take out the last four numbers and then create a new string where the other characters are replaced with some symbols
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(123439391812803));
console.log(maskCreditCard('191903974109142'));

// Repeat method:
// Allows us to repeat the same string multiple times
const message2 = 'Bad weather...All departures delayed... ';
// create a bigger string repeating this above string multiple times
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(3);
planesInLine(9);
*/

// Coding Challenge
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Jonas' solution ////////////////
const button = document.querySelector('button');

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  // split the string into an array:
  const rows = text.split('\n');

  // loop through the array
  for (const [i, row] of rows.entries()) {
    // for each row, put it into lower case, trim it, and split it into two words. Save each word into a new variable using deconstruction
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(row, first, second);

    // put the first and second word together, making sure to replace the first character of the second word with an uppercase letter.
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`); // when we want empty spaces, we can just leave the second argument out of the padEnd method (instead of putting a string with a space in it)
  }
});
// My solution ///////////////////
/*
// Program must receive list of variable names written in underscore_case and convert them to camelCase
const btn = document.querySelector('button');
const text = document.querySelector('textarea');

btn.addEventListener('click', function () {
  // get the input from the textarea
  const userInput = document.querySelector('textarea').value;

  // put it into lower case
  const inputLower = userInput.toLowerCase();
  // console.log(inputLower);

  // put it into an array separated by the space
  const usArr = inputLower.split('\n');
  console.log(usArr);
  let csArr = [];

  // loop through the array,
  for (const text of usArr) {
    // separate the text into three parts:
    // (a) one before the underscore
    const strBeforeUS = text.slice(0, text.indexOf('_'));
    // (b) one after the underscore
    const strAfterUS = text.slice(text.indexOf('_') + 1);
    // (c) take the first letter of word after underscore, capitalise it and put it with the rest of the word
    const strAfterUSCap = strAfterUS[0].toUpperCase() + strAfterUS.slice(1);
    // make the new word with right format by putting the parts together
    const camelCaseStr = strBeforeUS + strAfterUSCap;
    // push the string into the array
    csArr.push(camelCaseStr);
  }

  for (const [i, e] of csArr.entries()) {
    console.log(`${e.padEnd(21, ' ')}${'✅'.repeat(i + 1)}`);
  }
});
*/
