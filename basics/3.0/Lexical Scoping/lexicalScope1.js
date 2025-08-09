// Lexical Scoping

function abcd(){
    let a = 10;
    function xyz(){
        a = 100;
        console.log(a);
    }
    xyz();
}

abcd();