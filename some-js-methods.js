let string = ["hello" ,"howdy"]
console.log(string.includes("hello"))


// some method
// const str1 = 'hi hello, how do you do?';
// const str2 = 'regular string';
// const str3 = 'hello there';

// const conditions = ["hello", "hi", "howdy"];

// const test1 = conditions.some(el => str1.includes(el));
// //some returns true if in the array it finds an element for which the provided funtion returns true
// const test2 = conditions.some(el => str2.includes(el));
// // strictly check that contains 1 and only one match
// const test3 = conditions.reduce((a,c) => a + str3.includes(c), 0) == 1;

// // display results
// console.log(`Loose matching, 2 matches "${str1}" => ${test1}`);
// console.log(`Loose matching, 0 matches "${str2}" => ${test2}`);
// console.log(`Exact matching, 1 matches "${str3}" => ${test3}`);


// via regex matching
let str = "hellpo2"
// var value = /hello|hi|howdy/.test(str);
//********* */
var words = ['hello', 'hi', 'howdy'];
var value = new RegExp(words.join('|')).test(str);

//********** */
// var str = 'hilly';
// var value = str.includes('hi'); //true, even though the word 'hi' isn't found
// var value = /\bhi\b/.test(str); //false - 'hi' appears but not as its own word

console.log(value);

//********* */
// new map
let map = new Map();
map.set("name", "neeraj");
let fName = map.get("name")
console.log(fName);
let iterator =  map.entries()
// iterator.forEach((item) => {
//     console.log(item);
// })

//******************************************** */
//filter methods
 const  readOnlyColumn = data => {
    if (false) {
      return {
        displayOnly: true,
        editor: null,
        ...data
      }
    }
    return {
      data,
      editor: null,
      displayOnly: true
    // readOnly: true
    }
  };
let func = (...col) => {
    console.log(col);
    col.map(readOnlyColumn)
    return col
}
let data = func(
    {
        data: 'nearCcy',
        title: 'Near Leg Client Rate',
        dataType: 'string',
        hidden: true
      },
      {
        data: 'notionalLeg2',
        title: 'Amount Near Leg CCY2 ',
        dataType: 'string',
        hidden: true
      },
      {
        data: '',
        title: '',
        dataType: 'string',
      },
      {
        data: 'expiryDateLeg2',
        title: 'Far Leg Date',
        dataType: 'string',
        
      },
      {
        data: 'farCcy',
        title: 'Near Leg Client Rate',
        dataType: 'string',
        hidden: true
      },
      {
        data: 'notional2',
        title: 'Amount Far Leg CCY2 ',
        dataType: 'string',
        hidden: true
      },
    )
    
    console.log(data);

    let data2  = data.filter((field) => {
        return field.data !=  "notional2" && field.data !=  "farCcy" && field.data != ""
    })
    console.log(data2);