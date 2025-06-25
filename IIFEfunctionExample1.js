var ans = (function abcd() {     //created iife
    var PrivetVal = 10;         //this is a privet value due to iife type function and you cannot access it outside the function
    return {                     //hence we cannot accrss the variable we return it in form of object
        getter: function () {      //key-value pair in object
            console.log(PrivetVal);
        },
        setter: function (value) {
            PrivetVal = value;
        }
    }
})();

ans.getter();
ans.setter(20);
ans.getter();