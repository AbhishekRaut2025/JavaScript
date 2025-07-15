let h1 = document.querySelector("h1");

window.addEventListener("keydown", function (details) {
    if (details.key === " ") {
        console.log("space");
        h1.textContent = "space"
    }
    else {
        h1.textContent = details.key;
        console.log(details.key);
    }

})