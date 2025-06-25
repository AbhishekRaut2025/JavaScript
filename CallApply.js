function abcd (val1,val2,val3){
    console.log(this.age,val1,val2,val3);          //In the function the default value of "this" keyword is window
}

var obj = {
    age : 23
}
abcd.call(obj,4,5,6);     //Used .call to call function and gave argument a object, so now "this" keyword points to the obj
abcd.apply(obj,[1,2,3]);  //.apply syntax is first argument for "this" keyword, then other arguments to be passed in array for parameters in function