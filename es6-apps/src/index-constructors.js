class Customer {
    constructor(id = 1, name = 'subramanian') {
        this.id = id;
        this.name = name;
    }
    //methods
    calculateInvoice() {
        return 1000;
    }
}
let customer = new Customer();
console.log('customer info')
console.log(customer.id, customer.name, customer.calculateInvoice())

customer = new Customer(800, 'Dodge');
console.log('customer info')
console.log(customer.id, customer.name, customer.calculateInvoice())