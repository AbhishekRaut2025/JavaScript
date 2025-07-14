// input event listener is when a user gives input may bi in input box it triggers an event

let userInput = document.querySelector("input");
userInput.addEventListener("input", function(details){         //we can accept data from the event to this function
        // console.log(details.data);                          //print this input data to console
        if(details.data !== null){                             //when wedo backspace in input field is considers it as null    
            console.log(details.data);                         //and prints to console to avoid that we set a condition
        }
}) 