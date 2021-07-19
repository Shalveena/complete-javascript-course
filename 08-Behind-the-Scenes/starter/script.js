'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName); // this firsName variable is available here because it is defined in the global scope.

  function printAge() {
    let output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Stephen'; // this will cause the str to say "Oh, and you're a millenial, Stephen"

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`; // firstName is still available here.
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str); // error: str is not defined; because it is only in the block-scope of the if statement and not accessible here!

    console.log(millenial); // works! Because var variables are function scoped (so they ignore the block) and here we are still in the same function so it is still accessible here.

    // add(); // error: add is not defined. The scope of the add function is only the block in which it was defined (only for strict mode).
    // console.log(add(2, 3));

    console.log(output); // Gives: NEW OUTPUT. This is because we have redefined the output variable
  }

  printAge();

  return age;
} // this function is defined in the global scope. It also creates its own scope, which is going to be equivalent to its variable environment of its execution context.

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); // error because this is not accessible here!
// printAge(); // error because the printAge function is inside the calcAge function, which is not accessible here!
*/

// Hoisting /////////////////////////////////////////

// Hoisting with variables
// Try to access the variables below before declaring them
/*
console.log(me); // undefined (no error message given!)
console.log(job); // error: cannot access 'job' before initialization. Is in TDZ atm.
console.log(year); // error: cannot access "year" before initialization. Is in TDZ atm.

var me = 'Jonas';
let job = 'teacher';
const year = 1991;
*/

// Hoisting with functions
/*
console.log(addDeclaration(2, 3)); // 5. Works, because it is a function declaration (so it is hoisted).
// console.log(addExpression(2, 3)); // error: cannot access "addExpression" before initialization. Because it is a function declaration declared using a let variable. If it was declared using var, it would say error: addExpression is not a variable. This is because addExpression would be set to 'undefined' and undefined is not a function!
// console.log(addArrow(2, 3)); // same error as above.

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = () => a + b;

// Example

if (!numProducts) deleteShoppingCart(); // "All products deleted" because numProducts is "undefined" at this time, not 10 - due to hoisting the var variable is set to undefined here! DANGEROUS!

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// Diff between var, let and const
var x = 1; // creates a property in the window object (window is a global JS object). Can check this by typing "window" in the browser console.
let y = 2;
const z = 3;

// checking whether x, y and z are properties of the window object:
console.log(x === window.x); // true
console.log(y === window.x); // false
console.log(z === window.x); // false
*/

// The this keyword //////////////////////////

// Global scope
/*
console.log(this); // the this keyword in the global scope is jus the window object

// this keyword in a normal function call
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991); // this keyword is undefined, because the function in which it lives was called just by a normal function call. Note, this is only when using strict mode. Otherwise, the this keyword will point to the window object.

// this keyword in an arrow function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980); // this keyword will be the window object. That is because the arrow function doesn't get its own this keyword, but instead uses the lexical this keyword (the this keyword of its parent function/parent scope.)
*/

/*
const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);

  const calcAgeArrow2 = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // will be undefined because it uses the this keyword of its parent function (the calcAge2 function), which is undefined since it is called by a normal function call (see below: calcAge2(1991))
  };

  calcAgeArrow2(1980);
};

calcAge2(1991);
*/

// this keyword in a method call
/*
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge(); // the this keyword here will point to the jonas object. The result here will therefore be 46.

// when used in an object (like above), the this keyword won't just always point to the object in which it is used. It will point to the object that is calling the function in which the this keyword is used (the object that owns the function)
const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // setting a calcAge method for the matilda object by copying it from jonas.calcAge. The matilda object will now look like: const matilda = {year: 2017, calcAge: function() {...},}. This is called method borrowing because we have borrwed the method from one object to another.
matilda.calcAge(); // the this keyword will now be matilda! The result here would therefore be 20 (not 46)
const f = jonas.calcAge; // copying the function into a new variable (we can do this because a function is basically just a value)
// f(); // the this keyword is now undefined, so the first console.log(this) in the calcAge function will log "undefined". The second console.log(2037 - this.year) will give an error: cannot read property 'year' of undefined
*/

// Pitfall: Example of this keyword in arrow function method
/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey, ${this.firstName}`),
};

jonas.greet(); // result: Hey undefined. The this keyword here points to the global window object because the arrow function greet does not get its own keyword. When we try to access the firstName property on an object but there is no such property on that object, the this keyword becomes undefined.
// NOTE: never use an arrow function as a method!
*/

/*
// Pitfall of the this keyword when we have a function inside a method
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    
    // // this is a function inside the calcAge method
    // const self = this; // Pre ES6 solution to preserve the this keyword for use inside the function below. The this keyword will now be jonas(because calcAge method is called on the jonas object below.)
    // const isMillenial = function () {
    //   console.log(this); // undefined. Why? Because isMillenial() below is just a regular function call. After we set self = this, the this keyword would become jonas so it will work again (this.year will be jonas.year)
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();
    
    // ES6 solution is to use arrow function instead
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); // works because the arrow function does not get its own this keyword. Therefore, the this keyword is the this keyword from the parent scope, which is jonas!
  },
};

jonas.calcAge();
*/

// arguments keyword
/*
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5); // we will see the arguments keyword. This is useful when we need a function to accept more parameters than we specified. Eg see below
addExpr(2, 5, 8);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
}; // arrow function does not getthe arguments keyword

addArrow(1, 2); // error: arguments is not defined.
*/

// Primitives vs Objects ///////////////////

// Primitives example
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

// Object exaple
const me = {
  name: 'Jonas',
  age: 30,
};

// imagine I have a friend who is also called Jonas, but has a different age
const friend = me;
friend.age = 27;
console.log('Friend:', friend); // Friend: {name: "Jonas", age: 27}
console.log('Me:', me); // Me: {name: "Jonas", age: 27} Why did this change? It is because both friend and me point to the same object in the memory heap (see Notion notes)!
*/

// Primitives vs Objects in practice

// Each primitive value will be saved into its own piece of memory in the call stack.
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// But an object is a reference value because it will be stored in the heap and the stack just keeps a reference to the memory position at which the object is stored in the heap!
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('before marriage:', jessica);
console.log('after marriage:', marriedJessica);

// So how can we copy an object properly? Use Object.assign function to merge two objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // this will merge jessica2 with an empty object, creating a new array.
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(jessica2);
console.log(jessicaCopy);
// NOTE: this only does a 'shallow copy' not a deep clone. That is, if the jessica2 object had another object or array inside it (e.g. the family array), that inner object or array will not be copied (it will still point to the same place in memory instead of making a new copy!). So if we change the array in one jessica object, it will also do it in the other one.
