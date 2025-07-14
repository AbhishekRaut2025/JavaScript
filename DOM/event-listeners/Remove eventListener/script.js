// remove eventListener of a element that alreadt has an eventListener
let paragraph = document.querySelector("p");

function DoubleClick() {                                 //created a function to make paragraph red
    paragraph.style.color = "red";
}

paragraph.addEventListener("dblclick", DoubleClick)     //passed the above function here insted of creating function here

paragraph.removeEventListener("dblclick", DoubleClick)  //to remove eventListener we have to pass same function that ue used to add event