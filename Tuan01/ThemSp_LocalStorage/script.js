let products = JSON.parse(localStorage.getItem("products")) || [];

function addProduct() {
    let product = {
        id: products.length + 1,
        name: document.getElementById("productName").value,
        price: parseFloat(document.getElementById("productPrice").value),
        category: document.getElementById("productCategory").value,
        stock: parseInt(document.getElementById("productStock").value)
    }
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    showProducts();
}

function showProducts() {
    let productList = document.getElementById("list");
    productList.innerHTML = "";
    products.forEach(product => {
        productList.innerHTML += `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${product.category}</td>
            <td>${product.stock}</td>
            <td><button onclick="deleteProduct(${product.id})">Delete</button></td>
        </tr>`;
    });
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
    showProducts();
}
