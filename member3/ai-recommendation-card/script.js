function addToCart(button) {
    button.textContent = "Added ✓";
    button.style.background = "#16a34a";

    document.getElementById("message").textContent =
        "Product added to your cart!";
}

function refreshRecommendations() {
    const container = document.getElementById("recommendationContainer");

    container.style.opacity = "0.4";

    setTimeout(() => {
        container.style.opacity = "1";

        document.getElementById("message").textContent =
            "✨ AI recommendations updated!";
    }, 700);
}