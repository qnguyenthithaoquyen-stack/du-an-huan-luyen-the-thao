document.addEventListener("DOMContentLoaded", function () {
    const btnLogin = document.getElementById("btnLogin");

    btnLogin.addEventListener("click", function () {
        const email = document.getElementById("login_email").value.trim();
        const password = document.getElementById("login_password").value.trim();
        const errorDiv = document.getElementById("login_error");

        errorDiv.textContent = "";

        if (!email || !password) {
            errorDiv.textContent = "Vui lòng nhập đầy đủ email và mật khẩu!";
            return;
        }

        alert("Đăng nhập thành công!");
        window.location.href = "vdv_dashboard.html";
    });
});
