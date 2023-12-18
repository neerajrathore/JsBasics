// https://gist.github.com/prof3ssorSt3v3/4d3424cbb30a37133e91eb24467eb218

// constructor function to build other objects 

/**
 * linking prototype objects to build a prototype chain
 * __proto__ vs Object.getPrototypeOf(obj) & Object.setPrototypeOf(obj)
 */

// constructor always get prototype object 

// instance || func we run    ||  obj we get we run new func                       
// obj --> otherProto.prototype --> object.prototype --> null
let OtherProto = function () {
    this.prop1 = 456;
    this.inner = function () {
        console.log("inner called");
    }
}

OtherProto.prototype.someMethod = function () {
    console.log("this is other Proto some method");
}

// line 14 to 23 can also be written as latest ES2015 class
/*class OtherProto {
    constructor() {
        this.prop1 = 456;
        this.inner = function () {
            console.log("inner called");
        };
    }
    someMethod() {
        console.log("this is other Proto some method");
    }
}*/


console.dir(OtherProto.prototype);
console.dir(OtherProto.__proto__);

// functions are special objects of type functions

// new keyword indicates that otherProto is not regular function 
// function gets executed in different way as a constructor function when we use new keyword 
// & make a new object and assign bind the code inside of function to this keyword 
let obj = new OtherProto();
// console.log(obj.prop1); // exist in obj and inner 
// console.log(obj.someMethod()); // otherProto.prototype
// console.log(obj.toString());  // object.prototype

// obj.__proto__ // will give me its prototype
// obj.__proto__.inner() // not work but someMethod will work
Object.getPrototypeOf(obj).someMethod() // this is here otherProto.prototype

// ***** can say obj.__proto__ === Object.getPrototypeOf(obj)


/**************************************/
// 2. alternate method
let protoObj = {
    prop1: 456,
    someMethod: function () {
        console.log("protoObj somemethod");
    }
}
// same let protoObj = new Object() protoObj.proto1 = 456
// protoObj  is an instance not a function so below wont work
// protoObj.prototype.otherSomeMethod = function () {
//     console.log("htis is otherSomeMethod");
// } // not work

protoObj.__proto__.otherSomeMethod = function () {
    console.log("this is otherSomeMethod");
}
// Object.getPrototypeOf(protoObj).otherSomeMethod = function () {
//     console.log("this is otherSomeMethod");
// }
// both will work
console.log(protoObj);


/**************************************/
// 3. childObj --> protoObj --> Object.prototype --> null
let childObj = {};
Object.setPrototypeOf(childObj, protoObj) // setting protoObj prototype of childObj 
// console.log(childObj.proto1, "childObj.prop1");
// console.log(childObj.otherSomeMethod());
// console.log(childObj.noneObjet());   // not exist because it does not exist in chain


/**************************************/
// 4. childObj2 ---> protoObj ---> Object.prototype --> null
let childObj2 = Object.create(protoObj)  // === let childObj = {}; Object.setPrototypeOf(childObj, protoObj) both lines
console.log(childObj2.prop1); // we get value from protoObj
childObj2.prop1 = 777
console.log(childObj2.prop1, childObj2.__proto__.prop1);
childObj2.someMethod();
childObj2.someMethod = function () {
    console.log("childObj someMethod");
}

// so
childObj2.someMethod();
childObj2.__proto__.someMethod()
