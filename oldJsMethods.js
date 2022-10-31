var a = 5;
console.log(a);
// console.log(b);
function ds () {
    let b = 23;
    console.log(a);
}
ds();
// console.log("dwdwdscc");

// // closure first example 
// let data = "hellp"

// function test () {
//     console.log(data);
// }

// test()

// data = "dont hellp"

// test() 

// closure second test

function outer (outerValue) {
    return function inner (innerValue) {
        console.log("outer", outerValue);
        console.log("inner", innerValue);
    }
}

const newFunc = outer("hello");
// even though outer done being executing but js **remenbers** the hello passed in outer function
console.log(outervalue);
newFunc("bye");
// console.log(newFunc());

//**********************

let fetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("received data");
    }, 5000)
})

function outerPromise (text) {
    fetch.then((text) => {
        console.log("dwdwd", text);
    })
}
outerPromise("some data");
console.log("wdwdwd");


// calbacks 
// passing a func now but calling it later after some action
// best example is time out 
function printString(){
    console.log("Tom"); 
    setTimeout(function()  { console.log("Jacob"); }, 300); 
   console.log("Mark")
 }
 
 printString();



// this 
// refers to the context in whic it is being used
// console.log(this)

const object = {
    a: 5,
    b: 7
}

const thisFunction = function(c, d) {
    return this.a + this.b + c + d;
}
const result = thisFunction.call(object, 12, 4);
console.log(result);
//will return 28
// thisFunction.apply(object, [3, 6]);
//will return 21

// for bind 
// const object = {a: 2, b:3, c:6};
// const thisFunction = function() {
//  return this.a + this.b + this.c;
// }
// bind methodboind the object to functionand whenwvwer we execute resuly function it gives the result
const bindFunction = thisFunction.bind(object);
bindFunction(); //will return 11