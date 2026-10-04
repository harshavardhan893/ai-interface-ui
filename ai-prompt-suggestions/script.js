function selectPrompt(prompt) {
    const selectedPrompt = document.getElementById("selectedPrompt");

    selectedPrompt.innerHTML = `
        <h2>Selected Prompt</h2>
        <p><strong>Your Prompt:</strong></p>
        <p>${prompt}</p>
    `;
}