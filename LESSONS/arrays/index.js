// arrays (for syntax reasons)
// cons of knowning multiple langs D:

let fruits = ["apple", "orange", "banana", "coconut"];

// fruits[3] = "coconut";
// can add an index by initializing it as an existing index
// OR...
// fruits.push("peach");
// fruits.pop();
// fruits.unshift("mango"); // adds element onto beginning of array
// fruits.shift(); // removes first element

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length;
// let index1 = fruits.indexOf("apple");
// let index2 = fruits.indexOf("orange");
// let index3 = fruits.indexOf("banana");
// if index = -1, element not found
// console.log(numOfFruits);

// in order
// for (let i = 0; i > fruits.length; i++)
// {
//     console.log(fruits[i]);
// }
// in reverse
// for (let i = fruits.length - 1; i >= 0; i--)
// {
//     console.log(fruits[i]);
// }

fruits.sort().reverse();
// sort -> sort A-Z
// sort().reverse() -> reverse sort Z-A

// enhanced for loop
for (let f of fruits)
{
    console.log(f);
}
