// this -> reference to the object THIS is used
//         (the object depends on the immidate context)
//         person.name = this.name

// this DOESN'T WORK with arrow function!



// EXAMPLE 1
const person1 = 
{
    name: "Spongebob",
    favFood: "Krabby Patties",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = 
{
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();



// EXAMPLE 2
console.log(this);