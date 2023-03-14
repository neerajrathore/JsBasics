let array = require('./dummyArrays')

function callbackFunc (el, index , fullArray) {
    console.log({el, index , fullArray});
    return el != 2
}
//Returns a new array with all elements that pass the test implemented by the provided function.
newArray =  array.filter(callbackFunc)

console.log(array, newArray);
