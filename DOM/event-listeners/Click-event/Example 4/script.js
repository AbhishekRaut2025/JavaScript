// add eventListener that when you click on text the background color changes

let paragraph = document.querySelector("p");
paragraph.style.fontSize = "5rem"
paragraph.style.fontStyle = "italic"
paragraph.style.fontFamily = "Arial, Helvetica, sans-serif"

let body = document.querySelector("body");
let isPink = false;

paragraph.addEventListener("click", function () {
    if (isPink) {
        body.style.backgroundColor = "white";
    }
    else {
        body.style.backgroundColor = "pink";
    }
    isPink = !isPink;
})