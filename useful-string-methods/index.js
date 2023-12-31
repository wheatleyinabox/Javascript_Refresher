// useful string properties & methods

let username = "   wheatleyinabox   ";
let phoneNumber = "123-456-7890";

let userLength = username.length;
console.log(userLength);

let fifthLetter = username.charAt(4);
console.log(fifthLetter);

let indexOfY = username.indexOf("y");
console.log(indexOfY);

let lastIndexOfA = username.lastIndexOf("a");
console.log(lastIndexOfA);

username = username.trim(); // removes whitespace
console.log(username);

username = username.toUpperCase();
console.log(username);

username = username.toLowerCase();
console.log(username);

phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);