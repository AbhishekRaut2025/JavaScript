// session storage is storing data in users browser 
// data wll remain stored in browser untill we manually remove it
// here we are doing following operations
// store data       .setItem("","")
// fetch data       .getItem("")
// update data      .setItem("","")
// remove data      .removeItem("")

 localStorage.setItem("name","Abhishek");               // stored data in browser

 let val = localStorage.getItem("name");               // get stored data from browser

 localStorage.setItem("name","Aditya");               // update stored data from browser

 localStorage.removeItem("name");               // remove stored data from browser

