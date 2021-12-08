//without object destructuring.

let displayEmployee = (emp) => {
    console.log(`${emp.id} ${emp.name} ${emp.address.city} ${emp.address.state}`)
}

//with object destructuring.
displayEmployee = emp => {
    const { id, name, address } = emp;
    console.log(`${id} ${name} ${address.city} ${address.state}`)
}
//with object destructuring.
displayEmployee = emp => {
    const { id, name, address: { city, state } } = emp;
    console.log(`${id} ${name} ${city} ${state}`)
}

//with object destructuring.
displayEmployee = ({ id, name, address: { city, state } }) => console.log(`${id} ${name} ${city} ${state}`)


let employee = {
    id: 1,
    name: 'subramanian',
    address: {
        city: 'Coimbatore',
        state: 'Tamil nadu'
    }
}
displayEmployee(employee)
//////////////////////////////////////////////////////////////////////////////////////

//how to return object with destrucing

let getStock = () => {
    return {
        name: 'NXL',
        price: 100,
        qty: 10
    }
};
console.log(getStock())

getStock = () => ({
    name: 'NXL',
    price: 100,
    qty: 10
})
console.log(getStock())

//dynamic args

getStock = (name = 'default', price = 0, qty = 1) => ({
    name: name,
    price: price,
    qty: qty
})
console.log(getStock())
console.log(getStock('NXL', 100, 10))

//if object prop and local variable is same: remove one
getStock = (name = 'default', price = 0, qty = 1) => ({
    name, // left==right name : name
    price,
    qty
})
console.log(getStock())
console.log(getStock('NXL', 100, 10))

class UserService {
    constructor() {

    }
    findAll() {
        return 'findAll users'
    }
    save() {
        return 'save users'
    }
    update() {
        return 'update users'
    }
}
//old way of calling methods
let service = new UserService();

console.log(`${service.findAll()}`)
console.log(`${service.save()}`)
console.log(`${service.update()}`)

let { findAll, save, update } = new UserService();

console.log(`${findAll()}`)
console.log(`${save()}`)
console.log(`${update()}`)

//console.log
const { log, warn } = console;
log('hello')








