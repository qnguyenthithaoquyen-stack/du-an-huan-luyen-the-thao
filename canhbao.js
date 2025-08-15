document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("btnBackToDashboardFromWarnings");
  backBtn?.addEventListener("click", () => {
    // Điều hướng về bảng điều khiển VĐV (đổi link nếu bạn muốn về trang khác)
    window.location.href = "vdv_dashboard.html";
  });
});
