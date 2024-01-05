// eventListener -> Listens for specific events to create interactive webpages
//                  events: click, mouseover, mouseout
//                  .addEventListener(event, callback)

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

console.log(event); // prints Event object

myButton.addEventListener("click", (event) => 
{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 😣";
});

myButton.addEventListener("mouseover", (event) => 
{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 🤨";
});

myButton.addEventListener("mouseout", (event) => 
{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me! 😙";
});