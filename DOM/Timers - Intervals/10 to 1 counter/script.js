let count = 10;

let counter = setInterval(function () {
    if (count >= 1) {
        console.log(count);
        count--;
    } else {
        clearInterval(counter);
    }
}, 1000)