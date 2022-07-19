# Proxy Pattern

## Case 1

```js
const person = {
    name: "rhie-coder",
    age: 30,
    nationality: "Korea"
}

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`);
    },

    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
    }
});

personProxy.name; //The value of name is rhie-coder
personProxy.age = 20; //Changed age from 30 to 20
```

<br>
<br>
<br>

## Case 2

```js
const person = {
    name: "rhie-coder",
    age: 30,
    nationality: "Korea"
}

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        if(!obj[prop]) {
            console.log(`this property doesn't exist on the target object`)
        } else {
            console.log(`The value of ${prop} is ${obj[prop]}`)
        }
    },

    set: (obj, prop, value) => {
        if(prop === "age" && typeof value !== "number") {
            console.log(`you can only pass numeric value for age`)
        } else if (prop === "name" && value.length < 2) {
            console.log(`you need to provide valid name`)
        } else {
            console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`)
            obj[prop] = value;
        }
    }
});

personProxy.nonExistentProperty; // this property doesn't exist on the target object
personProxy.age = "44"; // you can only pass numeric value for age
personProxy.name = ""; // you need to provide valid name
```

<br>
<br>
<br>

## Case 3

```js
const person = {
    name: "rhie-coder",
    age: 30,
    nationality: "Korea"
}

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`)
    },
    set: (obj, prop, value) => {
        console.log(`changed ${prop} from ${obj[prop]} to ${value}`)
        Reflect.set(obj, prop, value);
    }
})

personProxy.name; // The value of name is rhie-coder
personProxy.age = 20; // changed age from 30 to 20
personProxy.name = "Jane Doe"; // changed name from rhie-coder to Jane Doe
```