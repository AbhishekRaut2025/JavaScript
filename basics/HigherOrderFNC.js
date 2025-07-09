//Higherr Order Function

function abcd(val) {    //Created a fnc and this is a Higherr Order Function
    let a = 10;
    val(a);
}
abcd(function(value) {       //gave parameter a function
    console.log(value);
}); 
    

//or

function def(val) {            //a function returns a function
    return function pqr(extra) {
        console.log(extra);
    };
}
const InnerFunction = def(10);
InnerFunction(50);