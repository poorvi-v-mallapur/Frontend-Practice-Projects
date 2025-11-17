const inputs = document.querySelectorAll('#main input[type="text"]');
const submitBtn = document.getElementById("submit");
const cardsContainer = document.getElementById("cards-container");

submitBtn.addEventListener("click", () => {
    // Trim input values
    inputs.forEach(inp => inp.value = inp.value.trim());

    // Extract values
    const [img, name, job, info] = [...inputs].map(inp => inp.value);

    // Validation
    if (!img || !name || !job || !info) {
        alert("⚠️ Please fill in every field!");
        return;
    }

    // Create the card
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="profile">
            <img src="${img}" alt="profile pic">
        </div>
        <h2>${name}</h2>
        <h4>${job}</h4>
        <p>${info}</p>
    `;

    // Add to container
    cardsContainer.appendChild(card);

    // Clear inputs
    inputs.forEach(inp => inp.value = "");
});
