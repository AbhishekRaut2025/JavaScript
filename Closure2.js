// Write a function that returns another function. When the inner function is called, it should greet the given name.
function creategreeter(name) {

    function greeter() {
        console.log("Hello ", name);
    }
    return greeter;
}
let caallName = creategreeter("Abhishek");
caallName();