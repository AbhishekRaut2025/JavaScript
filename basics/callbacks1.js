function sum(callback, a, b){
    let result = a + b;
    callback(result);
}

function showResult (result){
    console.log(result);
}

sum(showResult,10,20);