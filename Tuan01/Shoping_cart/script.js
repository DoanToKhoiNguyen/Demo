const products = [
    {
        id: 1,
        name: "Laptop",
        price: 1500
    },
    {
        id: 2,
        name: "Mouse",
        price: 30
    },
    {
        id: 3,
        name: "Keyboard",
        price: 80
    }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showproducts() {
    let html = '';
    products.forEach(product => {
        html += `<div class="product">
            <span>${product.name}</span>
            <span>Price: $${product.price}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>`;
    });
    document.getElementById("products").innerHTML = html;
}

function increaseQuantity(productId) {
    let cartItem = cart.find(item => item.id === productId);
    if(cartItem) {
        cartItem.quantity += 1;
        saveCart();
        showCart();
    }
}

function decreaseQuantity(productId) {
    let cartItem = cart.find(item => item.id === productId);
    if(cartItem) {
        cartItem.quantity -= 1;
        if(cartItem.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            showCart();
        }
    }
}

function showCart() {
    let html = '';
    let total = 0;
    cart.forEach(item => {
        html += `<div class="cart-item">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="increaseQuantity(${item.id})">+</button>
            <button onclick="decreaseQuantity(${item.id})">-</button>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>`;
        total += item.price * item.quantity;
    });
    document.getElementById("cart").innerHTML = html;
    document.getElementById("total").innerText = total;
}
function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    let cartItem = cart.find(item => item.id === productId);
    if(cartItem) {
        cartItem.quantity += 1;
    }
    else{
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    saveCart();
    showCart();
}
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    showCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

showproducts();
showCart();
