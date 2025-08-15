
// JS cho trang Lịch sử — tách riêng để xử lý hành vi nếu cần
document.addEventListener("DOMContentLoaded", () => {
  // Nút quay lại bảng điều khiển (giữ giao diện, chỉ thêm xử lý điều hướng nếu bạn muốn)
  const backBtn = document.getElementById("btnBackToDashboardFromHistory");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      // Đổi sang đường dẫn trang bảng điều khiển thực tế của bạn nếu khác
      window.location.href = "vdv_dashboard.html";
    });
  }

  // Ví dụ ẩn/hiện nút theo trạng thái đăng nhập (tùy bạn nối logic thật)
  const btnLogin = document.getElementById("btnLoginNav");
  const btnLogout = document.getElementById("btnLogoutNav");
  const dashboardLink = document.getElementById("nav-dashboard-link");

  const isLoggedIn = false; // Thay bằng kiểm tra thực tế

  if (btnLogin && btnLogout && dashboardLink) {
    if (isLoggedIn) {
      btnLogin.classList.add("hidden");
      btnLogout.classList.remove("hidden");
      dashboardLink.classList.remove("hidden");
    } else {
      btnLogin.classList.remove("hidden");
      btnLogout.classList.add("hidden");
      dashboardLink.classList.add("hidden");
    }
  }
});
