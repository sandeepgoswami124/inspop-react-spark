//NAN-  you get against undefined computation

let qty;
let price = 100;

let totalPrice = qty * price
console.log(`Qty ${qty} Price ${price} Total Price ${totalPrice}`)

//during type conversion, if something goes wrong.

//Type conversion:
//type conversion:implicit
let x = "10"; //string
let y = 10; //number
let c = x * y; // x is converted into number and computation takes place
console.log(`C ${c}`)

//explicit conversion
let d = parseFloat(x) * y;
console.log(`D ${d}`)

//NaN and type conversion

let a = "$10";
let b = 100;
let res = a * b;
console.log(`res ${res}`)
