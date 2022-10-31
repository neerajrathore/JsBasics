// calling generater to get its object
// and then calling next on it

function* add() {
    const num = yield;
    yield 2 + num
    yield 4 + num
}

let generater = add()
console.log(generater.next());
console.log(generater.next(2));
console.log(generater.next(2));


let array = [1, 2, 4]
console.log(typeof(array.keys())); 


// making object as iterable object
const obj = {
    a: 5, 
    b: 3,
    c: 11
}

// uski dot methods uske symbol constructor me milegi
obj[Symbol.iterator] =  function () {
    const ordered = Object.values(this).sort((a, b) => a-b)
    // console.log(ordered, Object.values(this));
    let i = 0;
    return {
        next: () => ({
            done: i >= ordered.length,
            value: ordered[i++]
          })
    }
}

console.log("this is obj", {obj});

for (const v of obj) {
    // console.log(v);
  }

// console.log([...obj]);


