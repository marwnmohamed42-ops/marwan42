document.getElementById("send").addEventListener("click", function () {
    let message = document.getElementById("message").value;
    
    if (message.trim() === "") {
        alert("اكتب رسالة أولاً!");
        return;
    }

    let chatBox = document.getElementById("chat-box");
    
    // رسالة المستخدم
    let userMsg = document.createElement("p");
    userMsg.className = "user-msg";
    userMsg.textContent = "أنت: " + message;
    chatBox.appendChild(userMsg);

    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById("message").value = "";

    // ✅ رد تلقائي من البوت
    setTimeout(() => {
        let botReply = document.createElement("p");
        botReply.className = "bot-msg";

        if (message.includes("ازيك") || message.includes("hi") || message.includes("hello")) {
            botReply.textContent = "🤖 البوت: تمام وانت؟";
        } else if (message.includes("اسمك")) {
            botReply.textContent = "🤖 البوت: اسمي روبو مروان!";
        } else {
            botReply.textContent = "🤖 البوت: مش فاهم، وضح أكتر 😊";
        }

        chatBox.appendChild(botReply);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500); // تأخير بسيط للرد
});
