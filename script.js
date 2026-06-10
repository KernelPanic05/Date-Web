const buttonArea = document.getElementById("button-area");
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const message = document.getElementById("message");

function moveNoButton() {
  const areaRect = buttonArea.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const maxX = Math.max(0, areaRect.width - buttonRect.width);
  const maxY = Math.max(0, areaRect.height - buttonRect.height);

  const nextX = Math.random() * maxX;
  const nextY = Math.random() * maxY;

  noButton.style.left = `${nextX}px`;
  noButton.style.top = `${nextY}px`;
}

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("click", moveNoButton);

yesButton.addEventListener("click", () => {
  message.textContent = "Sabia que dirias que si. Preparando la siguiente pregunta...";
  window.setTimeout(() => {
    window.location.href = "menu.html";
  }, 900);
});
