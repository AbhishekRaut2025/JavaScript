// Select a link and update its href to point to https://www.sheryians.com

let aTag = document.querySelector("a");
aTag.textContent = "sheryians coding school"
aTag.setAttribute("href","https://www.sheryians.com/");
console.log(aTag);