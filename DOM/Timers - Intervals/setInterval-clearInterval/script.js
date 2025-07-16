let h1 = document.querySelector("h1");

let i = 0;
let intervalId = setInterval(() => {
  h1.textContent = `hello ${i}`
  i++;
  if (i >= 5) {
    clearInterval(intervalId);
  }
}, 1000);
clearInterval(intervalId);