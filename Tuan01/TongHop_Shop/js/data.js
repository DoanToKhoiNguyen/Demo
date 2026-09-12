let products = [];

async function getproducts() {
    try {
        // fetch() gửi request đến API để lấy dữ liệu sản phẩm
        // await: chờ API trả về kết quả rồi mới chạy tiếp
        const response = await fetch("https://fakestoreapi.com/products");

        if(!response.ok){
            throw new Error("Không thể lấy sản phẩm");
        }

        // response.json() đọc dữ liệu JSON từ API
        // await dùng để chờ quá trình chuyển dữ liệu hoàn tất
        // Trả về một mảng (Array) các Object sản phẩm
        const data = await response.json();

        products = data.slice(0, 6);
        return products;
    } 
    catch (error) {
        console.log("Error", error);
        return [];      
    }
}