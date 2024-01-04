// sort -> method used to sort elements of an array in place.
//         Sorts elements as strings in lexicographic order, not alphabetical
//         lexicographic = (alphabet + numbers + symbols) as strings



// EXAMPLE 1
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();
console.log(fruits);

let numbers = [1, 10, 2, 9, 3, 8, 6, 4, 7, 5];
numbers.sort((a, b) => a - b); // numerical order
console.log(numbers);
numbers.sort((a, b) => b - a); // reverse-numerical order
console.log(numbers);



// EXAMPLE 2
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 30, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

// people.sort((a, b) => a.age - b.age); // youngest to oldest
// console.log(people);
// people.sort((a, b) => b.age - a.age); // oldest to youngest
// console.log(people);

// people.sort((a, b) => a.gpa - b.gpa); // lowest to highest gpa
// console.log(people);
// people.sort((a, b) => b.gpa - a.gpa); // highest to lowest gpa
// console.log(people);

// people.sort((a, b) => a.name.localeCompare(b.name)); // lexicographic order
// console.log(people);
people.sort((a, b) => b.name.localeCompare(a.name)); // reverse-lexicographic order
console.log(people);

