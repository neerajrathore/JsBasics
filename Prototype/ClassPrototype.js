class xyz {
    constructor(name) {
        this.name = name;
    }
}

const data = new xyz("neeraj")
console.log(data.__proto__);
console.log(Object.getPrototypeOf(data));

// Do not do object.prototype or edit object prototype

//edit your own prototype 
xyz.prototype.addSomeMethod = () => {}  // this will add this method to prototype
xyz.prototype.grades = "A"

let x1 = new xyz("neeraj")

console.log(x1, "x111");
