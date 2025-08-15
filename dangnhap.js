// Xử lý đăng nhập
document.getElementById("btnLogin").addEventListener("click", function () {
    const email = document.getElementById("login_email").value.trim();
    const password = document.getElementById("login_password").value.trim();
    const errorDiv = document.getElementById("login_error");

    if (!email || !password) {
        errorDiv.textContent = "Vui lòng nhập đầy đủ email và mật khẩu!";
        return;
    }

    // Giả lập xử lý đăng nhập
    console.log("Email:", email);
    console.log("Password:", password);

    // Xóa lỗi cũ
    errorDiv.textContent = "";
    alert("Đăng nhập thành công!");
});
