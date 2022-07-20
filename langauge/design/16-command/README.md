# Command Pattern

With the Command Pattern, we can decouple objects that execute a certain task from the object that calls the method.

## Case 1

### Before Use Command Pattern

```js
class OrderManager {
    constructor() {
        this.orders = [];
    }

    placeOrder(order, id) {
        this.orders.push(id);
        return `You have successfully ordered ${order} (${id})`;
    }

    trackOrder(id) {
        return `Your order ${id} will arrive in 20 minutes.`;
    }

    cancelOrder(id) {
        this.orders = this.orders.filter(order => order.id !== id);
        return `You have canceled your order ${id}`
    }
}

const manager = new OrderManager();

const results = [
    manager.placeOrder("Pad Thai", "1234"),
    manager.trackOrder("1234"),
    manager.cancelOrder("1234"),
]

console.log(results);

/*  
[
  'You have successfully ordered Pad Thai (1234)',
  'Your order 1234 will arrive in 20 minutes.',
  'You have canceled your order 1234'
]
*/
```

### After Use Command Pattern

```js
class OrderManager {
    constructor() {
        this.orders = [];
    }

    execute(command, ...args) {
        return command.execute(this.orders, ...args);
    }
}

class Command {
    constructor(execute) {
        this.execute = execute;
    }
}

function PlaceOrderCommand(order, id) {
    return new Command(orders => {
        orders.push(id);
        return `You have successfully ordered ${order} (${id})`;
    })
}

function CancelOrderCommand(id) {
    return new Command(orders => {
        orders = orders.filter(order => order.id !== id);
        return `You have canceled your order ${id}`;
    })
}

function TrackOrderCommand(id) {
    return new Command(()=> `Your order ${id} will arrive in 20 minutes.`);
}

const manager = new OrderManager();

const results = [
    manager.execute(new PlaceOrderCommand("Pad Thai", "1234")),
    manager.execute(new TrackOrderCommand("1234")),
    manager.execute(new CancelOrderCommand("1234")),
]

console.log(results);

/*  
[
  'You have successfully ordered Pad Thai (1234)',
  'Your order 1234 will arrive in 20 minutes.',
  'You have canceled your order 1234'
]
*/
```