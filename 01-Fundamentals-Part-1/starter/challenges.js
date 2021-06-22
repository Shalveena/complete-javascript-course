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
console.log(`Mark's BMI for Data 1 is ${bmiMark}`);
//John's BMI for Data 1:
const bmiJohn = weightJohn / heightJohn ** 2;
console.log(`John's BMI for Data 1 is ${bmiJohn}`);

// Does Mark have higher BMI that John?
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
