const firstDiv = document.getElementById("first-div")
const makeGreenDiv = document.getElementById("green-div")
const makeBlackDiv = document.getElementById("black-div")

makeGreenDiv.addEventListener('click', () => {
    firstDiv.classList.add('green-div')
})

makeBlackDiv.addEventListener('click', () => {
    firstDiv.classList.replace("green-div", "black-div")
    // firstDiv.classList.add('black-div')
})

console.log("called");

function addDiv () {
    const parentEle = document.body
    const newDiv = document.createElement('div');
    // const data = document.body.appendChild(newDiv) this is appending in the end of body
    newDiv.innerText = "this is second div"

    // insert element at specific location anywhere in body
    parentEle.insertBefore(newDiv, parentEle.childNodes[2])
    console.dir(data, "data");
}
