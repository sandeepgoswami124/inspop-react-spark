class Customer {
    //hardcoded initalization
    id = 1;
    name = 'subramanian'
    //methods
    calculateInvoice() {
        return 1000;
    }
}
let customer = new Customer();
console.log('customer info')
console.log(customer.id, customer.name, customer.calculateInvoice())