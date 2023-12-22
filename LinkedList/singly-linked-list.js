// singly linked list
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head
        this.length = 0
    }
    push(value) {
        let node = new Node(value)
        // if(!this.head) {
        //     this.tail = newNode
        //     this.head = newNode
        // }
        // else {
        //     this.tail.next = newNode
        //     this.tail = newNode
        // }

        //store current node 
        let current;
        // if list is empty add the element and make it head
        if (this.head == null) {
            this.head = node
        }
        else {
            current = this.head

            // iterate to end of list 
            while (current.next) {
                current = current.next
            }

            // finally add the node in end 
            current.next = node;
        }
        this.size++;


    }
    printList() {

        // get current for traversing through list 
        let curr = this.head
        let str = "";  // initialization

        while (curr) {
            console.log(curr);
            str += curr + " ";
            curr = curr.next
        }

        console.log(str);
    }
    append(value) { }
    prepend(value) { }
    insert(value, index) { }
}

let list = new LinkedList()

list.push(3)
list.push(9)

list.printList();

const Add10Pixel = () => {
    console.log("called");
    document.getElementById('add10Pixel').addEventListener('click', (event) => {
        const style = window.getComputedStyle(document.getElementById('add10Pixel'))
        style.height = "200px"
        // event.target.style.height = "100px"
        // console.log(event.target.style.height);
    })
}
