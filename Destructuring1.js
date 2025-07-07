// Destructuring Objects
let car = {
    fuel: "Petrol",
    colour: "white",
    brand: "tata",
    price: "10L",
    model: "SUV"
}

// traditional way
// let colour = car.colour;
// let price = car.price;
// let brand = car.brand;

// Using destructuring
let { colour, brand, price } = car;
console.log(colour);
console.log(brand);
console.log(price);