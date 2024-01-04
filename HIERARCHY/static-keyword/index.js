// static -> keyword that defines properties or methods that belong
//           to a class itself rather than the objects created
//           from tha class (class owns anything static, not the objects)



// EXAMPLE 1
class MathUtil
{
    static PI = 3.14159;

    static getDiameter(radius)
    {
        return radius * 2;
    }
    static getCircumferenece(radius)
    {
        return 2 * this.PI * radius;
    }
    static getArea(radius)
    {
        return this.PI * radius * radius;
    }
}

// const MathUtil1 = new MathUtil();

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumferenece(10));
console.log(MathUtil.getArea(10));



// EXAMPLE 2
class User
{
    static userCount = 0;

    constructor(username)
    {
        this.username = username;
        User.userCount++;
    }
    
    static getUserCount()
    {
        console.log(`There's ${User.userCount} users online!`);
    }

    sayHello()
    {
        console.log(`Hello! My username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();