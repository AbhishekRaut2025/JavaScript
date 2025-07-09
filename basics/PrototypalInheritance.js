var human = {
    canfly: false,
    cantalk: true,
    canwalk: true,
    hasfourlegs: false

}

var person = {
    CanMakeWebsite: true,
    CanMakeAnimations: true,
    CanCode: true
}

person.__proto__ = human;   //person object inherited the properties of human object

console.log(person.canfly);