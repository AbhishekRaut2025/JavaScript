// when clicked detected in text first it turns into red then after 1 secod delay it turns into blue 
let h1 = document.querySelector("h1");
h1.addEventListener("click",function(){
    h1.style.color = "red"
})
h1.addEventListener("click", function () {
  setTimeout(function() {
    h1.style.color = "blue";
  }, 1000);                                     // delay 1 second
}); 