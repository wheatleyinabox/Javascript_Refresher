// objects - a collection of related properties and/or methods
//           Can represent real world objects (people, products, places)

//           object = {key:value,
//                     function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log("Hi! I'm Spongebob!"),
    sayBye: () => console.log("Goodbye!"),
    eat: () => console.log("I'm eating a Krabby Patty!")
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey I'm Patrick..."),
    sayBye: () => console.log("Bye..."),
    eat: () => console.log("I'm eating roast beef, chicken, and pizza.")
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayBye();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayBye();
person2.eat();