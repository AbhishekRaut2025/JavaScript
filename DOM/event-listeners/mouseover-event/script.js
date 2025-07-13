// add hover effect like when you hover on text it turns into pink and back into black when mouse moved out

let eventOne = document.querySelector("h1");
eventOne.style.fontSize = "5rem";
eventOne.style.fontFamily = "arial";

eventOne.addEventListener("mouseover",function(){
    eventOne.style.color = "pink";
});

let eventTwo = document.querySelector("h1");
eventTwo.addEventListener("mouseout",function(){
    eventTwo.style.color = "black";
});