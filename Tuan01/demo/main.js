const product = require('./data.js');

//Tìm kiếm sản phẩm
function searchproduct(id){
    return product.find(p => p.id === id);
}
//console.log(searchproduct(1));

//Hàm map
function mapproduct(){
    return product.map(p => ({
        Name: p.name
    }));
}
console.log(mapproduct());
//lọc
function filter(stock){
    return product.filter(p => p.stock > 10);
}
//console.log(filter());

//Hàm reduce
function reduceproduct(){
    return product.reduce((total, p) => total + p.price*p.stock, 0);
}
//console.log(reduceproduct());