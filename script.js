const button = document.getElementById("celebrateBtn");
const confettiContainer = document.getElementById("confetti");

function createConfetti(amount = 90) {
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";

    const size = Math.random() * 8 + 5;
    piece.style.width = `${size}px`;
    piece.style.height = `${size * 1.6}px`;
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.setProperty("--x", `${(Math.random() - 0.5) * 350}px`);
    piece.style.animationDelay = `${Math.random() * .6}s`;
    piece.style.background = Math.random() > .5 ? "#ffc400" : "#ffffff";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    confettiContainer.appendChild(piece);

    setTimeout(() => piece.remove(), 3500);
  }
}

button.addEventListener("click", () => {
  createConfetti(120);
  button.textContent = "Thank You! ❤️";
  setTimeout(() => {
    button.textContent = "Celebrate ✨";
  }, 1800);
});

// Small automatic celebration when the page opens.
window.addEventListener("load", () => {
  setTimeout(() => createConfetti(45), 900);
});
