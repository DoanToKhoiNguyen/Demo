const status = document.getElementById("status");
const productsList = document.getElementById("products");

async function getProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        data.products.forEach((product) => {
            const li = document.createElement("li");
            li.textContent = product.title;
            productsList.appendChild(li);
        });

        status.textContent = "Products loaded successfully!";
    }
    catch (error) {
        status.textContent = `Error loading products`;
    }
}
getProducts();
