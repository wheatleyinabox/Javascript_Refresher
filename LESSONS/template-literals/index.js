// template literals -> delimited with (`)
//                      instead of " " or ' '
//                      allows embedded variables & expressions 

let username = "WheatleyInABox";
let items = 3;
let total = 91;

// console.log("Hello", username);
// console.log("You have", items, "items in your cart.");
// console.log("Your total is $", total);

// console.log(`Hello ${username}`);
// console.log(`You have ${items} items in your cart.`);
// console.log(`Your total is $${total}`);

let text = 
`Hello ${username}<br>
You have ${items} items in your cart.<br>
Your total is $${total}<br>`;

//console.log(text);
document.getElementById("myLabel").innerHTML = text;