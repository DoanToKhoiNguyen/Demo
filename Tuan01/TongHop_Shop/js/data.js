let products = [];

async function getproducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if(!response.ok){
            throw new Error("Không thể lấy sản phẩm");
        }

        const data = await response.json();
        products = data.slice(0, 6);
        return products;
    } 
    catch (error) {
        console.log("Error", error);
        return [];      
    }
}