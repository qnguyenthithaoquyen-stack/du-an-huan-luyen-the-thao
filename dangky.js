
// Xử lý nút đăng ký
document.getElementById("btnRegister").addEventListener("click", function () {
    const fullname = document.getElementById("reg_fullname").value.trim();
    const username = document.getElementById("reg_username").value.trim();
    const email = document.getElementById("reg_email").value.trim();
    const password = document.getElementById("reg_password").value.trim();
    const age = document.getElementById("reg_age").value.trim();
    const city = document.getElementById("reg_city").value;
    const role = document.getElementById("reg_role").value;
    const errorDiv = document.getElementById("register_error");

    // Kiểm tra nhập đủ thông tin
    if (!fullname || !username || !email || !password || !age) {
        errorDiv.textContent = "Vui lòng nhập đầy đủ thông tin!";
        return;
    }

    // Giả lập gửi dữ liệu (ở đây bạn sẽ thay bằng fetch API hoặc Firebase)
    console.log({
        fullname,
        username,
        email,
        password,
        age,
        city,
        role
    });

    errorDiv.textContent = "";
    alert("Đăng ký thành công!");
});
