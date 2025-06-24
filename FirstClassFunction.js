function abcd(fnc) {        //functions that are teated as variables or normal values are called First class functions
    let result = 10;
    fnc(result);

}       

abcd(function (value) {
    console.log(value);
})