const commandInput = document.getElementById("commandInput");
const runButton = document.getElementById("runButton");
const responseBox = document.getElementById("responseBox");
const suggestionButtons = document.querySelectorAll(".suggestion");


function getAIResponse(command) {

    const text = command.toLowerCase();

    if (text.includes("artificial intelligence") || text.includes("ai")) {
        return "Artificial Intelligence is technology that enables computers to perform tasks such as learning, reasoning, understanding language, and recognizing patterns.";
    }

    if (text.includes("code") || text.includes("coding")) {
        return "I can help you understand programming concepts, find errors, and build projects step by step.";
    }

    if (text.includes("project")) {
        return "A good student project could be an interactive dashboard that combines data visualization with a simple AI assistant.";
    }

    if (text.includes("summarize") || text.includes("summary")) {
        return "A summary presents the most important ideas from information in a shorter and easier-to-understand form.";
    }

    return "I received your command. Try asking about AI, coding, projects, or summarization.";
}


function runCommand() {

    const command = commandInput.value.trim();

    if (command === "") {
        responseBox.innerHTML = `
            <h2>AI Response</h2>
            <p>Please enter a command first.</p>
        `;
        return;
    }

    responseBox.innerHTML = `
        <h2>AI Response</h2>
        <p>Thinking...</p>
    `;

    setTimeout(function() {

        const response = getAIResponse(command);

        responseBox.innerHTML = `
            <h2>AI Response</h2>
            <p>${response}</p>
        `;

    }, 700);
}


// Run button
runButton.addEventListener("click", runCommand);


// Enter key
commandInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        runCommand();
    }

});


// Suggestion buttons
suggestionButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        commandInput.value = button.textContent.trim();

        commandInput.focus();

    });

});