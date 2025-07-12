// here we are chabging css using JS


let firstH1 = document.querySelector("h1");
firstH1.classList.add("abcd");                      //adds class to element so all the properties of that class are applied to that element 
console.log(firstH1);
// firstH1.style.backgroundColor = "pink";
// firstH1.style.fontFamily = "Arial";
// firstH1.style.color = "red"                     // changed colour   
// firstH1.style.textTransform = "capitalize";

let firstH2 = document.querySelector("h2");
firstH2.style.color = "orange"
firstH2.classList.remove("xyz");                // removed class of the element

firstH2.classList.toggle("pqr");                //if element has a class then it removes it or if element dont have any class then add the
console.dir(firstH2);