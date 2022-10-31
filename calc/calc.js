console.log("calc working");
const p_tag = document.querySelectorAll("p");
console.log(p_tag);

let new_div = document.createElement("div");
new_div.setAttribute("class", "my_div");
new_div.setAttribute("innerHTML", "my_div");
const new_div_text = document.createTextNode("Hello world");
new_div.append(new_div_text);
document.body.append(new_div);