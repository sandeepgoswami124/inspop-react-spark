//literal syntax

let customer = {
    id: 1,
    name: 'Subramanian',
    calculate: function () {
        return 100;
    }
}
console.log(customer.id, customer.name, customer.calculate())

customer = {
    id: 1,
    name: 'Subramanian',
    calculate() {
        return 100;
    }
}
console.log(customer.id, customer.name, customer.calculate())
