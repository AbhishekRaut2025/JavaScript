//callback is always a function
// callback works when async code is executed
// in js , we can't execute async code directly, we need to use callbacks or promises or async/await
// a callback function is passef as an argument to another function and it tipicaly executed after some operation is completed
function hello(callback){
    setTimeout(function (){
        console.log("hello");
        callback();
    },3000)
}
function bye(){
    console.log("bye");
}
hello(bye);