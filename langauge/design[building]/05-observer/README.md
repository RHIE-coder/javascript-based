# Observer Pattern

With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable. Whenever an event occurs, the observable notifies all its observers!

An observable object usually contains 3 important parts:

 - `observers`: an array of observers that will get notified whenever a specific event occurs
 - `subscribe()`: a method in order to add observers to the observers list
 - `unsubscribe()`: a method in order to remove observers from the observers list
 - `notify()`: a method to notify all observers whenever a specific event occurs

```js
class Observable {
    constructor() {
        this.observers = []
    }

    subscribe(func) {
        this.observers.push(func);
        return this;
    }

    unsubscribe(func) {
        this.observers = this.observers.filter(observer => observer !== func)
        return this;
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
} 

function aFuncCall(data){
    console.log(`A function get data : ${data}`)
}

function bFuncCall(data){
    console.log(`B function get data : ${data}`)
}

function cFuncCall(data){
    console.log(`C function get data : ${data}`)
}

const observer = new Observable()
    .subscribe(aFuncCall)
    .subscribe(bFuncCall)
    .subscribe(cFuncCall)

observer.notify("hello world");
// A function get data : hello world
// B function get data : hello world
// C function get data : hello world
```