'use strict';

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
