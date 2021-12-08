//function declaration
//verb or verb+noun
function sayHello() {
    //function body
    console.log('hello')
}
//funcition call.
sayHello();

function validate() {
    //logic
    let name = 'ram';
    let password = 'ram';
    let response = (name === 'ram') && (password === 'ram') ? 'valid' : 'invalid'
    console.log(response);
}
validate();