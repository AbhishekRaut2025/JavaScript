let h1 = document.querySelector("h1");

let i = 0;

function printMessage() {
    if (i < 5) {
        h1.textContent = `hello ${i}`
        i++;
        let a = setTimeout(printMessage, 1000); // Call again after 1 sec
    }
}
printMessage();
clearTimeout(a);