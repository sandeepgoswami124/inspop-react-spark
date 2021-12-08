//function can be passed as parameter to anothre function.

function greet(name = '') {
    return name;
}
console.log(greet('hello'))
let msg = 'hai'
console.log(greet(msg))
//function as parameter

//greetMe is just variable, can hold any value including function.
function sayGreet(greetMe) {
    //invoke function
    greetMe();
}
//function as parameter
sayGreet(function () {
    //logic
    console.log('hello')
});
let hi = function () {
    console.log('hi')
};
sayGreet(hi);


//returning function :Clousures,HOF

function count() {
    return function () {
        return 10;
    }
}
let counter = count()
console.log(counter())
