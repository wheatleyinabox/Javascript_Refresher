// function declaration -> define a reusable block of code
//                         that performs a specific task
// function hello()
// {
//     console.log("Hello!");
// }

// function expressions -> a way to define functions as
//                         values or variables

// EXAMPLE 1
const hello = function()
{
    console.log("Hello!");
}
hello();

// callback, time in ms
setTimeout(function()
{
    console.log("Hello!");
}, 3000);



// EXAMPLE 2
const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square); // replace 'square' with entire function!

const squares = numbers.map(function(element)
{
    return Math.pow(element, 2);
});
const cube = numbers.map(function(element)
{
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element)
{
    return element % 2 === 0;
});
const oddNums = numbers.filter(function(element)
{
    return element % 2 !== 0;
});

const total = numbers.reduce(function(accumlator, element)
{
    return accumlator + element;
});

console.log(squares);
console.log(cube);
console.log(evenNums);
console.log(oddNums);
console.log(total);