// ask user a number and print weather each number from 1 to that number is weather even or odd
var a = prompt("Enter a number :");
for(let i = 1;i<=a;i++){
    if (i%2==0){
        console.log(`${i} is even number.`)
    }
    else{
        console.log(`${i} is odd number.`)
    }
}