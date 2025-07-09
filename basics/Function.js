var a = 1;
let b = -1;
const c = 5;
function abcd(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return (a + b + c);

    }
    else if (a == 0 || b == 0 || c == 0) {
        return ("Entered value is 0")
    }
    else {

        return ("please entre valid value");
    }

}
console.log(abcd(a, b, c));