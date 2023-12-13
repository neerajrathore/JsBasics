// With async wait, the execution of a function stops when it witnesses the await statement 
// and moves out of the function until the async process is completed. 
// Whereas with promise, the execution continues in the same function, 
// it just skips the promise statement until the async process is completed.

const tempPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("2")
    }, 3000)
})

// if i wrap it with function and return a promise from there then i use like function name and ()

function withPromise() {
    console.log("1");
    tempPromise.then(x => console.log("2")).catch() // it offload this task and continue further execution
    console.log("3");
}

async function withAsyncAwait() {
    console.log("1");
    const resp = await tempPromise // it offload this function then come back when promise is resolved.
    console.log(resp);
    console.log("3");
}

// withPromise(); // 1, 3, 4, 2
withAsyncAwait(); // 1, 4, 2, 3 

console.log("4")
