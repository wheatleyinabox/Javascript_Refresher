// Type Conversion: change the datatype of a value to another
//                  (strings, numbers, booleans)

let age = window.prompt("How old are you?"); // 20

console.log(typeof age); // string
age = Number(age);
console.log(typeof age); // number
age += 1;

console.log("Happy Birthday! You're are", age, "years old!");
// first output: "Happy Birthday! You're are 201 years old!"
// second output: "Happy Birthday! You're are 21 years old!"

let x;
let y;
let z;

x = Number("3.14"); // if Number("pizza") -> console.log prints NaN
y = String(3.14);
z = Boolean("pizza"); // if empty OR false = false: else true;

console.log(x, typeof x); // 3.14 'number'
console.log(y, typeof y); // 3.14 string

console.log(z, typeof z); // false 'boolean'
                          // true 'boolean'

//**** === -> strict equality operator (compare if values & datatypr are equal)