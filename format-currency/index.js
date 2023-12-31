// toLocaleString() -> returns a str with a language
//                     sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale'  -> specify that language (undefinded = default set in browser)
// 'options' -> object with formatting options

let myNum = 123456.789;
let myPer = 0.5;
let myTemp = 32;

// myNum = myNum.toLocaleString("en-US"); // US English
// myNum = myNum.toLocaleString("hi-IN"); // Hindi
// myNum = myNum.toLocaleString("de-DE"); // Standard German

//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); // Dollars
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); // Rupees
myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"}); // Euros
console.log(myNum);

myPer = myPer.toLocaleString(undefined, {style: "percent"});
console.log(myPer);

myTemp = myTemp.toLocaleString(undefined, {style: "unit", unit: "celsius"});
console.log(myTemp);