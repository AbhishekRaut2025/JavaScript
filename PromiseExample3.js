//Take the rice
//Rinse the rice
//put rice into the pressure coocker
//rice is getting coocked
//takeout the rice
//eat the rice
var ans = new Promise (function(res,rej){
    return res("Take the rice");
})
var P2 = ans.then(function(data){
    console.log(data);
    return new Promise (function(res,rej){
        return res ("Rinse the rice");
    })
})
var P3 = P2.then(function(data){
    console.log(data);
    return new Promise (function(res,rej){
        return res ("Put rice into thr pressure coocker");
    })
})
var P4 = P3.then(function(data){
    console.log(data);
    return new Promise (function(res,rej){
        return res ("Rice is getting coocked");
    })
})
var P5 = P4.then(function(data){
    console.log(data);
    return new Promise (function(res,rej){
        return res ("Takeout the rice");
    })
})
var P6 = P5.then(function(data){
    console.log(data);
    return new Promise (function(res,rej){
        return res ("Eat the rice");
    })
})
P6.then(function(data){
    console.log(data);
})