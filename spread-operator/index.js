// spread operator -> ...
//                    allows an iterable, such as an
//                    array or string, to be expanded
//                    into seperate elements
//                    (unpacks the elements)

let numbers = [1,2,3,4,5];
// let maximum = Math.max(numbers);
// Doesn't work, can't place directly

let maximum = Math.max(...numbers);
// using ... to unpack all elements and using said numbers
console.log(maximum);

let minimum = Math.min(...numbers);
// using ... to unpack all elements and using said numbers
console.log(minimum);

let username = "WheatleyInABox";
let letters = [...username].join("-"); // puts input inbetween each char
console.log(letters);
// unpacks each char in string and displays chars

let fruits = ["apple", "orange", "banana"];
let veggies = ["carrots", "celery", "potatoes"];

let newFruits = [...fruits]; // creates shallow copy (diff data structure, same data)
let foods = [...fruits, ...veggies, "eggs", "milk"]; // combines arrays, can add other elements (in declaration?)

console.log(fruits);
console.log(newFruits);
console.log(foods);
