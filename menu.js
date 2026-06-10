const options = [
  { label: "Helado", emoji: "🍦" },
  { label: "Hamburguesa", emoji: "🍔" },
  { label: "Pizza", emoji: "🍕" },
  { label: "Pollo", emoji: "🍗" },
  { label: "Jibas", emoji: "🦑" },
  { label: "Frapus", emoji: "🥤" },
  { label: "Cafecito", emoji: "☕" },
  { label: "Acai", emoji: "🫐" },
  { label: "Sushi", emoji: "🍣" },
  { label: "Ramen", emoji: "🍜" }
];

const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spin-button");
const result = document.getElementById("result");
const resultModal = document.getElementById("result-modal");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");
const modalSpinAgain = document.getElementById("modal-spin-again");

const sliceAngle = 360 / options.length;
let currentRotation = 0;
let spinning = false;

function spinWheel() {
  if (spinning) {
    return;
  }

  spinning = true;
  spinButton.disabled = true;
  result.textContent = "a ver que nos toca hoy...";

  const selectedIndex = Math.floor(Math.random() * options.length);
  const baseTurns = 360 * 6;
  const landingAngle = 360 - (selectedIndex * sliceAngle + sliceAngle / 2);
  currentRotation += baseTurns + landingAngle;

  wheel.style.transform = `rotate(${currentRotation}deg)`;

  window.setTimeout(() => {
    const selected = options[selectedIndex];
    result.textContent = `Salio ${selected.label} ${selected.emoji}. Siiiiuuuuuu.`;
    modalText.textContent = `Salio ${selected.label} ${selected.emoji}. Siiiiuuuuuu.`;
    resultModal.classList.remove("hidden");
    resultModal.setAttribute("aria-hidden", "false");
    spinButton.disabled = false;
    spinning = false;
  }, 5200);
}

spinButton.addEventListener("click", spinWheel);

modalClose.addEventListener("click", () => {
  resultModal.classList.add("hidden");
  resultModal.setAttribute("aria-hidden", "true");
});

modalSpinAgain.addEventListener("click", () => {
  resultModal.classList.add("hidden");
  resultModal.setAttribute("aria-hidden", "true");
  spinWheel();
});
