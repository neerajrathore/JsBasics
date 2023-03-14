let array = require('./dummyArrays')

// console.log(array);

function someFunction(data, data1, data2) {
    
    
    console.log({ data, data1, data2 });
    return data === 3
}

// The reduce() method executes a reducer function for array element.
let res = array.some(someFunction)

console.log(res);