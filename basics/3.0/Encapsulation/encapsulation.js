// Encapsulation
// Encapsulation is also known as data hiding. It is a concept in object-oriented programming (OOP) that binds together
// encapsulation is done using closures
// a closure is a function that has access to its own scope, the parent scope and the global

function clickLimiter(){
    let click = 0;
    return function(){
        if(click < 5){
            click++;
            console.log(`clicked ${click} times.`);
        }
        else{
            console.log("Limit ecxcedded");
        }
    }  
}

let getclick = clickLimiter();
getclick();
getclick();
getclick();
getclick();
getclick();
getclick();

// here click is a encapsulated variable, it is not accessible from outside the function.