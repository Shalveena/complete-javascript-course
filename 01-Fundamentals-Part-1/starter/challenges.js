/*
//Coding Challenge #1

//Store Mark's and John's mass and height in variables
// Data 1
// const weightMark = 78;
// const heightMark = 1.69;

// const weightJohn = 92;
// const heightJohn = 1.95;

// Data 2
const weightMark = 95;
const heightMark = 1.88;

const weightJohn = 85;
const heightJohn = 1.76;

// Calculate their BMI

//Mark's BMI:
const bmiMark = weightMark / heightMark ** 2;
console.log(`Mark's BMI is ${bmiMark}`);
//John's BMI:
const bmiJohn = weightJohn / heightJohn ** 2;
console.log(`John's BMI is ${bmiJohn}`);

// Does Mark have higher BMI that John?
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
*/

/*
//Coding Challenge #2

// Data 1
const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95;

// Data 2
// const weightMark = 95;
// const heightMark = 1.88;

// const weightJohn = 85;
// const heightJohn = 1.76;

// Calculate their BMI

//Mark's BMI:
const bmiMark = weightMark / heightMark ** 2;
//console.log(`Mark's BMI is ${bmiMark}`);

//John's BMI:
const bmiJohn = weightJohn / heightJohn ** 2;
//console.log(`John's BMI is ${bmiJohn}`);

//Compare their BMI using if/else statement:
if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher than John's!");
} else if (bmiMark < bmiJohn) {
  console.log("John's BMI is higher than Mark's!");
} else {
  console.log("Mark and John have the exact same BMI!");
}

//Use template literals instead:
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else if (bmiMark < bmiJohn) {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
} else {
  console.log(`Mark and John have the exact same BMI ${bmiJohn}!`);
}
*/
