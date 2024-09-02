const promise1 = Promise.resolve(3);
const promise2 = "42";
const promise3 = new Promise ((resolve, response) => {
  setTimeout(resolve, 100, "foo")
})

Promise.all([promise1, promise2, promise3])
.then((res) => {console.log(res);
})
