// session storage is storing data in users browser 
// data wll be deleted once tab/browser closes
// store data       .setItem("","")
// fetch data       .getItem("")
// update data      .setItem("","")
// remove data      .removeItem("")

 sessionStorage.setItem("name","Abhishek");               // stored data in browser

 let val = sessionStorage.getItem("name");               // get stored data from browser

 sessionStorage.setItem("name","Aditya");               // update stored data from browser

sessionStorage.removeItem("name");               // remove stored data from browser

