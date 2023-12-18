// business / checkNumber logic
function checkNumber(number) {
    if (isNaN(number) || number < 0) {
        // throw "not a valid number" // throw automatically redirect to catch. an't find a catch, the program will simply terminate
        return new Error("not valid please")  // Error is a built-in JavaScript object
    }
    else {
        return true
    }
}

// user Input
window.addEventListener("load", function () {
    console.log("loaded");
    document.getElementById("myform").addEventListener("submit", (event) => {
        event.preventDefault();
        // document.getElementById("number").addEventListener("keyup", (e) => {
        //     // comment <form> in html to stop reloading hit enter
        // e.preventDefault();
        // console.log(e);

        const inputtedNumber = parseInt(document.querySelector('#number').value);

        // document.querySelector('#number').value = null;
        try {
            // checkNumber(inputtedNumber)  // works with only throw in line 7

            // another way 
            const isNumberValid = checkNumber(inputtedNumber)
            console.log(isNumberValid instanceof Error, "instance of error"); // true or false 

            console.log(Object.getPrototypeOf(isNumberValid))
            /*{
                constructor: ƒ Error()
                message: ""
                name: "Error"
                toString: ƒ toString()
                [[Prototype]]: Object
            }*/

            console.log(Object.getPrototypeOf(isNumberValid).__proto__, Object.getPrototypeOf(new Object));
            // both same result 
            /* {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
            1.  constructor: ƒ Object()
            2.  hasOwnProperty: ƒ hasOwnProperty()
            3.  isPrototypeOf: ƒ isPrototypeOf()
            4.  propertyIsEnumerable: ƒ propertyIsEnumerable()
            5.  toLocaleString: ƒ toLocaleString()
            6.  toString: ƒ toString()
            7.  valueOf: ƒ valueOf()
            8.  __defineGetter__: ƒ __defineGetter__()
            9.  __defineSetter__: ƒ __defineSetter__()
            10.  __lookupGetter__: ƒ __lookupGetter__()
            11.  __lookupSetter__: ƒ __lookupSetter__()
            12.  __proto__: (...)
            13.  get __proto__: ƒ __proto__()
            14.  set __proto__: ƒ __proto__() */

            if (isNumberValid instanceof Error) {
                //The instanceof operator is specifically used to check the type of a JavaScript object.
                // It does this by looking at the prototype chain of the object wow
                console.error(isNumberValid.message);
                throw RangeError("Not a valid number!");
            }
            else {
                console.log("Try was successful, so no need to catch!");
                document.querySelector('#displayNumber').innerText = "This number is valid";
            }
        }
        catch (error) {
            console.error(error, "catchError");
        }
    })

    //play with events like input, keyup, keydown, blur a lot more and check their events log.
    document.getElementById("number").addEventListener('blur', (event) => {
        console.log(event, "input");
    })

    // "end" will log immediately after "loaded" logged cause addEventListener is kind of offloaded to browser.
    // Browser API is handled by browsers that doesn't have to do anything with js execution and when 
    // browser catches event it sends a callback.
    console.log("end");
})
