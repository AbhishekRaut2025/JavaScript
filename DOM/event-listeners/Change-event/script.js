let h3 = document.querySelector("h3");
let sel = document.querySelector("select");
sel.addEventListener("change", function(details){
    h3.textContent = `${details.target.value} device selected`;
})