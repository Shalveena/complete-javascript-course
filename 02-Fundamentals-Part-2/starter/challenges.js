"use strict";

// Coding Challenge #1
/*
//1. Create arrow function to calculate average of three values
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

//2. Use the function to calculate the average for both teams;
//Data 1:
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

//3. Create "checkWinner" function to log the winner to the console together with the victory points. A team only wins if it has at least double the avg score of the other team.
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`There is no winner`);
  }
};

//4. Call "checkWinner" to determine winner
checkWinner(avgDolphins, avgKoalas);

//Using test Data 2
//Data 2;
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
*/

// Coding Challenge #2
/*
//1. Write a function 'calcTip'. Tip 15% if the bill value is between 50 and 300, otherwise 20%.
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(calcTip(100));

//2. Create an array 'bills' containing the test data
const bills = [125, 555, 44];
console.log(bills);

//3. Create an array 'tips' containing the tip for each bill using the calcTip function
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

//4. Bonus: Create an array 'total' containing the total values, so the bill + tip
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

// Coding Challenge #3
/*

// 1. Create an object for Mark and one for John
// 2. Create a calcBMI method on each object to calculate BMI. Store the BMI to a property and return it from the method.

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = (this.weight / this.height ** 2).toFixed(2);
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = (this.weight / this.height ** 2).toFixed(2);
    return this.BMI;
  },
};

//3. Log to the console who has higher BMI. E.g. "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)"

mark.calcBMI();
console.log(mark.BMI);
john.calcBMI();
console.log(john.BMI);

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.BMI}). )`
  );
} else {
  console.log(
    `${john.firstName} ${john.lastName}'s BMI (${john.BMI} is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}). )`
  );
}
*/

// Coding Challenge #4:
/*

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let bill = 0; bill < bills.length; bill++) {
  const tip = calcTip(bills[bill]);
  tips.push(tip);
  totals.push(tip + bills[bill]);
}

console.log(tips);
console.log(totals);

// This function calculates the average of all numbers in the given array.
const calcAverage = (arr) => {
  let sum = 0;

  //how will you get one number from the array?
  // arr[0] + arr[1] + arr[2] .... arr[9]
  // let sum = 0
  // sum = sum + arr[i]

  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }

  // console.log(sum);

  const average = sum / arr.length;
  return average;
};

//Testing whether the calcAverage function works:
// const test = [1, 2, 3];

// console.log(calcAverage(test));

console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
