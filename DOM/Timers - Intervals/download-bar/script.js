let progressText = document.querySelector("span");
let button = document.querySelector("#startBtn");
let progressBar = document.querySelector(".progress");
let h2 = document.querySelector("h2");

button.addEventListener("click", function () {
    let count = 0;
    progressBar.style.width = "0%";
    progressText.textContent = "0%";
    let interval = setInterval(function () {
        if (count <= 100) {
            progressText.textContent = `${count} %`
            progressBar.style.width = `${count}%`

            count++;
        } else {
            h2.textContent = "Download Finished"
            clearInterval(interval);
        }
    }, 300)
})