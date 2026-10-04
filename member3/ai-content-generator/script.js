let selectedType = "Blog Post";


function selectType(button, type) {

    const buttons = document.querySelectorAll(".type-btn");

    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    selectedType = type;
}


function updateCharacters() {

    const topic = document.getElementById("topic");

    const count = topic.value.length;

    document.getElementById("characters").textContent = count;

}


function generateContent() {

    const topic = document.getElementById("topic").value.trim();

    const tone = document.getElementById("tone").value;

    const length = document.getElementById("length").value;

    const output = document.getElementById("output");

    const actions = document.getElementById("outputActions");

    const message = document.getElementById("message");


    if (topic === "") {

        message.textContent =
            "Please enter a topic first.";

        return;
    }


    message.textContent =
        "✨ AI is generating your content...";


    output.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">✦</div>
            <h3>Generating...</h3>
            <p>AI is creating your ${selectedType.toLowerCase()}.</p>
        </div>
    `;


    actions.style.display = "none";


    setTimeout(function () {

        let title = "";

        if (selectedType === "Blog Post") {
            title = "How AI Is Transforming Modern Education";
        }

        else if (selectedType === "Social Media") {
            title = "The Future of AI Is Here";
        }

        else if (selectedType === "Email") {
            title = "Discover the Power of Artificial Intelligence";
        }

        else {
            title = "Innovative AI-Powered Solution";
        }


        output.innerHTML = `
            <article class="generated-content">

                <h3>${title}</h3>

                <p>
                    Artificial intelligence is changing the way people
                    learn, work, communicate, and solve problems.
                    ${topic} is becoming an important part of this
                    transformation.
                </p>

                <p>
                    With intelligent tools and personalized experiences,
                    users can complete tasks more efficiently while
                    discovering new possibilities.
                </p>

                <p>
                    The future will continue to combine human creativity
                    with AI-powered technology to create smarter and
                    more accessible digital experiences.
                </p>

                <p>
                    This ${selectedType.toLowerCase()} was generated
                    using a ${tone.toLowerCase()} tone and
                    ${length.toLowerCase()} length.
                </p>

            </article>
        `;


        actions.style.display = "flex";

        message.textContent =
            "✨ Content generated successfully.";

    }, 1000);
}


function copyContent() {

    const output = document.getElementById("output");

    const text = output.innerText;

    navigator.clipboard.writeText(text);

    const message = document.getElementById("message");

    message.textContent =
        "✓ Content copied to clipboard.";

    setTimeout(function () {

        message.textContent = "";

    }, 2000);
}