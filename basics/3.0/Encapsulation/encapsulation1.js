// Encapsulation
function counter(data){
    let count = 0;
    return function (){
        count += data;
        console.log(count);
    }
}

let startCounter = counter(10);
startCounter();
startCounter();
startCounter();
startCounter();
startCounter();