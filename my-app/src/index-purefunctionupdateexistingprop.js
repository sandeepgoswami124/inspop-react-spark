//pure function:

//if function receives input, how to modify the input parameter.

//impure function
// function updateProfile(profile, city) {
//     profile.city = city;
//     return profile;
// }

//pure function : immutable function
function updateProfile(profile, city) {

    //return new Object
    return {
        id: profile.id,
        name: profile.name,
        city: city
    }
}


let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Chennai'
}
let updatedProfile = updateProfile(profile, 'coimbatore')
console.log(updatedProfile)

console.log("Same Object (profile===updatedProfile) ? =>", updatedProfile === profile);