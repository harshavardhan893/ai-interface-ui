function searchAI() {
    const searchInput = document.getElementById("searchInput");
    const results = document.getElementById("results");

    const query = searchInput.value.trim();

    if (query === "") {
        results.innerHTML = "<p>Please enter something to search.</p>";
        return;
    }

    results.innerHTML = `
        <div class="result-card">
            <h3>${query} - Overview</h3>
            <p>This is an AI-generated search result related to "${query}".</p>
            <small>AI Knowledge Source</small>
        </div>

        <div class="result-card">
            <h3>Understanding ${query}</h3>
            <p>Explore important information and concepts related to your search.</p>
            <small>AI Research Result</small>
        </div>

        <div class="result-card">
            <h3>More about ${query}</h3>
            <p>This result provides additional context and useful information about your query.</p>
            <small>AI Summary</small>
        </div>
    `;
}