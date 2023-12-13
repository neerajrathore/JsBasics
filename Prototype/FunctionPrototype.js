function Cat() {
    // constructor 
}

log(Cat.prototype); 
//Output {constructor: ƒ Cat()}

log(Cat.prototype.__proto__) 
// this gives same result Object prototype
/* {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
1.  constructor: ƒ Object()
2.  hasOwnProperty: ƒ hasOwnProperty()
3.  isPrototypeOf: ƒ isPrototypeOf()
4.  propertyIsEnumerable: ƒ propertyIsEnumerable()
5.  toLocaleString: ƒ toLocaleString()
6.  toString: ƒ toString()
7.  valueOf: ƒ valueOf()
8.  __defineGetter__: ƒ __defineGetter__()
9.  __defineSetter__: ƒ __defineSetter__()
10.  __lookupGetter__: ƒ __lookupGetter__()
11.  __lookupSetter__: ƒ __lookupSetter__()
12.  __proto__: (...)
13.  get __proto__: ƒ __proto__()
14.  set __proto__: ƒ __proto__() */


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
