// rest parameters -> (...rest) allow a function to work with a variable
//                    number of arguments by bundling them into array

// spread -> expands an array into seperate elements
// rest => bundles seperate elements into an array



// EXAMPLE 1
function openFridge(...foods)
{
    console.log(...foods);
}

function getFood(...foods)
{
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1);
openFridge(food1, food2);
openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);



// EXAMPLE 2
function sum(...numbers)
{
    let result = 0;
    for (let n of numbers)
    {
        result += n;
    }
    return result;
}

function getAverage(...numbers)
{
    let result = 0;
    for (let n of numbers)
    {
        result += n;
    }
    return result / numbers.length;
}

let total = sum(1, 2, 3, 4, 5);
console.log(`Your total is $${total}`);

total = getAverage(75, 100, 85, 90, 50);
console.log(`The average is ${total}`);



// EXAMPLE 3
function combineStrings(...strings)
{
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);