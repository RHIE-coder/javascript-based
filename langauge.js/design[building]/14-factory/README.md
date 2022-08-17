# Factory Pattern

With the factory pattern we can use factory functions in order to create new objects. A function is a factory function when it returns a new object without the use of the new keyword!

## Case 1

```js
const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  });
  
  const user1 = createUser({
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com"
  });
  
  const user2 = createUser({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@doe.com"
  });
  
  console.log(user1);
  console.log(user2);

/*  
{
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  fullName: [Function: fullName]
}
{
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
  fullName: [Function: fullName]
}
*/
```

<br>
<br>
<br>

## Case 2

```js
const createObjectFromArray = ([key, value]) => ({
  [key]: value
});

createObjectFromArray(["name", "John"]); // { name: "John" }
```

