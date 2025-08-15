// Xử lý đăng nhập
document.getElementById("btnLogin").addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn form reload trang

    const email = document.getElementById("login_email").value.trim();
    const password = document.getElementById("login_password").value.trim();
    const errorDiv = document.getElementById("login_error");

    // Xóa lỗi cũ
    errorDiv.textContent = "";

    // Kiểm tra nhập đủ
    if (!email || !password) {
        errorDiv.textContent = "Vui lòng nhập đầy đủ email và mật khẩu!";
        return;
    }

    // Kiểm tra định dạng email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorDiv.textContent = "Email không hợp lệ!";
        return;
    }

    // Giả lập xử lý đăng nhập
    console.log("Email:", email);
    console.log("Password:", password);

    // Giả sử đăng nhập thành công
    alert("Đăng nhập thành công!");
    window.location.href = "vdv_dashboard.html"; // Chuyển hướng tới bảng điều khiển
});
