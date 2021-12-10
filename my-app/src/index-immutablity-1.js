function updateProfile(profile, city) {
    //new object
    //copy the properties of old object and modify the property what you want todo
    // return {
    //     id: profile.id,
    //     name: profile.name,
    //     city: city
    // };
    // return Object.assign({}, profile, { city: city })
    //    return { ...profile, city: city }
    return { ...profile, city }

}


let profile = {
    id: 1,
    name: 'subramanian',
    city: 'Chennai'
};
let updatedProfile = updateProfile(profile, 'Coimbatore');
console.log(updatedProfile);
//same object or different object
console.log("Same Object (profile===updatedProfile) ? =>", updatedProfile === profile);