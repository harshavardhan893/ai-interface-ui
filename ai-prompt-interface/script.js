function generateResponse() {
    const promptInput = document.getElementById("promptInput");
    const response = document.getElementById("response");

    const prompt = promptInput.value.trim();

    if (prompt === "") {
        response.innerHTML = `
            <h2>AI Response</h2>
            <p>Please enter a prompt first.</p>
        `;
        return;
    }

    response.innerHTML = `
        <h2>AI Response</h2>
        <p>
            Here is an AI-generated response for your prompt:
            <strong>${prompt}</strong>
        </p>
        <p>
            This demo interface can be connected to an AI API
            to generate real responses.
        </p>
    `;
}