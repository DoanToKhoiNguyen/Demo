const form = document.getElementById('registerForm');

const usernameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');

const errorMessage = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const phone = phoneInput.value;

    if(name === '' || email === '' || password === '' || phone === '') {
        errorMessage.textContent = 'Vui lòng điền đầy đủ thông tin.';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        errorMessage.textContent = 'Vui lòng nhập địa chỉ email hợp lệ.';
        return;
    }    
    if(password.length < 6) {
        errorMessage.textContent = 'Mật khẩu phải có ít nhất 6 ký tự.';
        return;
    }
    const phoneRegex = /^[0-9]+$/;
    if(!phoneRegex.test(phone)) {
        errorMessage.textContent = 'Số điện thoại chỉ được chứa các chữ số.';
        return;
    }
    errorMessage.textContent = 'Đăng ký thành công';
    form.reset();
});
