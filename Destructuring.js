// Destructuring in arry

let arr = [1,2,3,4,5];

//beow is traditional way to assign arry elemrnts to distinct variable
// let a = arr[0];
// let b = arr[1];

// but with the help of destructurin assignment we can do this in more efficient way
let [a,b] = arr;      //in this way the element will be assigned from the biginning of the array
console.log(a,b); 

//using rest operator
let [c,d,...rest] = arr;    // this will first element to c, 2nd to the d and remaining all to rest 
console.log(c,d,rest);

//we can skip elements using blank space 
let [e,f, , ,g] = arr;
console.log(e,f,g);