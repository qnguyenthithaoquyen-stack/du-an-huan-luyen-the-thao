document.addEventListener("DOMContentLoaded", () => {
    const citySelect = document.getElementById("coach_city_filter");
    const coachList = document.getElementById("coach-list");

    // Ví dụ danh sách tỉnh thành
    const cities = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Cần Thơ", "Hải Phòng"];

    // Thêm options vào select
    citySelect.innerHTML = `<option value="">-- Tất cả --</option>`;
    cities.forEach(city => {
        const opt = document.createElement("option");
        opt.value = city;
        opt.textContent = city;
        citySelect.appendChild(opt);
    });

    // Ví dụ dữ liệu HLV
    const coaches = [
        { name: "Nguyễn Văn A", city: "Hà Nội", desc: "Chuyên môn: Sức bền" },
        { name: "Trần Thị B", city: "Hồ Chí Minh", desc: "Chuyên môn: Phục hồi" },
        { name: "Lê Văn C", city: "Đà Nẵng", desc: "Chuyên môn: Tốc độ" }
    ];

    function renderCoaches(filterCity = "") {
        coachList.innerHTML = "";
        const filtered = filterCity
            ? coaches.filter(c => c.city === filterCity)
            : coaches;

        if (filtered.length === 0) {
            coachList.innerHTML = `<p class="text-center text-gray-500">Không tìm thấy huấn luyện viên.</p>`;
            return;
        }

        filtered.forEach(coach => {
            const div = document.createElement("div");
            div.className = "p-4 border rounded-lg hover:shadow-lg transition-shadow";
            div.innerHTML = `
                <h3 class="text-lg font-bold">${coach.name}</h3>
                <p class="text-sm text-gray-500">${coach.city}</p>
                <p class="text-sm mt-1">${coach.desc}</p>
            `;
            coachList.appendChild(div);
        });
    }

    // Lọc HLV khi chọn tỉnh thành
    citySelect.addEventListener("change", e => {
        renderCoaches(e.target.value);
    });

    // Hiển thị toàn bộ HLV ban đầu
    renderCoaches();
});

