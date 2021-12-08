let a = 100; //type is number
let b = 100;
//double equal operator
if (a == b) {
    console.log('equal')
} else {
    console.log('not equal')
}

a = "100" // type is string

if (a == b) { // we are comparing string==number
    console.log('equal')
} else {
    console.log('not equal')
}

//Recommended Operator is  "===".
if (a === b) { // we are comparing string==number
    console.log('equal')
} else {
    console.log('not equal')
}

//
// Tenary operator ; to replace if ...else lader
let x = 100;
let y = 100;
x === y ? console.log('equal') : console.log('not equal')

let firstName = '';

let response = firstName ? 'You have firstName' : 'You dont have firstName'
console.log(response);
