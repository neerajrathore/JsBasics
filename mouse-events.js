// ******* index.js *******

// Mouse events

// element.addEventListener(type, function);

console.log("working within");

const div = document.querySelector("#myDiv");

div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";

// div.addEventListener("click", e => {
//     console.log("You clicked the mouse!");
//     div.style.backgroundColor = "yellow";
// })

document.addEventListener("mousedown", e => {
    console.log("You are holding the mouse down!");
    div.style.backgroundColor = "red";
})
// document.addEventListener("mouseup", e => {
//     console.log("You let go of the mouse!");
//     div.style.backgroundColor = "grey";
// })

// document.addEventListener("dblclick", e => {
//     console.log("You double clicked!");
//     div.style.backgroundColor = "purple";
// })

// document.addEventListener("contextmenu", e => {
//     console.log("You opened the context menu");
// })

// document.addEventListener("mouseover", e => {
//     console.log("You entered the square!");
//     div.style.backgroundColor = "purple";
// })
// div.addEventListener("mouseleave", e => {
//     console.log("You left the square!");
//     div.style.backgroundColor = "grey";
// })

// div.addEventListener("mousemove", e => {
//     console.log("You are within the square!");
// })
