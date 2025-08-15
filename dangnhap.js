// js/dangnhap.js
(function () {
  console.log("[dangnhap.js] Loaded"); // kiểm tra đã tải

  function showError(msg) {
    const errorDiv = document.getElementById("login_error");
    if (errorDiv) errorDiv.textContent = msg || "";
  }

  function onLoginClick(e) {
    e.preventDefault();

    const emailEl = document.getElementById("login_email");
    const passEl  = document.getElementById("login_password");

    const email = (emailEl?.value || "").trim();
    const password = (passEl?.value || "").trim();

    showError("");

    if (!email || !password) {
      showError("Vui lòng nhập đầy đủ email và mật khẩu!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showError("Email không hợp lệ!");
      return;
    }

    // Giả lập đăng nhập OK (vì GitHub Pages không có backend)
    try {
      // Lưu session đơn giản để các trang khác nhận biết
      localStorage.setItem(
        "authUser",
        JSON.stringify({ email, role: "athlete", loggedInAt: Date.now() })
      );
    } catch (_) {}

    alert("Đăng nhập thành công!");
    // Điều hướng tới dashboard VĐV (đổi link nếu bạn muốn sang trang khác)
    window.location.href = "vdv_dashboard.html";
  }

  function attach() {
    const btn = document.getElementById("btnLogin");
    if (!btn) {
      console.error("[dangnhap.js] Không tìm thấy #btnLogin");
      return;
    }
    btn.addEventListener("click", onLoginClick);

    // Cho phép Enter để đăng nhập
    const passEl = document.getElementById("login_password");
    passEl?.addEventListener("keypress", (ev) => {
      if (ev.key === "Enter") onLoginClick(ev);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attach);
  } else {
    attach();
  }
})();
