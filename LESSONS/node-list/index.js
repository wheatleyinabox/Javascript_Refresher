// NodeList -> Static collection of HTML elements by (id, class, element)
//             Can be created by using querySelectorAll()

//             Similar to an array, but no (map, filter, reduce)
//             Has forEach()!

//             NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

// Add HTML/CSS Properties
// buttons.forEach((button) => 
// {
//     button.style.backgroundColor = "green";
//     button.textContent += " :D";
// });

// Click Event Listener
// buttons.forEach((button) => 
// {
//     button.addEventListener("click", (event) => 
//     {
//         event.target.style.backgroundColor = "tomato";
//     });
// });

// mouseover & mouseout
// buttons.forEach((button) => 
// {
//     button.addEventListener("mouseover", (event) => 
//     {
//         event.target.style.backgroundColor = "hsl(182, 25%, 50%)";
//     });
// });

// buttons.forEach((button) => 
// {
//     button.addEventListener("mouseover", (event) => 
//     {
//         event.target.style.backgroundColor = "hsl(182, 25%, 40%)";
//     });
// });

// buttons.forEach((button) => 
// {
//     button.addEventListener("mouseout", (event) => 
//     {
//         event.target.style.backgroundColor = "hsl(182, 25%, 60%)";
//     });
// });

// Add an element
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

console.log(buttons); // Isn't displayed in the NodeList
// Would need to manually update NodeList

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

// Remove an element
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});