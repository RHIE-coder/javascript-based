# Mixin Pattern

A mixin is an object that we can use in order to add reusable functionality to another object or class, without using inheritance. We can't use mixins on their own: their sole purpose is to add functionality to objects or classes without inheritance.

## Case 1
```js
class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const dogFunctionality = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!")
  };

  const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!")
  };
  
  Object.assign(dogFunctionality, animalFunctionality);
  Object.assign(Dog.prototype, dogFunctionality);
  
  const pet1 = new Dog("Daisy");
  
  console.log(pet1.name); // Daisy
  pet1.bark(); // Woof!
  pet1.play(); // Playing!
  pet1.walk(); // Walking!
  pet1.sleep(); // Sleeping!
```