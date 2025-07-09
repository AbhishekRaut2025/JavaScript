function CircleButton(colour){
    this.radius= 2;
    this.colour= colour;
    this.presseble= true;
    this.icon = false;    
}

var RedButton = new CircleButton("red");
var GreenButton = new CircleButton("green");

console.log(RedButton,GreenButton);
//console.log(GreenButton);