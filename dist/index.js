"use strict";
function addToCart(item) {
    console.log(`Adding "${item.title}" to cart.`);
}
addToCart({ id: 1, title: 'shoes', variantId: 123 });
addToCart({ id: 2, title: 'Shirt', variantId: 456 });
function addToCartOptional(item) {
    console.log(`Adding "${item.title}" to cart.`);
    if (item.variantId) {
        console.log(`Variant ID: ${item.variantId}`);
    }
}
addToCartOptional({ id: 1, title: 'shoes' });
addToCartOptional({ id: 2, title: 'Shirt', variantId: 789 });
