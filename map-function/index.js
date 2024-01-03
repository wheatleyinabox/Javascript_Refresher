// .map() -> accepts a callback & applies that function
//        to each element of an array
//        AND RETURNS A NEW ARRAY



// EXAMPLE 1
const numbers = [1, 2, 3, 4, 5];

// squares each element and returns an
// array, so you need to put it in a 
// variable to display
const squares = numbers.map(cube);
console.log(squares);

function square(element)
{
    return Math.pow(element, 2)
}

function cube(element)
{
    return Math.pow(element, 3)
}



// EXAMPLE 2
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const studentUpper = students.map(uppercase);
console.log(studentUpper);

function uppercase(element)
{
    return element.toUpperCase();
}
function lowercase(element)
{
    return element.toLowerCase();
}



// EXAMPLE 3
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element)
{
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}