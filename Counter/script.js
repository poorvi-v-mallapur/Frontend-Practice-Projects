let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let counter = document.getElementById("count");
let themeToggle = document.getElementById("themeToggle");

let count = 0;

// Reusable animation function
function bump() {
    counter.classList.add("bump");
    setTimeout(() => counter.classList.remove("bump"), 150);
}

increment.addEventListener("click", () => {
    count++;
    counter.innerText = count;
    bump();
});

decrement.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counter.innerText = count;
        bump();
    }
});

reset.addEventListener("click", () => {
    count = 0;
    counter.innerText = count;
    bump();
});

// Dark mode toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
