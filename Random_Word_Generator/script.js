let btn = document.querySelector("#wordBtn");

let words = [
    'Innovative', 'Passionate', 'Dedicated', 'Creative', 'Reliable',
    'Adaptable', 'Collaborative', 'Proactive', 'Detail-oriented', 'Empathetic'
];

btn.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * words.length);

    let h1 = document.createElement("h1");
    h1.textContent = words[randomIndex];

    document.body.appendChild(h1);

    // Random color
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    h1.style.color = `rgb(${x}, ${y}, ${z})`;

    // Prevent placement outside the screen
    let maxX = window.innerWidth - h1.offsetWidth;
    let maxY = window.innerHeight - h1.offsetHeight;
    let left = Math.random() * maxX;
    let top = Math.random() * maxY;

    h1.style.left = `${left}px`;
    h1.style.top = `${top}px`;

    // Limit number of <h1> elements on screen (to avoid chaos)
    if (document.querySelectorAll("h1").length > 30) {
        document.body.removeChild(document.querySelector("h1"));
    }
});
