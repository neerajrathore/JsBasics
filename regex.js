// let testStr = "hello"
let testStr = "382849"
var words = ['hello', 'hi', 'howdy'];

let regex = new RegExp("[0-9][0-9]{2,4}")

// let regex = new RegExp(words.join("|"))
console.log(regex, regex.test(testStr));

var o = { 
    a: {value:1}, 
    b: {value:2}, 
    c: {value:3} 
};

console.log(Object.keys(o)); // gives an array of keys
//Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

let data = ['a', 'b', 'c'].reduce(function (first, second, third, forouth) {
    console.log(first, second, third, forouth);
    return first ;
}, 0);

// console.log(data);