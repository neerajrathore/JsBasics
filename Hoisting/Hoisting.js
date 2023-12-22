var x; // Declare x
x = 5; // Assign 5 to x or initialize x

var y = 7; // Initialize y NOT Hoisted
//only the declaration (var y), not the initialization (=7) is hoisted to the top scope of function .
a = 10 
let a // Uncaught ReferenceError: Cannot access 'a' before initialization
console.log("1", a);

// Variables defined with ***** let and const **** are hoisted to the top of the block, but not initialized.

function checkHoisting() {
    // console.log("2", a);
    let a = 20
    a++
    console.log("3", a);
    if(true) {
         a = 30
        console.log("4", a);
    }
    console.log("5", a);
}

checkHoisting()

console.log("6", a);
