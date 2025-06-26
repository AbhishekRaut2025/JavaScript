//take a random number between 0-9  and if the number is below 5 then resolve if not reject

var ans = new Promise((res,rej)=>{
    var num = Math.floor(Math.random()*10)
    if(num<5){
        return res();
    }
    else{
        return rej();
    }
})

ans
.then(function(){
    console.log("below");
})
.catch(function(){
    console.log("above")
})