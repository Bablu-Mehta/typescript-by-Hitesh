"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree("bablu")
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({
//   brand: "bislery",
//   isPlastic: true,
// });
function getSearchProducts(products) {
    //do some databases operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (product) => {
    //do some database operation
    const myIndex = 4;
    return product[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, {
    connection: "true",
    username: "Bablu",
    password: "anything",
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
