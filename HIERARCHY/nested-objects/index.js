// nested object -> Objects inside of other Objects
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCar{Keyboard{}, Mouse{}, Monitor{}}



// EXAMPLE 1
const person = 
{
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: 
    {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);

console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.country);
for (const property in person.address)
{
    console.log(person.address[property]);
}



// EXAMPLE 2
class Person
{
    constructor(name, age, ...address)
    {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address
{
    constructor(street, city, country)
    {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, 
                           "124 Conch St.", "Bikini Bottom", "Int. Water");
const person2 = new Person("Patrick", 37, 
                           "128 Conch St.", "Bikini Bottom", "Int. Water");
const person3 = new Person("Squidward", 45, 
                           "126 Conch St.", "Bikini Bottom", "Int. Water");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

console.log(person2.name);
console.log(person2.age);
console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.country);

console.log(person3.name);
console.log(person3.age);
console.log(person3.address.street);
console.log(person3.address.city);
console.log(person3.address.country);