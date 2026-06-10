const buttonArea = document.getElementById("button-area");
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const message = document.getElementById("message");
const yesModal = document.getElementById("yes-modal");
const yesModalContinue = document.getElementById("yes-modal-continue");

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
  message.textContent = "";
  yesModal.classList.remove("hidden");
  yesModal.setAttribute("aria-hidden", "false");
});

yesModalContinue.addEventListener("click", () => {
  yesModal.classList.add("hidden");
  yesModal.setAttribute("aria-hidden", "true");
  window.location.href = "menu.html";
});
