const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");
const quickButtons = document.querySelectorAll(".quick-button");


function getSearchResult(query) {

    const text = query.toLowerCase();

    if (text.includes("artificial intelligence") || text.includes("ai")) {
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


function performSearch() {

    const query = searchInput.value.trim();

    if (query === "") {
        results.innerHTML = `
            <div class="result-placeholder">
                <div class="large-icon">⚠️</div>
                <h2>Enter a search query</h2>
                <p>Please type something in the search box.</p>
            </div>
        `;
        return;
    }

    results.innerHTML = `
        <div class="result-placeholder">
            <div class="large-icon">⏳</div>
            <h2>Searching...</h2>
            <p>AI is finding relevant information.</p>
        </div>
    `;

    setTimeout(function() {

        const result = getSearchResult(query);

        results.innerHTML = `
            <div class="result-placeholder">
                <div class="large-icon">✨</div>
                <h2>${result.title}</h2>
                <p>${result.description}</p>
            </div>
        `;

    }, 700);
}


// Search button
searchButton.addEventListener("click", performSearch);


// Enter key
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