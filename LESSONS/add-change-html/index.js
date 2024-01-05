// EXAMPLE 1 <h1>
// 1. Create the element
const newH1 = document.createElement("h1");
// 2. Add attributes/properties
newH1.textContent = "I like pizza :D";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
// 3. Append element to DOM
document.body.append(newH1);  // after everything
document.body.prepend(newH1); // before everything
document.getElementById("box1").append(newH1); // last child of box1
document.getElementById("box1").prepend(newH1); // first child of box1

// between box1 & box2
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);

// if box has no ID
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[4]); // index 0-4

// Remove HTML element (based on where it is)
// if in body
document.body.removeChild(newH1);

// if in box1
// document.getElementById("box1").removeChild(newH1);



// EXAMPLE 2 <li>
const newListItem = document.createElement("li");

newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

document.body.append(newListItem);
document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").prepend(newListItem);

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[2]);

// document.body.removeChild(newListItem);
document.getElementById("fruits").removeChild(newListItem);