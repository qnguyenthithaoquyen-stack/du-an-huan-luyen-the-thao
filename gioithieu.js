// Xử lý riêng cho trang giới thiệu (nếu cần)
// Ví dụ: kiểm tra trạng thái đăng nhập để ẩn/hiện nút
document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("btnLoginNav");
    const btnLogout = document.getElementById("btnLogoutNav");
    const dashboardLink = document.getElementById("nav-dashboard-link");

    // Ví dụ giả lập trạng thái đăng nhập
    const isLoggedIn = false; // thay bằng kiểm tra thực tế

    if (isLoggedIn) {
        btnLogin.classList.add("hidden");
        btnLogout.classList.remove("hidden");
        dashboardLink.classList.remove("hidden");
    } else {
        btnLogin.classList.remove("hidden");
        btnLogout.classList.add("hidden");
        dashboardLink.classList.add("hidden");
    }
});
