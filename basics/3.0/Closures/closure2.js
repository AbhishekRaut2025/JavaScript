// closures
function abcd(){
    let a = 10;
    return function(){
        console.log(a);
    }
}
let b = abcd();
b();