// Implementing Stack Data Structure
// Stack Data Structure follows LIFO - Last In First Out

class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        return this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    peek() {
        return this.items[this.items.length-1];
    }

    print() {
        return this.items.toString();
    }

    clear() {
        return this.items = [];
    }
}

const names = new Stack();

console.log(names.isEmpty()); // true
console.log(names.push("obanijesu")); // 1 ["obanijesu"]
console.log(names.push("jesuye")); // 2 ["obanijesu", "jesuye"]
console.log(names.push("iyanuoluwa")); // 3 ["obanijesu", "jesuye", "iyanuoluwa"]
console.log(names.pop()); // iyanuoluwa => // ["obanijesu", "jesuye"]
console.log(names.peek()); // jesuye
console.log(names.size()); // 2
console.log(names.isEmpty()); // false
console.log(names.print()); // obanijesu,jesuye
console.log(names.clear()); // []
console.log(names.isEmpty()); // true