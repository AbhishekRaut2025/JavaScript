// Array methods

let arr = [1,2,3,4,5,6];
console.log(arr);
arr.push(7);            //adds element to last 
console.log(arr);

arr.pop();              //removes last element from array
console.log(arr);


arr.splice(2,1)         //removes the element fron given co-ordinates in this case (2,1) from 2nd index and 1 index ahed
console.log(arr);


arr.shift();            //removes element from beginning ie from 0th index
console.log(arr);

arr.unshift(0);         //adds element to the beginning of array ie at 0th index
console.log(arr);


arr.slice(0,2);         //keeps elements between given index in this case (0,2) and delete other elements
console.log(arr);       //so here elements fron 0th index to 2nd index are saved and others removed