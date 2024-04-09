const user = {
    name: 'a',
    greet() {
        alert(`hello ${this.name}`)
    },
    mother: {
        name: 'b',
    greet() {
        alert(`hello ${this.mother.name}`) //wrong
        alert(`hello ${this.mother.name}`) //right
    }
    }
}
user.greet()
user.mother.greet()
