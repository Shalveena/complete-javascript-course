"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////

// Functions ------------------------------------------------------

// Showing transactions

const createHTML = (movements) => {
  const htmlArr = [];

  movements.forEach((mov, i) => {
    const typeOfTransaction = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${typeOfTransaction}">${
      i + 1
    } deposit</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;

    htmlArr.push(html);
  });

  return htmlArr;
};

const displayMovements = (movements) => {
  containerMovements.innerHTML = "";

  createHTML(movements).forEach((movement, i) => {
    containerMovements.insertAdjacentHTML(
      "afterbegin",
      createHTML(movements)[i]
    );
  });
};

// Create usernames from accounts array

// Username is a word, which is made up of:
// the first letter of each word
// in the owner property
// of the account object
// in the accounts array.

// 1. Loop through the accounts array, to get each account object
// 2. Add a new property (username) to the object. The value will be a string with the first letter of each name from the owner property.
// a. Get the owner property of each account object
// b. Put the value of owner property into an array
// c. Loop through the array and get the first letter of each name(element) in the array
// d. Put the first letters into an array and then join them.
// e. Add the new string into a new property (username) in the account object.

const addUsernames = function (arrOfAccounts) {
  arrOfAccounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

// const addUsernamesMap = function (arrOfAccounts) {
//   const newAccounts = arrOfAccounts.map((account) => {
//     const newUserName = account.owner
//       .toLowerCase()
//       .split(" ")
//       .map((name) => name[0])
//       .join("");

//     return { ...account, username: newUserName };
//   });

//   return newAccounts;
// };

// Function calls --------------------------------------

displayMovements(account1.movements);
addUsernames(accounts);

/////////////////////////////////////////////////////////////////////
//////////////////////////////////////

// Coding Challenge 1:
/*
const checkDogs = (dogsJulia, dogsKate) => {
  const dogAges = dogsJulia.slice(1, -2).concat(dogsKate);

  dogAges.forEach((age, i) => {
    if (age > 2) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

console.log("---- Data1 ----");
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log("---- Data2 ----");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// Coding Challenge 2:

const calcAverageHumanAge = function (dogAgesArr) {
  // Calculate dog age in human years
  // Exclude all dogs < 18 yl
  // Calculate average age of all adult dogs

  const humanAgesArr = dogAgesArr.map((dogAge) => {
    return dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4;
  });

  const adultDogs = humanAgesArr.filter((age) => {
    return age >= 18;
  });

  const avgAge =
    adultDogs.reduce((acc, age) => {
      return acc + age;
    }, 0) / adultDogs.length;

  return avgAge;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// LECTURES///////////////////////////////

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
// Remember that methods are just functions that we can call on objects - they are functions attached to objects. And remember that arrays are objects. So, these array methods are simply functions that are attached to all arrays we create.

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method: -----------------------------------------------------

// We can extract part of the array without changing the original array.
console.log(arr.slice(2)); // starts extracting at position 2. Returns a new array: ["c", "d", "e"]

console.log(arr.slice(2, 4)); // will stop just before position 4. Returns new array: ['c', 'd']

// We can define a negative begin parameter, which means it will start to copy from the end of the array.
console.log(arr.slice(-1)); // ["e"]
// We can use the above to easily get the element at the end of the array.
console.log(arr.slice(2, -1)); // Will start extracting at position 2 and stop just before the last element: ["c", "d"]

// Finally, we can use the slice method to create a shallow copy of an array:
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
// We could also do this using the spread operator:
console.log([...arr]); // // ['a', 'b', 'c', 'd', 'e']

// Splice method: -----------------------------------------------------

// Same as slice method, but it mutates the original array by removing the specified elements from it. It returns the part of the array that has been removed.

console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']

// common use case is removing the last element of the array:
arr.splice(-1);
console.log(arr); // ["a"]

// You can choose to take out only a middle part of the array. The splice will begin at the first argument and then will delete the number of elements as per the second argument.
arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(1, 3); // will remove "b", "c", "d"
console.log(arr); // ["a", "e"]

// Reverse -----------------------------------------------------------

// Returns array where the elements are in reverse order.
// Mutates the original array

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // Original array is reversed. ['f', 'g', 'h', 'i', 'j']

// Concat ------------------------------------------------------------
// Concatenates two arrays
// Returns the new array
// Does not mutate the original arrays

const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(arr); // ['a', 'b', 'c', 'd', 'e']
//Can achieve the same thing by doing this:
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// Join -------------------------------------------------------------
// Joins the elements of an array into a string, with the separator provided in the argument. Returns the string.
// Does not mutate the original array

console.log(letters.join('-')); // a-b-c-d-e-f-g-h-i-j
console.log(letters);
*/

// FOR EACH ///////////////////////////////////////////////////////
/*
// loop over this array and print a message for each moment in this bank account, saying whether the user deposited or withdrew some money:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for-of loop:
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// for-each method to achieve the same thing as above, but more easily:
// the forEach method will loop through the array and in each iteration it will execute the callback function. It will pass in the current element of the array as an argument to the callback function
// console.log('---- FOR EACH ----');
// movements.forEach(movement => {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// What if we needed access to a counter element?
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// The for each method passes not only the current element each time it iterates through the array, but also the index and array, so we can put all three as parameters of the callback function. The first parameter of the callback function will always be the current element, second will be the current index and third will be the array that we are looping through.
console.log('---- FOR EACH ----');
movements.forEach((movement, i, array) => {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// Fundament difference: You cannot break out of a for each loop (using break and continue). If you really need to break out of a loop, you need to use the for of loop, otherwise, you can choose which one you like better :)
*/

// USING FOR EACH METHOD WITH MAPS ---------------------
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// USING FOR EACH METHOD WITH SETS ---------------------
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Set(3) {'USD', 'GBP', 'EUR'}

currenciesUnique.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});
// USD: USD
// GBP: GBP
// EUR: EUR

// Since Sets don't have idicies or keys, it doesn't make sense to have the "key" parameter, so we can just do the following instead:
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});
// USD: USD
// GBP: GBP
// EUR: EUR
*/

// MAP METHOD /////////////////////////////////////////////////
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Change movements from euro to USD
const euroToUSD = 1.1;

const movementsUSD = movements.map((movement) => movement * euroToUSD);

// Can also use for of loop instead of map method, but the map method is more in line with modern JS, which uses functional programming
const movementsUSDForOf = [];

for (const movement of movements) {
  movementsUSDForOf.push(movement * euroToUSD);
}

console.log(movementsUSD);
console.log(movementsUSDForOf);
// Both are: [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

const messages = movements
  .map(function (movement, i) {
    const transaction = movement > 0 ? "deposited" : "withdrew";

    return `Movement ${i + 1}: You ${transaction} ${Math.abs(movement)}`;
  })
  .join("\n");

console.log(messages);
*/

// FILTER METHOD ///////////////////////////////////////////////
// Is used to filter for elements that satisfy certain conditions.
// We specify the conditions using a callback function.
// Like map and forEach, the filter method gets access to the element, index and whole array as parameters of the callback function.
// It makes/returns a new array that is made up of all the elements of the original array for which the callback function returns the boolean 'true'.

// Create an array of the deposits:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((movement) => {
  return movement > 0;
});

console.log(deposits);

// Comparison with for-of loop:
const depositsForOfLoop = [];

for (const movement of movements) {
  if (movement > 0) {
    depositsForOfLoop.push(movement);
  }
}

console.log(depositsForOfLoop);

// Create an array of the withdrawals:

const withdrawals = movements.filter((movement) => movement < 0);

console.log(withdrawals);
