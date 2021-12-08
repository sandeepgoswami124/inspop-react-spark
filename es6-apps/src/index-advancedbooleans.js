//Advanced booleans

// * 
// * 1.boolean false
//     * 2.Empty string "", ''
//         * 3.0
//         * 4.undefined
//             * 5.NaN
//                 * 6.null
//                     * /
let isActive = true;

if (isActive) {
    console.log('Active')
} else {
    console.log('inactive')
}

let firstName = ""
if (firstName) {
    console.log('Name is Present')
} else {
    console.log('Name is not  Present')
}

let start = 0;
if (start) {
    console.log('start')
} else {
    console.log('no start')
}

let total;
if (total) {
    console.log('total found')
} else {
    console.log('total not found')
}

let value = 100 * total;
if (value) {
    console.log('value found')
} else {
    console.log('value not found')
}

value = 100 / 0;
if (value) {
    console.log('value found -infinity')
} else {
    console.log('value not found -infinity')
}