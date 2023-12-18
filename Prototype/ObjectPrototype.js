// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// Every object in JavaScript has a built-in property, which is called its prototype
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
// The chain ends when we reach a prototype that has null for its own prototype.

const log = console.log

let myObj = {};  // same as let myObj = new Object()
log(myObj.constructor)  // ƒ () { [native code] }

log(myObj.toString())
//Output ("[object Object]"); the method toString()belongs to the prototype of the object myObj

log(myObj.__proto__)
log(Object.getPrototypeOf(myObj))
// both same result 
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



log(myObj.__proto__ === myObj.constructor.prototype) // both are pointing to prototype object of constructor

