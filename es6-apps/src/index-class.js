//object creation using constructors -  function or class

function Employee() {
    //object properties : instance variables and methods
    this.id = 1;
    this.name = 'subramanian'
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//function call
let emp = new Employee() // constructor call
console.log('Employee info')
console.log(emp.id, emp.name, emp.calculateSalary())

//es 6 representation.

class Customer {
    //can have only instance memembers
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
