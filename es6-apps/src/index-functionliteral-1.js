//function is first class citizen

//function is value: can be assinged into a variable

let a = 10;

//function literal type : anonmous function :function withoutname
let myfun = function () {
    //function body
    console.log('myfunction')
};
myfun();

function sayHello() {
    return 'Hello'
}
let hello = sayHello;
console.log(hello())

//
console.log(typeof myfun, typeof sayHello)

//// function literal args and parameters

let add = function (a = 0, b = 0) {
    return a + b;
};
console.log(add(10,10))
