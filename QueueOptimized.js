// Implementing Optimized Queue Data Structure
// Dequeue Big O will be O(1);
// Queue Data Structure follows FIFO - First In First Out

class QueueOptimized {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
        return element;
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++
        return item;
        // Big O is O(1) because the index of all the element are not rearranged
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.rear-this.front;
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
        return this.items = [];
    }
}

const names = new QueueOptimized();

console.log(names.isEmpty()); // true
console.log(names.enqueue("obanijesu")); // 1 ["obanijesu"]
console.log(names.enqueue("jesuye")); // 2 ["obanijesu", "jesuye"]
console.log(names.enqueue("iyanuoluwa")); // 3 ["obanijesu", "jesuye", "iyanuoluwa"]
console.log(names.dequeue()); // obanijesu => // [<1 empty item>, "jesuye", "iyanuoluwa"] - Big O is O(1)
console.log(names.peek()); // jesuye
console.log(names.size()); // 2
console.log(names.isEmpty()); // false
console.log(names.print()); // [<1 empty item>, jesuye,iyanuoluwa]
console.log(names.clear()); // []
console.log(names.isEmpty()); // true