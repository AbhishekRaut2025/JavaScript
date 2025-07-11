// 1st ceate a element
// 2nd append/prepend karo

let newH1 = document.createElement("h3");          // this create a h1 tag in html
newH1.textContent = "hey, How are you";
document.body.prepend(newH1);                      // this shows our created tag on page


let existingH1 = document.querySelector("h1").textContent;
console.log(existingH1);                                        //Printed existing h1 element in html to console


let divH1 = document.createElement("h2");            //created h2 element
divH1.textContent = "hey 5";                        //added textContent 
document.querySelector("div").appendChild(divH1);        //added it inside div tag/elemennt

