// =========================
// AI CHAT
// =========================

const input = document.querySelector(".input-area input");
const sendButton = document.querySelector(".send-button");
const messages = document.querySelector(".messages");
const newChatButton = document.querySelector(".new-chat");
const suggestionButtons = document.querySelectorAll(".suggestions button");
const historyButtons = document.querySelectorAll(".history-item");
const themeButton = document.querySelector(".theme-button");


// AI Chat responses
function getChatResponse(message) {

    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! 👋 Nice to meet you. How can I help you today?";
    }

    if (text.includes("python")) {
        return "Python is a beginner-friendly programming language used for web development, data analysis, automation, AI, and machine learning.";
    }

    if (
        text.includes("ai") ||
        text.includes("artificial intelligence")
    ) {
        return "Artificial Intelligence is the field of creating computer systems that can perform tasks such as learning, reasoning, understanding language, and recognizing patterns.";
    }

    if (
        text.includes("code") ||
        text.includes("coding")
    ) {
        return "I can help you understand programming concepts, find errors, and build small projects step by step.";
    }

    if (text.includes("project")) {
        return "A good student project is an interactive dashboard with data visualization, useful features, and a simple AI assistant.";
    }

    return "Thanks for your message! I'm here to help you. Try asking me about AI, Python, coding, or project ideas.";
}


// Send chat message
function sendMessage() {

    const messageText = input.value.trim();

    if (messageText === "") {
        return;
    }

    // User message
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


    // Typing message
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


    // AI response
    setTimeout(function () {

        typingMessage.remove();

        const aiMessage = document.createElement("div");

        aiMessage.className = "message assistant";

        aiMessage.innerHTML = `
            <div class="avatar">AI</div>

            <div class="message-content">
                <strong>AI Assistant</strong>

                <p>
                    ${getChatResponse(messageText)}
                </p>
            </div>
        `;

        messages.appendChild(aiMessage);

        messages.scrollTop = messages.scrollHeight;

    }, 800);
}


// Send button
sendButton.addEventListener("click", sendMessage);


// Enter key
input.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// New chat
newChatButton.addEventListener("click", function() {

    messages.innerHTML = "";

    input.value = "";

});


// Chat suggestions
suggestionButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        input.value = button.textContent.trim();

        input.focus();

    });

});


// Chat history
historyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        messages.innerHTML = "";

        const chatTitle = button.textContent.trim();

        const chatMessage = document.createElement("div");

        chatMessage.className = "message assistant";

        chatMessage.innerHTML = `
            <div class="avatar">AI</div>

            <div class="message-content">

                <strong>AI Assistant</strong>

                <p>
                    You opened the "${chatTitle}" conversation.
                </p>

            </div>
        `;

        messages.appendChild(chatMessage);

    });

});


// =========================
// DARK MODE
// =========================

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";

    } else {

        themeButton.textContent = "🌙 Dark Mode";

    }

});


// =========================
// NAVIGATION
// =========================

function showSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// =========================
// AI COMMAND BAR
// =========================

const commandInput = document.getElementById("commandInput");
const runButton = document.getElementById("runButton");
const responseBox = document.getElementById("responseBox");
const commandSuggestions =
    document.querySelectorAll(".command-suggestion");


// Command responses
function getCommandResponse(command) {

    const text = command.toLowerCase();

    if (
        text.includes("artificial intelligence") ||
        text.includes("ai")
    ) {
        return "Artificial Intelligence is technology that enables computers to perform tasks such as learning, reasoning, understanding language, and recognizing patterns.";
    }

    if (
        text.includes("code") ||
        text.includes("coding")
    ) {
        return "I can help you understand programming concepts, find errors, and build projects step by step.";
    }

    if (text.includes("project")) {
        return "A good student project could be an interactive dashboard that combines data visualization with a simple AI assistant.";
    }

    if (
        text.includes("summarize") ||
        text.includes("summary")
    ) {
        return "A summary presents the most important ideas from information in a shorter and easier-to-understand form.";
    }

    return "I received your command. Try asking about AI, coding, projects, or summarization.";
}


// Run command
function runCommand() {

    const command = commandInput.value.trim();

    if (command === "") {

        responseBox.innerHTML = `
            <h3>AI Response</h3>
            <p>Please enter a command first.</p>
        `;

        return;
    }


    responseBox.innerHTML = `
        <h3>AI Response</h3>
        <p>Thinking...</p>
    `;


    setTimeout(function() {

        const response = getCommandResponse(command);

        responseBox.innerHTML = `
            <h3>AI Response</h3>
            <p>${response}</p>
        `;

    }, 700);

}


// Run button
runButton.addEventListener("click", runCommand);


// Command Enter key
commandInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        runCommand();
    }

});


// Command suggestions
commandSuggestions.forEach(function(button) {

    button.addEventListener("click", function() {

        commandInput.value = button.textContent.trim();

        commandInput.focus();

    });

});


// =========================
// AI SEARCH
// =========================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");
const quickButtons =
    document.querySelectorAll(".quick-button");


// Search results
function getSearchResult(query) {

    const text = query.toLowerCase();

    if (
        text.includes("artificial intelligence") ||
        text.includes("ai")
    ) {

        return {
            title: "Artificial Intelligence",
            description:
                "Artificial Intelligence is a field of computer science that enables machines to perform tasks such as learning, reasoning, understanding language, and recognizing patterns."
        };

    }


    if (text.includes("python")) {

        return {
            title: "Python Programming",
            description:
                "Python is a high-level programming language known for its simple syntax. It is widely used for web development, automation, data analysis, artificial intelligence, and machine learning."
        };

    }


    if (text.includes("project")) {

        return {
            title: "Project Ideas",
            description:
                "Students can build projects such as dashboards, recommendation systems, AI assistants, data analysis applications, and interactive web applications."
        };

    }


    return {
        title: "Search Result",
        description:
            "Here is a sample AI-powered result for your search. Try searching for AI, Python, or project ideas."
    };

}


// Perform search
function performSearch() {

    const query = searchInput.value.trim();

    if (query === "") {

        results.innerHTML = `
            <div class="result-placeholder">

                <div class="large-icon">
                    ⚠️
                </div>

                <h3>
                    Enter a search query
                </h3>

                <p>
                    Please type something in the search box.
                </p>

            </div>
        `;

        return;
    }


    results.innerHTML = `
        <div class="result-placeholder">

            <div class="large-icon">
                ⏳
            </div>

            <h3>
                Searching...
            </h3>

            <p>
                AI is finding relevant information.
            </p>

        </div>
    `;


    setTimeout(function() {

        const result = getSearchResult(query);

        results.innerHTML = `
            <div class="result-placeholder">

                <div class="large-icon">
                    ✨
                </div>

                <h3>
                    ${result.title}
                </h3>

                <p>
                    ${result.description}
                </p>

            </div>
        `;

    }, 700);

}


// Search button
searchButton.addEventListener("click", performSearch);


// Search Enter key
searchInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        performSearch();
    }

});


// Quick searches
quickButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        searchInput.value = button.textContent.trim();

        performSearch();

    });

});