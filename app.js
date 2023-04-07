'use strict'

    let productsContainer = document.getElementById("grid");
    let cartContainer = document.getElementById("shopping-cart");
    let cartContent = document.getElementById("cart-content");
    let toggleCartBtn = document.getElementById("toggle-cart-btn");
    let clearCartBtn = document.getElementById("clear-cart");
    let checkoutBtn = document.getElementById("checkout-btn");
    let totalPriceContainer = document.getElementById("total-price");
    let addButton = document.getElementById("addButton1").addEventListener("click", addToCart);
    let addButton2 = document.getElementById("addButton2").addEventListener("click", addToCart);
    let addButton3 = document.getElementById("addButton3").addEventListener("click", addToCart);
  

function addToCart(event) {
    console.log('hi');
}
