document.addEventListener("DOMContentLoaded", () => {
    const athleteList = document.getElementById("athlete-list");
    const metricsDisplay = document.getElementById("metrics-display");
    const metricsPlaceholder = document.getElementById("metrics-placeholder");
    const trackingName = document.getElementById("tracking-athlete-name");

    // Ví dụ dữ liệu vận động viên
    const athletes = [
        { name: "Nguyễn Văn A", heartRate: 78, bloodOxygen: 97, speed: 15, bloodPressure: "120/80" },
        { name: "Trần Thị B", heartRate: 85, bloodOxygen: 96, speed: 13, bloodPressure: "118/79" }
    ];

    // Hiển thị danh sách VĐV
    function renderAthleteList() {
        athleteList.innerHTML = "";
        athletes.forEach((athlete, index) => {
            const li = document.createElement("li");
            li.className = "p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100";
            li.textContent = athlete.name;
            li.addEventListener("click", () => selectAthlete(index));
            athleteList.appendChild(li);
        });
    }

    // Chọn VĐV để xem chỉ số
    function selectAthlete(index) {
        const athlete = athletes[index];
        trackingName.textContent = `Theo dõi: ${athlete.name}`;
        document.getElementById("metric-heartRate").innerHTML = `${athlete.heartRate} <span class="text-base font-normal">bpm</span>`;
        document.getElementById("metric-bloodOxygen").innerHTML = `${athlete.bloodOxygen} <span class="text-base font-normal">%</span>`;
        document.getElementById("metric-speed").innerHTML = `${athlete.speed} <span class="text-base font-normal">km/h</span>`;
        document.getElementById("metric-bloodPressure").textContent = athlete.bloodPressure;

        metricsDisplay.classList.remove("hidden");
        metricsPlaceholder.classList.add("hidden");
    }

    // Nút thêm VĐV
    document.getElementById("btnAddAthlete").addEventListener("click", () => {
        const name = prompt("Nhập tên vận động viên mới:");
        if (name) {
            athletes.push({ name, heartRate: "--", bloodOxygen: "--", speed: "--", bloodPressure: "--/--" });
            renderAthleteList();
        }
    });

    // Nút chức năng
    document.getElementById("btnCoachViewChart").addEventListener("click", () => {
        alert("Chức năng xem biểu đồ đang phát triển.");
    });
    document.getElementById("btnCoachSendMessage").addEventListener("click", () => {
        alert("Gửi tin nhắn cho VĐV.");
    });
    document.getElementById("btnCoachSendWorkout").addEventListener("click", () => {
        alert("Gửi bài tập cho VĐV.");
    });
    document.getElementById("btnCoachSaveHistory").addEventListener("click", () => {
        alert("Lưu lịch sử thành tích của VĐV.");
    });

    // Render ban đầu
    renderAthleteList();
});
