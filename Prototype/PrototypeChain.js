const log = console.log

let myObj = {};  // same as let myObj = new Object()
log(myObj.constructor)  // ƒ () { [native code] }
log(myObj.__proto__)

log(myObj.__proto__ === myObj.constructor.prototype) // both are pointing to prototype object of constructor


// 2nd example 
function Cat() {
    // constructor 
}
// __proto__ = next thing up in prototype chain

let kitty = new Cat();   // proto points to 
// log(kitty)
// log(kitty.constructor.prototype)   // ƒ () { [native code] }
// log(kitty.__proto__ === Cat.prototype)  // true
// log(kitty.__proto__ === kitty.constructor.prototype)  // true
// // Cat === kitty.constructor

// log(kitty.__proto__.__proto__ === myObj.__proto__ === Object.prototype) /// these are same 

// console.dir(Object.__proto__)  // this is anonymus strange!

// log(Object.prototype.__proto__)

// Object is function so prototype will exist not __proto__ but Object.prototype is object so __proto__ will exist in it
// function ka __proto__ nhi hota prototype hota h

// ************ 3. create Animal object, prototype of Cat Object 

function Animal () {}   // Cat should go to Animal 

Object.setPrototypeOf(Cat.prototype, Animal.prototype)
log(kitty.__proto__)  // Cat {}
log(kitty.__proto__.__proto__)  // Animal {}
log(kitty.__proto__.__proto__.__proto__)  // Object {}
log(kitty.__proto__.__proto__.__proto__.__proto__)  // null
