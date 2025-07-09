// clossure examples

function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log("Count : ", count)
    }
    return inner;
}

let counter = outer();
counter();
counter();
counter();
counter();
counter();