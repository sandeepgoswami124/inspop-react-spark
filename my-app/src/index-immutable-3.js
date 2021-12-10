
function increasePointByTwo(state){
     //spread notation
     return {
        ...state, // level-0 copy
        house: {
            ...state.house, //level -1 copy
            points: state.house.points + 2
        }
    }

}

let state = {
    house: {
        name: 'RavenClaw',
        points: 10
    }
}
//increase pointer by 2
let newState = increasePointByTwo(state);

console.log("Same Object (state===newState) ? =>", state === newState);

function updateMobileNo(customer, mobileno) {

    return {
        ...customer,
        contact: {
            ...customer.contact,
            communication: {
                ...customer.contact.communication,
                mobileno: mobileno
            }
        }
    }

}

let customer = {
    id: 1,
    name: 'Subramanian',
    contact: {
        address: {
            city: 'Coimbatore'
        },
        communication: {
            mobileno: '9000000000'
        }
    }
}
console.log(customer);

const updatedCustomer = updateMobileNo(customer, '9003706368')
console.log("Same Object (customer===updatedCustomer) ? =>", customer === updatedCustomer);
console.log(updatedCustomer);