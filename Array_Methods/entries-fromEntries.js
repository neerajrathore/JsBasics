// <input type="text" id="title" name="title" required />
// <textarea id="content" name="content" rows={5} required />
let formData = {["d"]:[
    { name: 'title', value: 'test' },
    { name: 'content', value: 'test content' }
]}

let newFormData = [
    ['name', 'title', "value", 'test'], // make it 2-2 
] 
let newNewFormData = [
    ['name', 'title'],
    ["value", 'test'] 
] 
console.log(formData);
console.log(Object.entries(newFormData));
console.log(Object.fromEntries(newNewFormData));

// another example
const obj = {x: 42, y: 50}
const entries = Object.entries(obj) // [['x', 42], ['y', 50]]
const result = Object.fromEntries(entries) // {x: 42, y: 40}
