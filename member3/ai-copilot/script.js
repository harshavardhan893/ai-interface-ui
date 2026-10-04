const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");
const typing = document.getElementById("typing");


function sendMessage() {

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    addUserMessage(text);

    input.value = "";

    typing.style.display = "flex";

    messages.scrollTop = messages.scrollHeight;

    setTimeout(function () {

        typing.style.display = "none";

        addAIMessage(
            "I understand your request. I can help you analyze it, organize the information, and suggest useful next steps."
        );

        messages.scrollTop = messages.scrollHeight;

    }, 1200);
}


function addUserMessage(text) {

    const message = document.createElement("div");

    message.className = "user-message";

    message.innerHTML = `
        <div class="message-bubble">
            ${escapeHTML(text)}
        </div>
    `;

    messages.appendChild(message);
}


function addAIMessage(text) {

    const message = document.createElement("div");

    message.className = "ai-message";

    message.innerHTML = `
        <div class="message-bubble">
            ✦ ${text}
        </div>
    `;

    messages.appendChild(message);
}


function useSuggestion(text) {

    input.value = text;

    input.focus();

}


function newChat() {

    messages.innerHTML = `
        <div class="welcome">

            <div class="welcome-icon">
                ✦
            </div>

            <h2>How can I help you today?</h2>

            <p>
                Ask me anything, analyze your data, create content,
                or brainstorm new ideas.
            </p>

        </div>
    `;

    input.value = "";

}


function handleKey(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();

    }
}


function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}