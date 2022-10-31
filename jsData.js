// // js is scripting language that runs using interpreter
// // other languages like c++ java compiles first that runs in executable binary form
// // vars and scope
// var a = 5; 
// // let and const
// console.log(a);
// // console.log(b);
// function ds () {
//     let b = 23;
//     console.log(a);
// }
// ds();

//********************************** */
// this 
// refers to the context in whic it is being used
// console.log(this)

// const object = {
//     a: 5,
//     b: 7
// }
// // console.log(this);
// const thisFunction = function(c, d) {
//     console.log(this);
//     return this.a + this.b + c + d;
// }
// const result = thisFunction.call(object, 12, 4);
// console.log(result);
// thisFunction()

// thisFunction.apply(object, [3, 6]);


// // for bind 
// const object = {a: 2, b:3, c:6};
// const thisFunction = function() {
//  return this.a + this.b + this.c;
// }
// // bind methodboind the object to functionand whenwvwer we execute resuly function it gives the result
// const bindFunction = thisFunction.bind(object);
// console.log(bindFunction);
// bindFunction(); 


// //****************************** */

// //closure 
// 1st example *****************************
// const plusOne = ( () => {
//     var counter = 0;
//     return function () {
//         counter = counter + 1
//         return counter
//     }
      
//   }) ()

//   plusOne();
// plusOne();
// console.log(plusOne()); // Will print 3


// This is called a JavaScript closure. It makes it possible for a function to have “private” variables

// ************************ this is another example

// // it go with most recent value of the variable 
// // function inside another function
function outer (outerValue) {
    return function inner (innerValue) {
        console.log("outer", outerValue);
        console.log("inner", innerValue);
    }
}

const newFunc = outer("hello");
// even though outer done being executing but js **remenbers** the hello passed in outer function
// console.log(outervalue);
// console.log("wdwdwdwd");
newFunc("bye");

// //*********************************** */

// // callbacks
// // passing function as argument in another function
// setTimeout(function() {
//     console.log("callback called");
// }, 2000)

// //*********************************** */
// // promise 
// // to make asynchronous code 
// let fetch = new Promise((resolve, reject) => {
//     console.log('some api called');
//     setTimeout(() => {
//         resolve("received data");
//     }, 3000)
// })

// fetch
// .then((data) => {
//     console.log(data);
// }).catch(()=> {
//     console.log("error");
// }).finally(() => {
//     console.log("always called"); // always called 
// })



// +++++++++++++++

// function first () {
//     two()
//     function two () { 
//         console.log("wfw");
//         three();
//         function three () {
//             console.log("edefe");
//         }
//      } 
// }

// first()
