//https://www.debuggex.com/

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
 
let log = console.log
let str = "ninjaa"
// finds for ninja in string and return true 
let regex = /[ng]inja/
log(regex.test(str)) 

let regex2 = /[abc123]000/
log(regex2.test("a000"))  //b000, c000, 1000, 2000, 3000 works  

let regex3 = /[^p]000/
log(regex3.test("v000")) // all a000, z000 except p000

let regex4 = /[^pez]000/
log(regex4.test("a000")) // all a000, bbb000, abc000 except pez000 ppp000, p000 in any order p, e, z not allowed

let regex5 = /[a-z]000/
log(regex5.test("acsdssdsdssss000")) //  s000 match

let regex6 = /[a-z][0-9]000/
log(regex6.test("acsdssdsdssss9000")) //  s9000 match

// we handle character single by single in regex by multiplying our condition below ->

let regex7 = /[a-z][0-9]+000/     // + matches this at least one time to unlimited times
log(regex7.test("acsdssdsdssss9999000")) //  s9999000 match 

let regex8 = /[a-z][0-9]+000{1,}/     // + matches this at least one time to unlimited times
log(regex8.test("acsdssdsdssss9999000a1000")) //  s9999000 match  also matched a2004000  0-9 kitne bhi time and 000 at least one time

let regex9 = /[a-z][0-9]+001{3}/     
log(regex9.test("a100111")) //  last char 3 times matches

// /d = [0-9]
// /w = [a-z, A-Z, 0-9, 's]
// /s = space and tab
// /t = matches tab only
