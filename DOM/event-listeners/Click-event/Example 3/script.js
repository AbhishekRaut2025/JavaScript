let paragraph = document.querySelector("p");
let isOrange = false;
paragraph.addEventListener("click", function () {
    if (isOrange) {
        paragraph.style.color = "black";
    }
    else {
        paragraph.style.color = "orange"
    }
    isOrange = !isOrange;
});