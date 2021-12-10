import produce from "immer";

function updateProfile(profile) {

    return produce(profile, draft => {
        //mutable code but it is immutable
        console.log(draft)
        draft.city = 'Coimbatore'
    })
}

let profile = {
    id: 1,
    name: 'subramanian',
    city: 'Chennai'
};

let updatedProfile = updateProfile(profile);
console.log(updatedProfile);
console.log("Same Object (profile===updatedProfile) ? =>", updatedProfile === profile);

function updateMobileNo(customer, mobileno) {
    // return {
    //     ...customer,
    //     contact: {
    //         ...customer.contact,
    //         communication: {
    //             ...customer.contact.communication,
    //             mobileno: mobileno
    //         }
    //     }
    // }
    return produce(customer, newCustomer => {
        newCustomer.contact.communication.mobileno = mobileno
    });

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