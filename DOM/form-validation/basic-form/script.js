let nm = document.querySelector("#name");
let form = document.querySelector("form");
// console.log(nm);
form.addEventListener("submit", function (details) {
    details.preventDefault();
    if (nm.value.length <= 2) {
        document.querySelector("#smallName").style.display = "initial";

    } else {
        document.querySelector("#smallName").style.display = "none"
    }
})