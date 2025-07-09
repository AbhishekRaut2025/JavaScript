// DESTRUCTURING with operators
let arr = [1, 2, 3, 4, 5];
let phone = {
    model: "Iphone",
    brand: "Apple",
    price: "42k",
    colour: "Black"
}

// with spread(...) syntax/operator we can convert array into object
let obj1 = { ...arr };
console.log(obj1);


// for function
function sum(v1, v2, v3) {
    let z = v1 + v2 + v3;
    return z;
}
let a = sum(...arr);
console.log(a)

    
//we can use spread operator to print whole object
console.log({ ...phone })