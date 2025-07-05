let arr = [13,1,84,69,54,100];

arr.reverse();          //this will reverse the array
console.log(arr);


let SortedArray = arr.sort(function(a,b){       //.sort is used to sort the array. this always takes a function 
    return a-b;                                 //(a,b) are fixed parameters and we need to return them 
    console.log(arr);                           //a-b returns sorted array in ascending form
})                                              //b-a returns sorted array in descending form
console.log(SortedArray);