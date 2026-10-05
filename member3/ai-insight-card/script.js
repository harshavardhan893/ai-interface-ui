function refreshInsight() {

    const message = document.getElementById("message");
    const confidenceBar = document.getElementById("confidenceBar");
    const confidenceValue = document.getElementById("confidenceValue");

    message.textContent = "Analyzing your latest data...";

    confidenceBar.style.width = "20%";
    confidenceValue.textContent = "20%";

    setTimeout(function () {

        confidenceBar.style.width = "94%";
        confidenceValue.textContent = "94%";

        message.textContent = "✨ AI insight refreshed successfully!";

    }, 1000);
}


function takeAction() {

    const message = document.getElementById("message");

    message.textContent =
        "✓ Recommendation added to your action plan.";

}