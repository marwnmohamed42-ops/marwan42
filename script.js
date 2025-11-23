const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "user-msg" : "bot-msg";
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener("click", () => {
    const text = userInput.value.trim();
    if (text === "") return;

    addMessage("user", text);
    botReply(text);
    userInput.value = "";
});

function botReply(userText) {
    let reply = "";

    if (userText.includes("hello") || userText.includes("hi") || userText.includes("سلام")) {
        reply = "اهلا بيك 😊";
    } else if (userText.includes("اسمك") || userText.includes("انت مين")) {
        reply = "انا روبوت تجريبي بسيط 😎";
    } else {
        reply = "مش فاهم قصدك، ممكن توضح أكتر؟ 🤔";
    }

    setTimeout(() => addMessage("bot", reply), 500);
}
