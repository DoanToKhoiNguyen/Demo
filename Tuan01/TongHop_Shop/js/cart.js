const cartList = document.getElementById("cartList");
const totalElement = document.getElementById("total");
const checkoutForm = document.getElementById("checkoutForm");
const message = document.getElementById("message");

function displayCart() {
    const cart = getCart();

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty.</p>";
        totalElement.textContent = "Total: $0";
        return;
    }

    cartList.innerHTML = cart.map(function(item) {
        return `
            <div class="cart-item">
                <div>
                    <strong>${item.title}</strong>
                    <p>Qty: ${item.quantity}</p>
                </div>

                <div>
                    $${item.price * item.quantity}

                    <button onclick="removeFromCart(${item.id})">
                        Remove
                    </button>
                </div>
            </div>
        `;
    }).join("");

    // reduce
    const total = cart.reduce(function(sum, item) {
        return sum + item.price * item.quantity;
    }, 0);

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Xóa sản phẩm
function removeFromCart(productId) {
    let cart = getCart();

    cart = cart.filter(function(item) {
        return item.id !== productId;
    });

    saveCart(cart);

    displayCart();
}

// Checkout
checkoutForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validation
    if (name === "") {
        message.style.color = "red";
        message.textContent = "Please enter your name.";
        return;
    }

    if (email === "") {
        message.style.color = "red";
        message.textContent = "Please enter your email.";
        return;
    }

    if (!email.includes("@")) {
        message.style.color = "red";
        message.textContent = "Email is not valid.";
        return;
    }

    const cart = getCart();

    if (cart.length === 0) {
        message.style.color = "red";
        message.textContent = "Your cart is empty.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Checkout successful!";

    localStorage.removeItem("cart");

    checkoutForm.reset();

    displayCart();
});

displayCart();
