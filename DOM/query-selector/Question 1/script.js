// Select all li elements and print theit text using loop

let lis = document.querySelectorAll("li");
lis.forEach(function(val){                  //Printed all tectContent of li elements to console using forEach loop
    console.log(val.textContent);
})
//same by using for loop
for(let i = 0; i<lis.length;i++){
    console.log(lis[i].textContent);
}