document.addEventListener("DOMContentLoaded", () => {
  const goalModal = document.getElementById("goalModal");
  const btnChooseGoal = document.getElementById("btnChooseGoal");
  const closeGoalModal = document.getElementById("closeGoalModal");
  const todayGoal = document.getElementById("today-goal");
  const goalOptions = document.querySelectorAll(".goal-option");

  // Mở modal chọn mục tiêu
  btnChooseGoal?.addEventListener("click", () => {
    goalModal.classList.remove("hidden");
    goalModal.classList.add("flex");
  });

  // Đóng modal
  closeGoalModal?.addEventListener("click", () => {
    goalModal.classList.add("hidden");
    goalModal.classList.remove("flex");
  });

  // Chọn mục tiêu -> cập nhật text và đóng modal
  goalOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const goalText = option.getAttribute("data-goal") || "";
      todayGoal.textContent = goalText || "Chưa có mục tiêu nào được chọn.";
      goalModal.classList.add("hidden");
      goalModal.classList.remove("flex");
    });
  });

  // Điều hướng các nút chức năng (giữ nguyên giao diện)
  document.getElementById("btnDailyHistory")?.addEventListener("click", () => {
    window.location.href = "lichsu.html";
  });

  document.getElementById("btnAnalysis")?.addEventListener("click", () => {
    window.location.href = "phantich.html";
  });

  document.getElementById("btnChat")?.addEventListener("click", () => {
    window.location.href = "chat.html";
  });

  document.getElementById("btnAthleteWarnings")?.addEventListener("click", () => {
    alert("Hiển thị cảnh báo cho VĐV!");
  });
});
