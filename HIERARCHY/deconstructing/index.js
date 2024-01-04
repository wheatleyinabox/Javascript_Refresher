// deconstructing -> extract values from arrays & objects
//                   then assign them to variables in a convenient way
//                   [] - to perform array destructuring
//                   {} - to perform object destructuring



// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

// deconstructing = creating an array
[a, b] = [b, a];

console.log(a);
console.log(b);



// ---------- EXAMPLE 2 ----------
// SWAP THE ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);



// ---------- EXAMPLE 4 ----------
// EXTRACT VALUSE FROM OBJECTS

const person1 =
{
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook"
}
const person2 =
{
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

// const {firstName, lastName, age, job} = person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

const {firstName, lastName, age, job="Unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ---------- EXAMPLE 5 ----------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Unemployed"})
{
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);
displayPerson(person1); // will not be "Unemployed"