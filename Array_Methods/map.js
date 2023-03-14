// ********************
// do practise on manipulating data important )))))))))

// import myColor from './dummyArray'

// Returns a new array with the results of calling a provided function on every element in this array.
let array = require('./dummyArrays')

let nestedArray = [
    [
        [
            {
                id: 1,
                name: "neeraj",

            },
            undefined
        ],
        undefined,
    ],
    undefined
]
let fsfs
let data = nestedArray.map((data1)=> {
    console.log(data1, "data1");
    // data will undefined if we dont return here
    // return(
        fsfs =  data1?.map((data2) => {
            console.log(data2, "data2");
            return {
                id: data2,
                name: "neeraj"
            }
        })
    // )
})

console.log(nestedArray, "nestedArraynestedArraynestedArraynestedArray");


// let datwda =  nestedArray.filter((eke) => {
//     return eke != undefined 
// })
// console.log(datwda, "nestedArray");
console.log("fsfs", fsfs);
console.log("data", data);

function callbackFunc (el, index , fullArray) {
    // console.log({el, index , fullArray});
    return el*4
}

// let newArray = array.map(callbackFunc)
let newArray = array.map((el) => el*2) // agar {} lga diya toh return krna pdega return el*2
// () => { } alwyays retrurns something
// it does not change existing array

console.log(array, newArray);

// console.log(data);