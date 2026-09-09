const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const message = document.getElementById('message');
const productList = document.getElementById('productList');
const productDetails = document.getElementById('productDetails');
const cartList = document.getElementById('cartList');

let products = [];
let cart = [];

async function getProducts() {
    try{
        message.textContent = 'Loading products...';

        const response = await fetch('https://dummyjson.com/products');

        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        products = data.products;

        message.textContent = 'Successfully fetched products.';
        displayProducts(products);
    }
    catch (error) {
        message.textContent = 'Error fetching products.';
    }
}

function displayProducts(data) {
    productList.innerHTML = '';
    data.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <p>
                <button onclick="showProductDetails(${product.id})">
                ${product.title}</button>
            </p>
        `;
        productList.appendChild(productItem);
    });
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if(product) {
        productDetails.innerHTML = `
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    } else {
        productDetails.innerHTML = '<p>Product not found.</p>';
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if(product) {
        cart.push(product);
        displayCart();
    } else {
        alert('Product not found.');
    }
}

function displayCart() {
    cartList.innerHTML = '';
    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${product.title} - $${product.price}</p>
        `;
        cartList.appendChild(cartItem);
    });
}

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const results = products.filter(product => 
        product.title.toLowerCase().includes(query));
    displayProducts(results);
});

getProducts();