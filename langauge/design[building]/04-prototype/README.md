# Prototype Pattern

## Case 1

### step 1
```js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");
```
### step 2

```js
console.log(Dog.prototype);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()

console.log(dog1.__proto__);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()
```

### step 3

```js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

Dog.prototype.play = () => console.log("Playing now!");

dog1.play(); //Playing now! 
```

<br>
<br>
<br>

## Case 2 : Prototype Chain

```js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log("Woof!");
  }
}

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`Flying!`);
  }
}

const dog1 = new SuperDog("Daisy");
dog1.bark(); //Woof! 
dog1.fly(); //Flying! 
```

## Case 3 : `Object.create()`

The `Object.create` method lets us create a new object, to which we can explicitly pass the value of its prototype.

```js
const dog = {
  bark() {
    console.log(`Woof!`);
  }
};

const pet1 = Object.create(dog);

pet1.bark(); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1)); //[]
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__)); // (1) ["bark"]
```

Although `pet1` itself doesn't have any properties, it does have access to properties on its prototype chain! Since we passed the dog object as pet1's prototype, we can access the `bark` property.

`Object.create` is a simple way to let objects directly inherit properties from other objects, by specifying the newly created object's prototype. The new object can access the new properties by walking down the prototype chain.