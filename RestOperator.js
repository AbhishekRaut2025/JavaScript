function addition(...value) {
    console.log(value);
}
addition(1, 2, 3, 4, 5);
// rest operator turns a normal functions into dynamic functions.
// any count of arguments can be passed
// rest operator will store those values in array

function abcd(a,b,c,...value){
    console.log(a,b,c,value);
}
abcd(1,2,3,4,5,6,7);