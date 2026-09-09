const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const message = document.getElementById('message');
const productList = document.getElementById('productList');

let products = [];

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
            <p>${product.title}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const results = products.filter(product => 
        product.title.toLowerCase().includes(query));
    displayProducts(results);
});

getProducts();