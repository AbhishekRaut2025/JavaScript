function abcd(v1 = 0, v2 = 0) {
    console.log(v1, v2);
}
abcd();
//Here default values of parameters are initialized as 0
//so when we call a function without any argument then parameters use these default values insted of undefined
//and when we pass argument values those values are used