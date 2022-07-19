# Singleton Pattern

## Case 1

```js
class Counter {
    static #instance
    counter

    constructor() {
        if(Counter.#instance) {
            throw new Error("You can only create one instance")
        }
        this.counter = 0;
        Counter.#instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter
    }

    increment() {
        ++this.counter;
    }

    decrement() {
        --this.counter;
    }
}

const c1 = new Counter();
const c2 = new Counter(); // Error
```

<br><br><br>

## Case 2

 - `Object.freeze` method makes sure that consuming code cannot modify the Singleton
 - reduces the risk of accidentally overwriting the values on the Singleton.

```js
class Counter {
    static #instance
    counter

    constructor() {
        if(Counter.#instance) {
            throw new Error("You can only create one instance")
        }
        this.counter = 0;
        Counter.#instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter
    }

    increment() {
        ++this.counter;
    }

    decrement() {
        --this.counter;
    }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
// module.exports = singletonCounter;
```