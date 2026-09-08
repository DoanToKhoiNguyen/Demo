let products = [
    {
        id:1,
        productName: "Laptop",
        price: 1000,
        category: "Electronics",
        stock: 10
    },
    {
        id:2,
        productName: "Smartphone",
        price: 500,
        category: "Electronics",
        stock: 20
    }
];

function showproduct(){
    let table = document.getElementById("productTable");
    table.innerHTML = '';
    for (let p of products){
        table.innerHTML += `<tr>
            <td>${p.id}</td>
            <td>${p.productName}</td>
            <td>${p.price}</td>
            <td>${p.category}</td>
            <td>${p.stock}</td>
        </tr>`;
    }
}
function addProduct(){
    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let category = document.getElementById("productCategory").value;
    let stock = document.getElementById("productStock").value;

    let product = {
        id: products.length + 1,
        productName: name,
        price: price,
        category: category,
        stock: stock
    }
    products.push(product);
    showproduct();
}
showproduct();