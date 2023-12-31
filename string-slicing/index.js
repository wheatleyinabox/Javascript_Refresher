// slice() extracts a section of a string
//          and returns it as a new string
//          (substring)

let fullName = "Snoop Dogg";
let firstName, lastName;

// lastName = fullName.slice(8);
// console.log(lastName);

// firstName = fullName.slice(0, 8)
// console.log(firstName);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);