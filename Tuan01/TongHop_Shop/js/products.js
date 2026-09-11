const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

let allProducts = [];

// Hiển thị sản phẩm
function displayProducts(products) {
    productList.innerHTML = products.map(function(product) {
        return `
            <div class="product">
                <div>
                    <strong>${product.title}</strong>
                    <p>$${product.price}</p>
                </div>

                <button onclick="addToCart(${product.id})">
                    Add
                </button>
            </div>
        `;
    }).join("");
}

// Add product vào cart
function addToCart(productId) {
    const cart = getCart();

    // find
    const product = allProducts.find(function(item) {
        return item.id === productId;
    });

    // Kiểm tra sản phẩm đã có trong cart chưa
    const cartItem = cart.find(function(item) {
        return item.id === productId;
    });

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1
        });
    }

    saveCart(cart);

    alert("Added to cart!");
}

// Search
searchInput.addEventListener("input", function() {
    const keyword = searchInput.value.toLowerCase();

    // filter
    const result = allProducts.filter(function(product) {
        return product.title
            .toLowerCase()
            .includes(keyword);
    });

    displayProducts(result);
});

// Load products
async function loadProducts() {
    allProducts = await getProducts();

    displayProducts(allProducts);
}

loadProducts();
