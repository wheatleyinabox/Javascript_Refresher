// inheritance -> allows a new class to inherit properties & methods
//                from an existing class (parent -> child)
//                helps with code reusability

// D.R.Y. -> Don't repeat yourself :O

// EXAMPLE 1
class Animal
{
    alive = true;

    eat()
    {
        console.log(`This ${this.name} is eating...`);
    }
    sleep()
    {
        console.log(`This ${this.name} is sleeping... z z Z`);
    }
}

class Rabbit extends Animal
{
    static name = "Rabbit";

    run()
    {
        console.log(`This ${this.name} is running!`);
    }
}
class Fish extends Animal
{
    static name = "Fish";

    swim()
    {
        console.log(`This ${this.name} is swimming!`);
    }
}
class Hawk extends Animal
{
    static name = "Hawk";

    fly()
    {
        console.log(`This ${this.name} is flying!`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();