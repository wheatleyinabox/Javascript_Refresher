// element selectors -> Methods used to target & manipulate HTML elements
//                      They allow you to select one or multiple HTML elements
//                      from the DOM (Document Object Model)



// 1. document.getElementById();        // return element or null
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);



// 2. document.getElementsClassName();  // return html collection (array kinda)
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

// fruits[0].style.backgroundColor = "yellow";

// no built-in forEach()
for (let f of fruits)
{
    f.style.backgroundColor = "yellow";
}
// OR...
Array.from(fruits).forEach(fruit => 
{
    fruit.style.backgroundColor = "yellow";
});



// 3. document.getElementsByTagName();  // return html collection (array kinda)
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
console.log(h4Elements);

h4Elements[0].style.backgroundColor = "yellow";
h4Elements[1].style.backgroundColor = "yellow";
// OR...
for (let h4 of h4Elements)
{
    h4.style.backgroundColor = "yellow";
}
// OR... 
Array.from(h4Elements).forEach(h4 => 
    {
        h4.style.backgroundColor = "yellow";
    });

for (let li of liElements)
{
    li.style.backgroundColor = "lightgreen";
}
// OR...
Array.from(liElements).forEach(li => 
    {
        li.style.backgroundColor = "lightgreen";
    });


    
// 4. document.querySelector();         // return first matched element or null
const element = document.querySelector(".fruits"); // class or tag name
element.style.backgroundColor = "lightblue";

console.log(element);



// 5. document.querySelectorAll();      // return nodelist
const foods = document.querySelectorAll("li");
foods[0].style.backgroundColor = "red";
foods.forEach(food => 
    {
        food.style.backgroundColor = "purple"
    });
console.log(foods);