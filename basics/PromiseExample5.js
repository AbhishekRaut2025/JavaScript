// build a promise waterfall
// go to city  - find the cake shop - go to the cake shop - buy the cake - go home - cut the cake - eat the cake

var ans = new Promise((resolve, reject) => {
    return resolve('go to city');
});

var w1 = ans.then((data)=>{
    console.log(data);
    return new Promise((resolve, reject) => {
        return resolve('find the cake shop');
    });
});

var w2 = w1.then((data)=>{
    console.log(data);
    return new Promise((resolve, reject)=>{
        return resolve('go to the cake shop');
    });
});

var w3 = w2.then((data)=>{
    console.log(data);
    return new Promise((resolve, reject)=>{
        return resolve('buy the cake');
    });
});

var w4 = w3.then((data)=>{
    console.log(data);
    return new Promise((resolve, reject)=>{
        return resolve('go home');
    });
})

var w5 = w4.then((data)=>{
    console.log(data);
    return new Promise((resolve, reject)=>{
        return resolve('cut the cake');
    });
});

var w6 = w5.then((data)=>{
    console.log(data);
    return new Promise((resolve, reject)=>{
        return resolve('eat the cake');
    });
});

var w7 = w6.then((data)=>{
    console.log(data);
});