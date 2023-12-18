// persuading someone to do something by using force or threats.

// console.log(3>2>1);

// first 3>2 gets evaluated which is true
//  a type hint of number is passed so true is converted to a number.
// Number(true) > Number(1)
// => 1 > 1
// => false

// There is another syntax for creating a function that is called a Function Expression.

// It allows us to create a new function in the middle of any expression.

// For example:


    // let sayHi = function() {
    //     alert( "Hello" );
    // };
// Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }.

// As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.

// Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.

// Here we immediately assign it to the variable, so the meaning of these code samples is the same: "create a function and put it into the variable sayHi".


let array = [1, 2, 3 ,[4, 5]]
let aray = []
array.map((ele, index) => {
    if(ele.length != 0){

        aray = [...array[index]]
    }
})
console.log(array, aray);

// this creates object map and we acces a key in onject like obj[key] gives value on that key
let count = {}
let array = [1, 1, 2, 3, 4, 5, 5, 6, 5]
for (let i = 0; i < array.length; i++) {
    let num = array[i]
    count[num] = count[num] ? count[num] + 1 : 1
}
 
console.log(count, "count");  // {"1": 2,"2": 1,"3": 1,"4": 1,"5": 3,"6": 1}
