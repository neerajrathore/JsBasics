let string = 'dbabbca'
let array = ['bat',  'ball','rat','bat','bat','car','rat']
function matching (str) {
	console.log("str", str) 
  let regex = new RegExp(str,'g');
  console.log(regex);
  match = regex.exec(string)
  console.log(match + ' ' + regex.lastIndex);
  
  console.log(match)
}
str = string.split("")
console.log(str);
uniq = [...new Set(str)];
console.log(uniq);
for (var i = 0; i < uniq.length; i++) {
    // for (var j = 0; j < str.length; j++) {
    //     uniq[i].
    // }
    let index = str.indexOf(uniq[i])
    console.log("index", index);
    for (var i = 0; i < array.length; i++){
        // array[i]
        var arraycontainsturtles = (array.indexOf(array[i]) > -1);
        console.log("arraycontainsturtles", arraycontainsturtles, array[i]);
    }
    // console.log("indexOfAll", indexOfAll(array, array[index])) //[0, 3, 5]
    // var result = [];

    // array.forEach((car, index) => car === array[index] ? result.push(index) : null)
    // console.log("result", result);

    // const dupes = array.reduce((acc, v, i, arr) => arr.indexOf(v) !== i && acc.indexOf(v) === -1 ? acc.concat(v) : acc, [])
    // console.log("dupes",dupes);
    // for (var i = 0; i < dupes.length; i++) {
    //     let data = array.indexOf(dupes[i])
    //     console.log("dataa", data);
    // }

}
for (var i = 0; i < string.length; i++) {
  /* console.log(str.charAt(i)) */;
  /* let data = array(i).match(/str.charAt(i)/g); */
  matching(string.charAt(i))
}