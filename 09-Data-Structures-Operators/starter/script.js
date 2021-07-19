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
