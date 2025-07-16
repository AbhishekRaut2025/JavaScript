let nm = document.querySelector("#name");
let form = document.querySelector("form");
let email = document.querySelector("#email")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (details) {
    details.preventDefault();

    // name validation
    if (nm.value.length <= 2) {
        document.querySelector("#smallName").style.display = "initial";

    } else {
        document.querySelector("#smallName").style.display = "none"
    }

    // email validation
    // to verify email we use regex language
    const emailvalue = email.value.trim();
    if (!emailRegex.test(emailvalue)) {
        document.querySelector("#validEmail").style.display = "initial";
    } else {
        document.querySelector("#validEmail").style.display = "none";
    }



})
