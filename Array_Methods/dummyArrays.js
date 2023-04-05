let myColor = ["Red", "Green", "White", "Black"]
const myNumbers = [1, 2, 3, 4];

// export default myColor // used in node package where package file is presenet. 
// import export only known by node {"type": "module"} need to added in package file 
module.exports = myNumbers
// module.exports = function myLogger() {
//     console.log(myNumbers, myColor);
//   }
