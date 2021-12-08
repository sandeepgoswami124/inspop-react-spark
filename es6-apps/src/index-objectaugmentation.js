//javacsript objects are map , which is data structure.
let user = { id: 1 }

for (const key in user) {
    console.log(`${key} ${typeof key}`)  // - string
}
user = { "id": 1 }

for (const key in user) {
    console.log(`${key} ${typeof key}`)  // - string
}
console.log(user);
//object augment - add new prop during runtime

user.username = 'subramanian'
console.log(user);

//update 
user.username ='ram'
console.log(user);
user.city ='coimbatore'
console.log(user);

//delete prop
delete user.city;
console.log(user);

//iteration ; for..in loop
for (const key in user) {
    console.log(`${key} ${user[key]}`)
}