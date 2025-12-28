const STORAGE_KEY = "cartItems";

function addToCart(button) {
    const product = button.closest(".col-md-4");
    const productTitle = product.querySelector(".product-title").textContent;

    let cart = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || [];
    cart.push(productTitle);

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    alert("Item added to the cart.");
}

function viewCart() {
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";

    let cart = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || [];

    if (cart.length === 0) {
        cartList.innerHTML = "<li class='list-group-item'>Cart is empty.</li>";
    } else {
        cart.forEach(item => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = item;
            cartList.appendChild(li);
        });
    }

    const modal = new bootstrap.Modal(document.getElementById("cartModal"));
    modal.show();
}

function clearCart() {
    let cart = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || [];

    if (cart.length === 0) {
        alert("No items to clear.");
        return;
    }

    sessionStorage.removeItem(STORAGE_KEY);
    alert("Cart cleared.");
    viewCart();
}

function processOrder() {
    let cart = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || [];

    if (cart.length === 0) {
        alert("Cart is empty.");
        return;
    }

    alert("Thank you for your order.");
    sessionStorage.removeItem(STORAGE_KEY);
    viewCart();
}
