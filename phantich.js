document.addEventListener("DOMContentLoaded", () => {
    const analysisForm = document.getElementById("analysisForm");
    const analysisResult = document.getElementById("analysisResult");
    const btnToggleHistory = document.getElementById("btnToggleHistory");
    const historySection = document.getElementById("history-section");
    const btnBackToDashboard = document.getElementById("btnBackToDashboard");

    // Xử lý submit form
    analysisForm.addEventListener("submit", (e) => {
        e.preventDefault();
        analysisResult.classList.remove("hidden");

        // Ví dụ: vẽ biểu đồ
        const ctx = document.getElementById("accuracyChart").getContext("2d");
        new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Lần 1", "Lần 2", "Lần 3", "Lần 4", "Lần 5"],
                datasets: [{
                    label: "Tỉ lệ đúng (%)",
                    data: [75, 68, 80, 72, 85],
                    borderColor: "rgb(20, 184, 166)",
                    backgroundColor: "rgba(20, 184, 166, 0.2)",
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true }
                },
                scales: {
                    y: { min: 0, max: 100 }
                }
            }
        });
    });

    // Xem/ẩn lịch sử
    btnToggleHistory.addEventListener("click", () => {
        historySection.classList.toggle("hidden");
    });

    // Quay lại bảng điều khiển
    btnBackToDashboard.addEventListener("click", () => {
        window.location.href = "vdv_dashboard.html";
    });
});
