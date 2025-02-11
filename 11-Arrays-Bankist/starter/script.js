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
    } ${typeOfTransaction}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    htmlArr.push(html);
  });

  return htmlArr;
};

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  createHTML(movs).forEach((movement, i) => {
    containerMovements.insertAdjacentHTML("afterbegin", createHTML(movs)[i]);
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

// Calculate & display balance
const calcAndDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

// Calculate total money in,  money out and interest
const calcAndDisplayTotals = (account) => {
  const totalDeposits = account.movements
    .filter((mov) => mov > 0)
    .reduce((previous, current) => previous + current, 0);
  labelSumIn.textContent = `${totalDeposits}€`;

  const totalWithdrawals = account.movements
    .filter((mov) => mov < 0)
    .reduce((prev, curr) => prev + curr, 0);
  labelSumOut.textContent = `${Math.abs(totalWithdrawals)}€`;

  // bank pays 1.2% interest each time you make a deposit, but only if the interest amount would be more than 1Euro
  const interest = account.movements
    .filter((movement) => movement > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((deposit) => deposit > 1)
    .reduce((acc, interest) => acc + interest);

  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = (account) => {
  // display movements
  displayMovements(account.movements);
  // display balance
  calcAndDisplayBalance(account);
  // display summary
  calcAndDisplayTotals(account);
};

///////////////////////////////////////////////////////////////

// Function calls --------------------------------------

addUsernames(accounts);

// EVENT HANDLERS ////////////////////////////////////////////

// Event handler for logging in
let currentAccount;
btnLogin.addEventListener("click", (e) => {
  // prevent form from submitting
  e.preventDefault();
  // check the username and password match
  currentAccount = accounts.find((account) => {
    return account.username === inputLoginUsername.value;
  });

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = ""; // works because assignment operator works from right to left.
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

// Event handler for transferring money
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const transferAmount = Number(inputTransferAmount.value);

  // checking if user's input into "Transfer to" matches existing username. If so, assign to recipientAccount variable. If not, will return undefined.
  const recipientAccount = accounts.find(function (account) {
    return inputTransferTo.value === account.username;
  });

  console.log(recipientAccount, transferAmount);

  // before doing the transfer, need to check:

  // // receiver account exists
  // // receiver account is not the same as the current account
  // // sender has balance of at least the amount being transferred
  // // amount being sent is not negative
  if (
    recipientAccount &&
    recipientAccount?.username !== currentAccount.username &&
    transferAmount > 0 &&
    currentAccount.balance >= transferAmount
  ) {
    // when clicked, the amount transferred should be -minus in the sending account and +plus in the receiving account.
    // the balance in each account should also be updated.

    currentAccount.movements.push(-transferAmount);
    recipientAccount.movements.push(transferAmount);
    updateUI(currentAccount);

    console.log("tranfer complete");
  }

  inputTransferAmount.value = inputTransferTo.value = "";
});

// Event handler for requesting loan
// loan will only be approved if the account has a deposit that was at least 10% of the loan being requested.

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some((movement) => movement >= loanAmount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(loanAmount);

    // update UI
    updateUI(currentAccount);

    // remove focus from input field
    inputLoanAmount.value = "";
  }
});

// Event handler for closing account
btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // find the account that is being deleted from the accounts array
    const index = accounts.findIndex((acc) => {
      return acc.username === inputCloseUsername.value;
    });

    // delete the account
    accounts.splice(index, 1);

    // close UI
    containerApp.style.opacity = 0;
  }

  // remove focus from input fields
  inputCloseUsername.value = inputClosePin.value = "";
});

// Event handler for sorting transactions in ascending order:
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  sorted = !sorted;
  displayMovements(currentAccount.movements, sorted);
});

/////////////////////////////////////////////////////////////////////
//////////////////////////////////////

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
/*
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
*/

// REDUCE METHOD ////////////////////////////////////////////////////
/*
// first parameter is a callback function.
// the first parameter of the callback function is the accumulator.
// Accumulator: like a snowball, that keeps accumulating the value we want to return.
// the second parameter is the initial value of the accumulator.

const movements = account1.movements;
console.log(movements);

const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance);

// Finding the maxiumum value in the movements array
const maximum = movements.reduce((previousValue, currentValue) => {
  return Math.max(previousValue, currentValue);
});

console.log(maximum);

// Finding the maximum value in the movements array:
const maximum2 = movements.reduce((previousValue, currentValue) => {
  if (previousValue > currentValue) return previousValue;
  else return currentValue;
});
console.log(maximum2); //3000
*/

// Convert euro to usd
// const euroToUsd = 1.1;

// const totalDepositsUSD = account1.movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// FIND METHOD ////////////////////////////////////////////////
/*
const firstWithdrawal = account1.movements.find((mov) => mov < 0);
console.log(account1.movements);
console.log(firstWithdrawal);

// The find method is often used when we want an exact element. For example, we want the Jessica Davis object from an array of objects:
console.log(accounts);
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

// Doing the same thing using a for of loop:
for (const account of accounts) {
  if (account.owner === "Jessica Davis") {
    console.log(account);
  }
}
*/

// FindIndex method ////////////////////////////////////////////////
// Works almost the same was as the find method, but it returns the index of the found element and not the element itself.

// closing an account (deleting it from the accounts array)
// see app at top -> event listener for closing account.

// SOME METHOD //////////////////////////////////////////////////////
/*
console.log(account1.movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(account1.movements.includes(-130)); // true

// checking whether the account had any deposits made into it
const anyDeposits = account1.movements.some((mov) => {
  return mov > 0;
});
console.log(anyDeposits); // true
*/

// EVERY METHOD /////////////////////////////////////////////////////
/*
// Similar to the some method, but it returns true only if every element in the array passes the condition.
console.log(account1.movements);
console.log(account1.movements.every((mov) => mov > 0));
console.log(account4.movements);
console.log(account4.movements.every((mov) => mov > 1));
*/

// FLAT AND FLATMAP METHOD
/*
// How can we flatten this array?
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// We can use the spread operator, but it is a bit cumbersome:
const arrFlattenedOld = [...arr[0], ...arr[1], arr[2], arr[3]];
console.log(arrFlattenedOld);

// Thankfully, we now have the .flat method, which is much easier:
const arrFlattenedNew = arr.flat();
console.log(arrFlattenedNew);

// doesn't mutate the original array
console.log(arr);

// But what if you have an array that is even deeper nested?
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [[1, 2], 3, 4, [5, 6], 7, 8];
// We can do so by going two levels deep:
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// Example: Calculate the total balance of all the bank accounts put together

// FLAT
console.log(accounts);

// 1. Get the movements from each account and put them together in an array.
const accountMovements = accounts.map((account) => account.movements);
console.log(accountMovements);

// 2. The array is nested, so we want to flatten it
const movements = accountMovements.flat();
console.log(movements);

// 3. Add up all the movements to get a single balance using reduce method
const overallTotal = movements.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
console.log(overallTotal);

// Chaining (with flat method)

const overallBalance = accounts
  .map((account) => account.movements)
  .flat()
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

console.log(overallBalance);

// FLATMAP
// Is essentially the map method but it also flattens the resulting array. Note: it can only go one level deep; so if you need to go deeper, you'll still need to use the flat method.

const overallBalance2 = accounts
  .flatMap((account) => account.movements)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

console.log(overallBalance2);
*/

// SORTING ARRAYS ///////////////////////////////////////////////////////
/*
// Sorting strings:
const names = ["Shalveena", "Sam", "Frodo", "Hans"];
console.log(names.sort()); // ['Frodo', 'Hans', 'Sam', 'Shalveena']
// Note: sort method mutates the original array:
console.log(names); // ['Frodo', 'Hans', 'Sam', 'Shalveena']

// Sorting numbers:
// Need to provide a call-back function as an argument to the sort method
// If the call-back function returns < 0, A will be sorted before B (keep order as is);
// If the call-back function returns > 0, B will be before A (switch order)

// Ascending order:
account1.movements.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
});
// simplify to:
account1.movements.sort((a, b) => a - b);

console.log(account1.movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

// Descending order:
account1.movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
//simplify to:
account1.movements.sort((a, b) => b - a);

console.log(account1.movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]
*/

// CREATING AND FILLING ARRAYS /////////////////////////////////////
/*
// FILL METHOD

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // [1, 2, 3, 4, 5, 6, 7]

// if you use the new Array constructor and only put in one value as an argument, it will not create an array with only one element with that value. Instead, it will create an empty array with that many empty elements. For example:
const x = new Array(7);
console.log(x); // [empty x 7]
// note: you cannot use any array methods (e.g. map method) on empty arrays made with the array constructor (above).

// Exception: the only method you CAN use is the fill method.

// fill method
// Works like the slice method. The first argument is the value you want to fill. The second argument is the starting position. The third argument is the ending position
// console.log(x.fill(1)); // [1,1,1,1,1,1,1,]

// note: fill method mutates the original array

x.fill(1, 3, 5);
console.log(x); // [empty, empty, empty, 1, 1, empty, empty]
// note: the fill mehtod will stop just before the 5th element.

// can also use the fill method on an existing (and not empty) array:
arr.fill(23, 2, 6);
console.log(arr); // [1, 2, 23, 23, 23, 23, 7]

// Array.from function
// The 'from' method is called on the Array constructor function. We can use it to fill an array programatically. Note: the first argument that the from method receives is the array-like or iterable object that you want to convert to an array; if there is no such object (you're making a brand new array from nothing), then you can just enter the length of the new array as { length: 9 }. The second argument is a callback function that works like the callback function in the map method (it is a map function that gets called one very element of the array).

const y = Array.from({ length: 7 }, () => 1); // for each element, it will return 1 and then make an array of all the returned values (like the map method).
console.log(y); // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (curr, i) => i + 1);
console.log(z); // [1, 2, 3, 4, 5, 6, 7]

// Create an array of 100 random dice rolls:
const randomDiceRoll = Array.from({ length: 100 }, () =>
  Math.ceil(Math.random() * 6)
);
console.log(randomDiceRoll);

// Checking how many 6s are in the array
const sixes = randomDiceRoll.filter((diceRoll) => diceRoll === 6).length;
console.log(sixes); // 18

// Real use-case
// Imagine if the UI displayed all the transactions and amount for each transaction, but the amounts were not captured in an array in the source code anywhere. If we want to calculate the total balance of the account, we first need to get all the different transactions into an array and then calculate the total from there. We can use the Array.from method to create an array from a node-list (which is an array-like structure that results from calling the query selector all method).

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );

  console.log(movementsUI); // [1300, 70, -130, -650, 3000, -400, 450, 200]

  // Note: we can also use the spread operator instead of the Array.from method to change the node list to an array, but then we will need to apply the map method to it as a separate step after that to get the actual transaction value from the element and to remove the Euro sign.
  const movementsUI2 = [...document.querySelectorAll(".movements__value")];
  console.log(movementsUI2);
});
*/

////////////////////CODING CHALLENGES ////////////////////////////

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

// Second try (on later date):
/*
const dogsJulia = [9, 16, 6, 8, 3]; // [3, 5, 2, 12, 7];
const dogsKate = [10, 5, 6, 1, 4]; // [4, 1, 15, 8, 3];

const checkDogs = (dogslist1, dogslist2) => {
  const copyDogsList1 = dogslist1.slice(1, -2);
  copyDogsList1.concat(dogslist2).forEach((dog, i) => {
    dog >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  });
};

console.log(checkDogs(dogsJulia, dogsKate));
*/
/*
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
*/

/*
// Coding Challenge 3:
const calcAverageHumanAge = (dogAgesArr) => {
  const newAges = dogAgesArr
    .map((dogAge) => {
      return dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4;
    })
    .filter((humanAge) => humanAge >= 18)
    .reduce((acc, age, _, arr) => {
      return acc + age / arr.length;
    }, 0);

  console.log(newAges);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

// Array Methods Practice
/*
// Q1. Finding out the total deposits across all bank accounts:

console.log(accounts);

// 1. Get all the transactions in one array
// 2. Filter for only the deposits
// 3. Add up all the deposits

const totalDeposits = accounts
  .flatMap((account) => account.movements)
  .filter((transaction) => transaction > 0)
  .reduce((prev, curr) => prev + curr, 0);

// console.log(totalDeposits); // 25180

// Q2. Find how many deposis there have been in the bank with at least $1000.

// 1. Get all transactions in one array
// 2. Filter for only deposits more than $1000
// 3. Find length of the array

// const depositsOver1000 = accounts
//   .flatMap((account) => account.movements)
//   .filter((trans) => trans > 1000).length;

const depositsOver1000 = accounts
  .flatMap((account) => account.movements)
  .filter((trans) => trans > 1000)
  .reduce((prev, curr) => {
    return prev + 1;
  }, 0);

// console.log(depositsOver1000);

// Q3. Create an object that contains the sum of the deposits and the sum of the withdrawals

const sums = accounts
  .flatMap((account) => account.movements)
  .reduce(
    (prev, curr) => {
      // curr > 0 ? (prev.deposits += curr) : (prev.withdrawals += curr);
      prev[curr > 0 ? "deposits" : "withdrawals"] += curr;
      return prev;
    },
    { deposits: 0, withdrawals: 0 }
  );

// console.log(sums);

// Q4. Create a function to convert any string to title case ("This Is a Nice Title")

const convertToTitleCase = function (string) {
  const exceptions = [
    "and",
    "as",
    "but",
    "for",
    "if",
    "nor",
    "or",
    "so",
    "yet",
    "a",
    "an",
    "the",
    "as",
    "at",
    "by",
    "for",
    "in",
    "of",
    "off",
    "on",
    "per",
    "to",
    "up",
    "via",
  ];

  // change each element into lowercase;
  // put each word of the string into an array
  // if the word is in the exceptions list, don't change it. Otherwise, change the letter into uppercase
  // put it together into a string again
  // change the first letter of the string into uppercase and the rest leave as lowercase

  const capitaliseString = (string) =>
    string[0].toUpperCase() + string.slice(1);

  const titleCaseStr = string
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return exceptions.includes(word) ? word : capitaliseString(word);
    })
    .join(" ");

  return capitaliseString(titleCaseStr);
};

console.log(convertToTitleCase("mindfulness in a minute"));
console.log(convertToTitleCase("peace is every breath"));
console.log(convertToTitleCase("waking up with sam harris"));
console.log(convertToTitleCase("the hobbit"));
*/

// Coding challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.

// check whether the owners of each dog contains "Sarah"
// if it does, check if it is eating too much
// if it is eating too much, log it to the console.

// const isSarahsDogEatingTooMuch = dogs.map((dog) => {
//   if (dog.owners.some((owner) => owner === "Sarah")) {
//     console.log(
//       `Sarah's dog is ${
//         dog.curFood > dog.recommendedFood
//           ? "eating too much"
//           : "eating too little"
//       }`
//     );
//   }
// });

// Alternative solution:
const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));

console.log(
  `Sarah's dog is eating too ${
    sarahsDog.curFood > sarahsDog.recommendedFood ? "too much" : "too little"
  }`
);

// console.log(sarahsDog);

// 3. Create an array containing all owners of dogs who eat too much('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

// create an array of the dog owners who's dogs eat too much.
// flatten the second level array.

const dogsEatingTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((overWeightDog) => overWeightDog.owners);

const dogsEatingTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((underWeightDog) => underWeightDog.owners);

console.log(dogsEatingTooMuch);
console.log(`Dogs who eat too little: ${dogsEatingTooLittle}`);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

const separateDogOwnersNames = function (dogsArray) {
  return dogsArray.join(" and ");
};

console.log(
  `${separateDogOwnersNames(dogsEatingTooMuch)}'s dogs eat too much!`
);
console.log(
  `${separateDogOwnersNames(dogsEatingTooLittle)}'s dogs eat too little!`
);

// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)

console.log(
  `Is there any dog eating exactly the amount of food that is recommended? ${
    dogs.some((dog) => dog.curFood === dog.recommendedFood) ? "Yes" : "No"
  }`
);

// 6. Log to the console whether there is any dog eating an okay amount of food (just true or false). Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion. Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

const checkEatingOkay = (dog) => {
  return (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  );
};

console.log(
  `Is there any dog eating an okay amount of food? ${
    dogs.some(checkEatingOkay) ? "Yes" : "No"
  }`
);

// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
const dogsEatingOkay = dogs.filter(checkEatingOkay);

console.log(dogsEatingOkay);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)

const dogsSortedByRecommendedFood = dogs.slice().sort((a, b) => {
  return a.recommendedFood - b.recommendedFood;
});

console.log(dogsSortedByRecommendedFood);
