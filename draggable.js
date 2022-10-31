var checkBox = $("input");
var pageX = $("#page-x");
var pageY = $("#page-y");
let box = $(".box");

// let drragabble = new Draggable(box, {
//     onClick: onClick
// })

// HAVE SOME MOMENT FUNCTIONALITY AS WELL
// AND PRACTICE ON MOMENT
let moments = moment("fefw");
var a = moment().toString();
console.log(moments, a);

function onClick(event) {
    console.log(event);
    pageX.text(event.pageX);
    pageY.text(event.pageY);

}

function disabledClick(event) {  
    onClick.apply(draggable, draggable.vars.onClickParams || [event]);
  }
  
  checkBox.change(function() {
      
    if (checkBox.is(":checked")) {
      
      draggable.disable();
      box.on("click", disabledClick);
      
    } else {
      
      draggable.enable();
      box.off("click", disabledClick);
    }
  });


  // ******************
  // EXPLORING nodes (element is a node and all properties are same for both)
  let node = document.createElement("p")

  console.log("this is node", node, node.isConnected); // explore other node property as well
  // "node" is simply an HTML element. The "DOM" is a tree structure that represents the HTML of the website, and every HTML element is a "node".
  // node is an interface that is implemented by other objects like document" and "element
  // The term "node" therefore (in the DOM context) means any object that implements the "Node" interface. Most commonly that is an element object representing an HTML element.

  // IMP NODE COMMENTS
  // Comments inside the HTML document are nodes in the DOM tree as well even though they dont effect the document in any way. HTML attributes such as id, class, title, style, etc. are also considered as nodes in DOM hierarchy.
  // node.ownerDocument
  // node.nodeType = Node.ELEMENT_NODE; // imp dont know what it does
  console.dir(node)




