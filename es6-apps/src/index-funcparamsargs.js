//parameters and args.

//name is arg
function sayHello(name) {
    console.log(name)
}
//call function
//'Subramaian' -parameter
sayHello('Subramanian')
sayHello()


//default args
function multiply(a = 0, b = 0) {
    let c = a * b;
    console.log(`Multiply Res ${c}`)
}
multiply(10, 10)
multiply(); // undefined,undefined
