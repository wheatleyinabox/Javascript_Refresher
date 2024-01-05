// DOM Navigation -> The prcoess of navigating through the structure
//                   of an HTML document using Javascript



// .firstElementChild
const element1 = document.getElementById("fruits"); // ex. veggies, desserts
const firstChild = element1.firstElementChild;
firstChild.style.backgroundColor = "yellow";

// OR...

const ulElements1 = document.querySelectorAll("ul");
ulElements1.forEach(ul => {
    const firstChild = ul.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});



// .lastELementChild
const element2 = document.getElementById("fruits");
const lastChild = element2.lastElementChild;
lastChild.style.backgroundColor = "lightblue";

// OR.. 

const ulElements2 = document.querySelectorAll("ul");
ulElements2.forEach(ul => {
    const lastChild = ul.lastElementChild;
    lastChild.style.backgroundColor = "lightblue";
});


// .nextElementSibling
const element3 = document.getElementById("cake");
// apple -> orange  |   carrots -> onions   |   cake -> pie
// orange -> banana |   onions -> potatoes  |   pie -> ice cream

// fruits -> veggies
// veggies -> desserts
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "lightgreen";



// .previousElementSibling
const element4 = document.getElementById("potatoes");
// banana -> orange | potatoes -> onions  | ice cream -> pie
// orange -> apple  | onions -> carrots   | pie -> cake

// desserts -> veggies
// veggies -> fruits
const prevSibling = element4.previousElementSibling;
prevSibling.style.backgroundColor = "pink";



// .parentElement
const element5 = document.getElementById("apple");
// apple, orange, banana -> fruits
// carrots, onions, potatoes -> veggies
// cake, pie, ice cream -> desserts
const parent = element5.parentElement;
parent.style.backgroundColor = "tomato";



// .children
const element6 = document.getElementById("desserts");
const children = element6.children;
// fruits -> apple, orange, banana
// veggies -> carrots, onions, potatoes
// desserts -> cake, pie, ice cream
console.log(children);

Array.from(children).forEach(child => {
    child.style.backgroundColor = "lightgray";
});