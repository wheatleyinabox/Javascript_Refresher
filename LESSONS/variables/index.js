// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two Steps:
// 1. Declaration (var, let (var scope), const)
// 2. Assignment (= GETS assignment operator)

// let age; // undefined
// age = 20;

let firstName = "Wheatley";
let age = 20;
let isStudent = true;

age += 1;

console.log("Ello", firstName);
console.log("You are", age, "yrs old");
console.log("Enrolled", isStudent);

// Gets ID from HTML page and links its contents (p) to some text
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old!";
document.getElementById("p3").innerHTML = "Enrolled: " + isStudent;