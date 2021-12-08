class Customer {
    id = 1;
    name = 'subramanian'
    //methods
    calculateInvoice() {
        return 1000;
    }
}
let customer = new Customer();

//after object creation
customer.id = 900
customer.name = 'ram';

console.log('customer info')
console.log(customer.id, customer.name, customer.calculateInvoice())