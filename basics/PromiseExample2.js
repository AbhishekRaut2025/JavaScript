//Promise Waterfall
var ans = new Promise(function (res, rej) {
    return res("get home")
})
var p2 = ans.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("open the gate")
    })
})
var p3 = p2.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("cook the food")
    })
})
var p4 = p3.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("eat the food")
    })
})
var p5 = p4.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("sleep")
    })
})
var last = p5.then(function (data) {
    console.log(data)
})