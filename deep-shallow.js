// prototype is a class that current object can take methods of
// primitive data types

// when we make a copy of then it is a real copy
let a = 5;
let b = a;
b = 7
console.log(a, b);  //5 , 7

// now composite data types oject and arrays(object under the hood)

// these values are only created when instantiated and assigning a var is just pointer to that
let c  = {
    type: "lunch",
    foods: {
        dinner: "roti"
    },
    drink: {
        liquid: "pani"
    }
}
let d = c  // copy pointer 
d.type = "breakfast"
console.log(c.type, d.type); // breakdast // breakfast // this is shallow copy

let e = {...c}
e.type = "breakfast"
console.log(c.type, e.type); // lunch // breakfast

// To make a deep copy of nested objects
let f = {...c, foods: {...c.foods}, drink: {...c.drink}} // this will replace certain objects

// rambaan
let g = JSON.parse(JSON.stringify(c))
// parse changes JSON string to JS Object
let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';
// JSON.parse(userStr) {name: 'Sammy', email: 'sammy@example.com', plan: 'Pro'}

// stringify chnages JS Object to JSON string
let userObj = { name: "Sammy", email: "sammy@example.com", plan: "Pro" };
// JSON.stringify(userObj) {"name":"Sammy","email":"sammy@example.com","plan":"Pro"}

// for arrays 
let h = [1, 2, 3]
let i = [...h]
i[2] = 5
console.log(h[2], i[2]); //2   //5 

let j = h.map(el => el) // [1, 2, 3]
// h.slice(1, 2) 

// good counter class
class Counter {
    constructor() {
       this.count = 5
    }
    copy() {
      const copy = new Counter()
      copy.count = this.count
      return copy
    }
  }
  const originalCounter = new Counter()
  const copiedCounter = originalCounter.copy()
  console.log(originalCounter.count) // 5
  console.log(copiedCounter.count) // 5
  copiedCounter.count = 7
  console.log(originalCounter.count) // 5
  console.log(copiedCounter.count) // 7


