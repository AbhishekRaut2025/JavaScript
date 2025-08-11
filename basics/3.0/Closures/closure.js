// Closures
// a closure is a function that has access to its own scope, the parent scope and the global
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
console.log(counter);