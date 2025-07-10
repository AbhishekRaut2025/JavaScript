let a = document.querySelector("a");
console.dir(a);
a.href = "https://www.google.com"          //changed attribute of 'a' tag to goole.com
// another way to do this 
a.setAttribute("href","https://www.youtube.com");   //attribute changed to youtue.com

// manipulating the img tag attribute
let img = document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1751640295309-d807c9bf7282?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
