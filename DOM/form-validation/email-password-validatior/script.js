let form = document.querySelector("#loginForm");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

form.addEventListener("submit", function (details) {
    details.preventDefault();

    // email validation
    const emailValue = email.value.trim();
    if (!emailRegex.test(emailValue)) {
        document.querySelector("#emailError").style.display = "initial";
    }
    else {
        document.querySelector("#emailError").style.display = "none";
    }

    // password validation
    const passwordValue = password.value.trim();
    if (!passwordRegex.test(passwordValue)) {
        document.querySelector("#passwordError").style.display = "initial";
    }
    else {
        document.querySelector("#passwordError").style.display = "none";
    }
})


// live validation
email.addEventListener("input", function () {
    const value = email.value.trim();
    if (emailRegex.test(value)) {
        document.querySelector("#emailError").style.display = "none";
    } else {
        document.querySelector("#emailError").style.display = "initial";
    }
});

password.addEventListener("input", function () {
    const value = password.value.trim();
    if (passwordRegex.test(value)) {
        document.querySelector("#passwordError").style.display = "none";
    } else {
        document.querySelector("#passwordError").style.display = "initial";
    }
});