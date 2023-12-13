// https://2ality.com/2015/02/es6-scoping.html

// let and const are not initialized

// var is initialized when it declared

// when let and const reaches declaration its value get set or undefined

let tmp; // tmp is initialized with undefined

// if you enter new scope{} the tdz starts

// var are function scoped variable
// let const are block spaced

function func() {
  if (true) {
      let tmp = 123;
  }
  console.log(tmp); // ReferenceError: tmp is not defined
}

function func() {
  if (true) {
      var tmp = 123;
  }
  console.log(tmp); // 123
}

function func() {
  let foo = 5;
  if (true) {
     let foo = 10; // shadows outer `foo`
     console.log(foo); // 10
  }
  console.log(foo); // 5
}

if (true) { // enter new scope, TDZ starts

  // Uninitialized binding for `tmp` is created
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ ends, `tmp` is initialized with `undefined`
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
