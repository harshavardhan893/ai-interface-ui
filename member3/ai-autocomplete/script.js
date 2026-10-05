const editor = document.getElementById("editor");
const suggestionBox = document.getElementById("suggestionBox");
const wordCount = document.getElementById("wordCount");
const message = document.getElementById("message");

const suggestions = [
    "Our project aims to create a simple and effective solution for modern users.",
    "Our project focuses on improving productivity through intelligent technology.",
    "Our project combines innovative ideas with a clean and user-friendly experience."
];


function showSuggestions() {

    updateWordCount();

    if (editor.value.trim() !== "") {
        suggestionBox.style.display = "block";
    } else {
        suggestionBox.style.display = "block";
    }
}


function acceptSuggestion(index) {

    const currentText = editor.value.trim();

    if (currentText.length > 0) {
        editor.value = currentText + " " + suggestions[index];
    } else {
        editor.value = suggestions[index];
    }

    updateWordCount();

    message.textContent = "✨ AI suggestion accepted.";

    setTimeout(function () {
        message.textContent = "";
    }, 2000);

    editor.focus();
}


function generateSuggestion() {

    message.textContent = "✨ AI is generating a suggestion...";

    setTimeout(function () {

        suggestionBox.style.display = "block";

        message.textContent = "New AI suggestions are ready.";

    }, 700);
}


function clearEditor() {

    editor.value = "";

    updateWordCount();

    message.textContent = "Editor cleared.";

    setTimeout(function () {
        message.textContent = "";
    }, 1500);

    editor.focus();
}


function updateWordCount() {

    const text = editor.value.trim();

    if (text === "") {
        wordCount.textContent = "0 words";
        return;
    }

    const words = text.split(/\s+/).length;

    wordCount.textContent =
        words + (words === 1 ? " word" : " words");
}


function handleKey(event) {

    if (event.key === "Tab") {

        event.preventDefault();

        acceptSuggestion(0);
    }
}