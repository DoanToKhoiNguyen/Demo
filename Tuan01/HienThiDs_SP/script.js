const products = [
    'Laptop',
    'Smartphone',
    'Monitor',
    'Keyboard',
];

const productList = document.querySelector('#product-list');

products.forEach(product => {
    const item = document.createElement('div');
    const productName = document.createElement('span');
    const deleteBtn = document.createElement('button');

    productName.textContent = product;
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
        productList.removeChild(item);
    });

    item.appendChild(productName);
    item.appendChild(deleteBtn);
    productList.appendChild(item);
});

