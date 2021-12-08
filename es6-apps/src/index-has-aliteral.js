
let customer = {
    id: 2,
    name: 'subramanian',
    //has-a -nested objects
    adddress: {
        city: 'Coimbatore',
        state: 'Tamil Nadu'
    }
}
console.log(customer.id, customer.adddress.city)