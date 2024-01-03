// .reduce() -> reduce the elements of an array
//              to a single value

// EXAMPLE 1
const prices = [5, 30.23, 10, 25.12, 15, 20];

const total = prices.reduce(toSum);
console.log(`$${total.toFixed(2)}`);

function toSum(accumulator, element) // (previous, next)
{
    return accumulator + element;
    // 5 + 30.23 = 35.23
    // 35.23 + 10 = 45.23
    // 45.23 + 25.12 = 70.35
    // ...
    // until not element is left and value is returned
}



// EXAMPLE 2
const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
console.log(maximum);

const minimum = grades.reduce(getMin);
console.log(minimum);

function getMax(accumulator, element)
{
    return Math.max(accumulator, element);
}

function getMin(accumulator, element)
{
    return Math.min(accumulator, element);
}

