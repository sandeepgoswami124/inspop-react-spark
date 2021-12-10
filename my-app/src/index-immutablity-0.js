//how to add new propery in pure functions.
//adding property and testing pure function

// function addNewPower(person) {
//     //add new property
//     person.specialPower = 'invisibility';
//     return person;
// }


function addNewPower(person) {
    //add new property
    // person.specialPower = 'invisibility';
    return {
        firstName: person.firstName,
        lastName: person.lastName,
        address: {
            street: person.address.street,
            city: person.address.city,
            state: person.address.state
        },
        specialPower: 'invisibility'
    }
}
let person = {
    firstName: 'Subramanian',
    lastName: 'Murugan',
    address: {
        street: '10 th street',
        city: 'Coimbatore',
        state: 'TN'
    }
};
console.log('old Person', person);

let newPerson = addNewPower(person);

console.log('new Person', newPerson);

console.log("Same Object (person===newPerson) ? =>", person === newPerson);