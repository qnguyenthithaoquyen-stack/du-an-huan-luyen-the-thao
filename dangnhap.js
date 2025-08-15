// js/dangnhap.js

function attachLoginHandler() {
  const btn = document.getElementById("btnLogin");
  if (!btn) {
    console.error("Không tìm thấy #btnLogin — kiểm tra lại id trong HTML.");
    return;
  }

  btn.addEventListener("click", (e) => {
    e.preventDefault(); // tránh reload/trôi trang

    const email = document.getElementById("login_email")?.value.trim() || "";
    const password = document.getElementById("login_password")?.value.trim() || "";
    const errorDiv = document.getElementById("login_error");

    // Xóa lỗi cũ
    if (errorDiv) errorDiv.textContent = "";

    // Kiểm tra rỗng
    if (!email || !password) {
      if (errorDiv) errorDiv.textContent = "Vui lòng nhập đầy đủ email và mật khẩu!";
      return;
    }

    // Kiểm tra định dạng email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      if (errorDiv) errorDiv.textContent = "Email không hợp lệ!";
      return;
    }

    // Giả lập đăng nhập OK
    alert("Đăng nhập thành công!");
    window.location.href = "vdv_dashboard.html";
  });
}

// Đảm bảo handler luôn được gắn (dù DOM đã sẵn hay chưa)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", attachLoginHandler);
} else {
  attachLoginHandler();
}
