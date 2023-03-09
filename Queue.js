// Implementing Queue Data Structure
// Queue Data Structure follows FIFO - First In First Out

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        return this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
        // Big O is linear because the index of all the element has to be rearranged
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    peek() {
        return this.items[0];
    }

    print() {
        return this.items.toString();
    }

    clear() {
        return this.items = [];
    }
}

const names = new Queue();

console.log(names.isEmpty()); // true
console.log(names.enqueue("obanijesu")); // 1 ["obanijesu"]
console.log(names.enqueue("jesuye")); // 2 ["obanijesu", "jesuye"]
console.log(names.enqueue("iyanuoluwa")); // 3 ["obanijesu", "jesuye", "iyanuoluwa"]
console.log(names.dequeue()); // obanijesu => // ["jesuye", "iyanuoluwa"] - Big O is linear because the index of all the element has to be rearranged
console.log(names.peek()); // jesuye
console.log(names.size()); // 2
console.log(names.isEmpty()); // false
console.log(names.print()); // jesuye,iyanuoluwa
console.log(names.clear()); // []
console.log(names.isEmpty()); // true