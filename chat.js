document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chat-input");
    const btnSend = document.getElementById("btnSendMessage");
    const chatContainer = document.getElementById("chat-messages-container");
    const btnBack = document.getElementById("btnBackToDashboardFromChat");

    // Hàm thêm tin nhắn
    function addMessage(text, sender = "user") {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("mb-3", "flex", sender === "user" ? "justify-end" : "justify-start");

        msgDiv.innerHTML = `
            <div class="max-w-[70%] p-3 rounded-lg shadow ${
                sender === "user" ? "bg-teal-500 text-white" : "bg-white text-gray-800"
            }">
                ${text}
            </div>
        `;
        chatContainer.appendChild(msgDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Gửi tin nhắn
    btnSend.addEventListener("click", () => {
        const text = chatInput.value.trim();
        if (text) {
            addMessage(text, "user");
            chatInput.value = "";

            // Giả lập phản hồi của HLV
            setTimeout(() => {
                addMessage("HLV đã nhận tin nhắn của bạn.", "coach");
            }, 1000);
        }
    });

    // Nhấn Enter để gửi
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            btnSend.click();
        }
    });

    // Quay lại Bảng điều khiển
    btnBack.addEventListener("click", () => {
        window.location.href = "vdv_dashboard.html";
    });
});
