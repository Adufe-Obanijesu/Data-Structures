// Implementing Optimized Circular Queue Data Structure
// Circular Queue Data Structure follows FIFO - First In First Out and it has fixed size
// Let's fix the size to be 5

class CircularQueue {
    constructor() {
        this.items = new Array(5);
        this.size = 5;
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        if (this.rear !== this.size) {
            this.items[this.rear] = element;
            this.rear++;
            return element;
        }
        return "Array is full";
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        if (this.front === this.size-1) {
            this.front = 0;
            this.rear = 0;
            return item;
        }
        this.front++;
        return item;
        // Big O is O(1) because the index of all the element are not rearranged
    }

    isEmpty() {
        return this.rear === 0;
    }

    sizeOfArray() {
        return this.rear - this.front;
    }

    isFull() {
        return this.rear === this.size;
    }

    peek() {
        return this.items[this.front];
    }

    print() {
        return this.items;
    }

    clear() {
        this.front = 0;
        this.rear = 0;
        return this.items = new Array(5);
    }
}

const names = new CircularQueue();

console.log(names.isEmpty()); // true
console.log(names.enqueue("obanijesu")); // 1 ["obanijesu"]
console.log(names.enqueue("jesuye")); // 2 ["obanijesu", "jesuye"]
console.log(names.enqueue("iyanuoluwa")); // 3 ["obanijesu", "jesuye", "iyanuoluwa"]
console.log(names.enqueue("oluwaferanmi")); // 4 ["obanijesu", "jesuye", "iyanuoluwa", "oluwaferanmi"]
console.log(names.enqueue("oluwaloni")); // 5 ["obanijesu", "jesuye", "iyanuoluwa", "oluwaferanmi", "oluwaloni"]
console.log(names.enqueue("obasola")); // Array is full
console.log(names.dequeue()); // obanijesu => // [<1 empty item>, "jesuye", "iyanuoluwa", "oluwaferanmi", "oluwaloni"] - Big O is O(1)
console.log(names.peek()); // jesuye
console.log(names.sizeOfArray()); // 4
console.log(names.isEmpty()); // false
console.log(names.print()); // [<1 empty item>, jesuye,iyanuoluwa, oluwaferanmi, oluwaloni]
console.log(names.clear()); // [<5 empty items>]
console.log(names.isEmpty()); // true