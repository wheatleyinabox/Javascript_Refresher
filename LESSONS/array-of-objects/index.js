const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

// console.log(fruits[0].name);
// console.log(fruits[1].name);
// console.log(fruits[2].name);
// console.log(fruits[3].name);
// console.log(fruits[4].name);

// console.log(fruits[0].calories);
// console.log(fruits[1].calories);
// console.log(fruits[2].calories);
// console.log(fruits[3].calories);
// console.log(fruits[4].calories);

// fruits.push({name: "grapes", color: "purple", calories: "62"});
// fruits.pop();
// fruits.splice(1, 2);
console.log(fruits);

// ---------- .forEach() ----------
// fruits.forEach(fruit => console.log(fruit));
// fruits.forEach(fruit => console.log(fruit.name));
// fruits.forEach(fruit => console.log(fruit.color));
// fruits.forEach(fruit => console.log(fruit.calories));

// ---------- .map() ----------
const fruitNames = fruits.map(fruit => fruit.name);
// console.log(fruitNames);

const fruitColors = fruits.map(fruit => fruit.color);
// console.log(fruitColors);

const fruitCalories = fruits.map(fruit => fruit.calories);
// console.log(fruitCalories);

// ---------- .filter() ----------
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
console.log(highCalFruits);

// ---------- .reduce() ----------
const maxFruit = fruits.reduce( (max, fruit) => 
                                (fruit.calories > max.calories ? 
                                fruit : max));

const minFruit = fruits.reduce( (max, fruit) => 
                                (fruit.calories < max.calories ? 
                                fruit : max));

console.log(maxFruit);
console.log(minFruit);