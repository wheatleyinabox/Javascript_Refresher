// class -> (ES6 feature) provides a more structured and cleaner way to
//          work with objects compared to traditional constructor functions
//          Ex. static keyword, encapsulation, inheritance

class Product
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }

    displayProduct()
    {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax)
    {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();
let total = product1.calculateTotal(salesTax);
console.log(`Total Price (with tax): $${total.toFixed(2)}`);

product2.displayProduct();
total = product2.calculateTotal(salesTax);
console.log(`Total Price (with tax): $${total.toFixed(2)}`);

product3.displayProduct();
total = product3.calculateTotal(salesTax);
console.log(`Total Price (with tax): $${total.toFixed(2)}`);
