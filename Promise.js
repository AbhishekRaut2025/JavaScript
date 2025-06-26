var ans = new Promise ((res,rej)=>{
    if(false){
        return res();
    }
    else{
        return rej();
    }
});

ans
.then(function(){;
    console.log("resolved");
})
.catch(function(){
    console.log("rejected");
});       