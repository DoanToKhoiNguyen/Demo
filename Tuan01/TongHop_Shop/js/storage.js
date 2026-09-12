function getCart() {
    //Lưu dữ liệu ngay trên trình duyệt
    //Lấy dữ liệu với key là cart
    const cart = localStorage.getItem("cart");

    if (!cart) {
        return [];
    }
    // Dữ liệu lấy từ localStorage luôn là dạng chuỗi (string)
    // JSON.parse() chuyển chuỗi JSON thành mảng/object JavaScript
    return JSON.parse(cart);
}

function saveCart(cart) {
    // JSON.stringify() chuyển mảng/object JavaScript thành chuỗi JSON
    // setItem("cart", ...) lưu chuỗi đó vào localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}
