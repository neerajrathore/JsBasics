console.log("getters");

let obj = {
    get propNmae() {
        console.log("executed");
    },
    set propNmae(value) {
        console.log(value);
    }
}

obj['propNmae'] // call get to get value
let value = 5
obj.propNmae = value // call set to set value
// obj.propNmae(4)