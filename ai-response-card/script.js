function copyResponse() {
    const responseText = document.getElementById("responseText").innerText;

    navigator.clipboard.writeText(responseText)
        .then(() => {
            alert("Response copied!");
        })
        .catch(() => {
            alert("Unable to copy the response.");
        });
}

function regenerateResponse() {
    const responseText = document.getElementById("responseText");

    responseText.innerText =
        "Here is a regenerated AI response. Artificial Intelligence helps computers understand information, learn from data, and perform useful tasks.";
}