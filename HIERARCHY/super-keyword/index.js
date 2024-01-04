// super -> keyword is used in classes to call the constructor or
//          access the properties & methods of a parent (super class)

//          this = this object
//          super = the parent



// EXAMPLE 1
class Animal
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    move(speed)
    {
        console.log(`The ${this.name} moves at a speed of ${speed}mph!`);
    }
}
class Rabbit extends Animal
{
    constructor(name, age, runSpeed)
    {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run()
    {
        console.log(`${this.name} can run!`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal
{
    constructor(name, age, swimSpeed)
    {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim()
    {
        console.log(`${this.name} can swim!`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal
{
    constructor(name, age, flightSpeed)
    {
        super(name, age);
        this.flightSpeed = flightSpeed;
    }
    fly()
    {
        console.log(`${this.name} can fly!`);
        super.move(this.flightSpeed);
    }
}

const rabbit = new Rabbit("Bugs Bunny", 1, 25);
const fish = new Fish("Nemo", 2, 12);
const hawk = new Hawk("Charlie", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flightSpeed);
hawk.fly();