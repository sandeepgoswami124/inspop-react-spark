//immpure function
// function addItem(items) {
//     //add 
//     items.push(4); //push is immpure 
//     return items;
// }
// // //pattern 1
// function addItem(items) {
//     //items.push(4);
//     return items.concat(4);
// }
//pattern 2
function addItem(items) {
    //items.push(4);
    return [...items, 4];
}

let items = [1, 2, 3];
console.log('Old Items => ', items);
let newItems = addItem(items)
console.log('new Items => ', newItems);

console.log("Same Object (oldItems===newItems) ? =>", items === newItems);
