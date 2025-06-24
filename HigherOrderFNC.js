//Higherr Order Function

function abcd(val) {    //Created a fnc and this is a Higherr Order Function
}
abcd(function xyz() { }); //gave parameter a function

//or

function def(value) {            //a function returns a function
    return function pqr() {
    };
}
def();