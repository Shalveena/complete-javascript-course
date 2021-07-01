// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "cels",
    //C. Fix the bug
    value: Number(prompt("Degrees celcius")),
  };

  // B. Find the bug
  console.log(measurement);

  // console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A. Identify the buy
console.log(measureKelvin());
*/

//USING A DEBUGGER
/*
const calcTemAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTemAmplitudeBug([3, 5, 1], [9, 4, 5]);

//A. Identify bug
console.log(amplitudeBug);
*/
