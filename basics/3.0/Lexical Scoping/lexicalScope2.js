// lexival Scope
let a = 12;

function first(){
    console.log(a); 
}

function second(){
    let a = 15;     //for first function this a does not exist because of lexical scoping
    first();        //first function is called here, 
}

second();
// Here output will be 12