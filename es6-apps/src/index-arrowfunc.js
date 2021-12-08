//how to write function literals in es6
//arrow function. is simpilfied version of function literals

let hello = function () {
    console.log('Hello')
};
hello();
//arrow version
hello = () => {
    console.log('Hello')
};
hello();
///if function has single line of body: remove {}
hello = () => console.log('Hello')
hello();
//parameters
let add = (a = 0, b = 0) => {
    let c = a + b;
    console.log(`Add ${c}`)
};
add(10, 10);

//return
add = (a = 0, b = 0) => {
    return a + b;
};
console.log('Add', add(10, 10));

//if function body has only return statement : remove return and { }
add = (a = 0, b = 0) => a + b;
console.log('Add', add(10, 10));

//single arg , no default value, return the same /expression

let stock = (a) => {
    return a;
}
console.log(stock(10))

//single parameter : we can remove () , {} , return
stock = a => a;
console.log(stock(10))

stock = a => a * 10;
console.log(stock(10))
//// arrow and function as parameter

// function sayGreet(greetMe) {
//     //invoke function
//     greetMe();
// }

let sayGreet = greetMe => greetMe('hello');
//function as parameter
sayGreet(msg => {
    console.log(msg)
});
sayGreet(msg => console.log(msg));

// function count() {
//     return function () {
//         return 10;
//     }
// }

// function count() {
//     // return () => {
//     //     return 10;
//     // }
//     return () => 10
// }
let count = () => {
    return () => 10
}
let counter = count()
console.log(counter())

count = () => () => 10
console.log(counter())
