// array operation 

// map
/// it helps to create new array by performing operation on old array
// const numbers1 = [45, 4, 9, 16, 25];
// // const numbers2 = numbers1.map(myFunction);
// const numbers2 = numbers1.map((value, index, array) => {
//     return value * 2;
// });

// function myFunction(value, index, array) {
//   return value * 2;
// }

// console.log(numbers2, numbers1);

//******** */
// filter 
//The filter() method creates a new array with array elements that passes a test.

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(numbers, over18);

//
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(numbers, someOver18);

let array = Array.from("ABCDEFG");
console.log(array);
let iterator = numbers.entries()

console.dir(iterator.next()) 

// array spread operater 
function fun(...args) {
    console.log(args);
}
fun(1, 2, 3)
// it automaticalluy putes them into array 


