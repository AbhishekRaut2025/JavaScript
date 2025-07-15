let btn = document.querySelector("#btn");
let fileInput = document.querySelector("#fileInput");
btn.addEventListener("click", function () {
    fileInput.click();
})
fileInput.addEventListener("change", function (details) {
    console.log(details);
    const file = details.target.files[0];
    if (file) {
        btn.textContent = file.name;
    }
})