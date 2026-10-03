const input = document.querySelector(".input-area input");
const sendButton = document.querySelector(".send-button");
const messages = document.querySelector(".messages");
const newChatButton = document.querySelector(".new-chat");
const suggestionButtons = document.querySelectorAll(".suggestions button");
const themeButton = document.querySelector(".theme-button");
const historyButtons = document.querySelectorAll(".history-item");


function getAIResponse(message) {
    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! 👋 Nice to meet you. How can I help you today?";
    }

    if (text.includes("python")) {
        return "Python is a beginner-friendly programming language used for web development, data analysis, automation, AI, and machine learning.";
    }

    if (text.includes("ai") || text.includes("artificial intelligence")) {
        return "Artificial Intelligence is the field of creating computer systems that can perform tasks such as learning, reasoning, understanding language, and recognizing patterns.";
    }

    if (text.includes("code") || text.includes("coding")) {
        return "I can help you understand programming concepts, find errors, and build small projects step by step.";
    }

    if (text.includes("project")) {
        return "A good project idea is a student dashboard with authentication, data visualization, and an interactive user interface.";
    }

    return "Thanks for your message! I'm here to help you. Try asking me about AI, Python, coding, or project ideas.";
}


function sendMessage() {
    const messageText = input.value.trim();

    if (messageText === "") {
        return;
    }

    // Add user message
    const userMessage = document.createElement("div");
    userMessage.className = "message user";

    userMessage.innerHTML = `
        <div class="message-content">
            <strong>You</strong>
            <p>${messageText}</p>
        </div>
    `;

    messages.appendChild(userMessage);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;


    // Show typing indicator
    const typingMessage = document.createElement("div");
    typingMessage.className = "message assistant";
    typingMessage.id = "typing-message";

    typingMessage.innerHTML = `
        <div class="avatar">AI</div>
        <div class="message-content">
            <strong>AI Assistant</strong>
            <p>Typing...</p>
        </div>
    `;

    messages.appendChild(typingMessage);

    messages.scrollTop = messages.scrollHeight;


    // Generate AI response
    setTimeout(function() {

        typingMessage.remove();

        const aiMessage = document.createElement("div");
        aiMessage.className = "message assistant";

        aiMessage.innerHTML = `
            <div class="avatar">AI</div>
            <div class="message-content">
                <strong>AI Assistant</strong>
                <p>${getAIResponse(messageText)}</p>
            </div>
        `;

        messages.appendChild(aiMessage);

        messages.scrollTop = messages.scrollHeight;

    }, 1000);
}


// Send button
sendButton.addEventListener("click", sendMessage);


// Enter key
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});


// New Chat button
newChatButton.addEventListener("click", function() {
    messages.innerHTML = "";
    input.value = "";
});


// Suggested prompts
suggestionButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        input.value = button.textContent;
        input.focus();
    });
});


// Dark / Light mode
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});


// Recent chats
historyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        messages.innerHTML = "";

        const chatTitle = button.textContent;

        const chatMessage = document.createElement("div");
        chatMessage.className = "message assistant";

        chatMessage.innerHTML = `
            <div class="avatar">AI</div>
            <div class="message-content">
                <strong>AI Assistant</strong>
                <p>You opened the "${chatTitle}" conversation.</p>
            </div>
        `;

        messages.appendChild(chatMessage);
    });
});