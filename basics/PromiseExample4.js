var ans = new Promise((res,rej)=>{
    if(!true){
        return res();
    }
    else{
        return rej();
    }
})

ans.then(function(){
    console.log("Resolved");
})
ans.catch(function(){
    console.log("Rejected")
})