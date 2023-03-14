let array = require('./dummyArrays')

// console.log(array);

function reducerFunction(data, data1, data2) {
    console.log({ data, data1, data2 });
}

// The reduce() method executes a reducer function for array element.
array.reduce(reducerFunction)














// function x () {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y
// }

// var z = x();
// console.log(z);
// z();

