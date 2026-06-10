const result = document.getElementById("result");
const options = document.querySelectorAll(".option");

const messages = {
  Salado: "Perfecto. Algo salado suena delicioso. 🍕✨",
  Dulce: "Excelente eleccion. Vamos por algo dulce. 🍰💖",
  Ambos: "La respuesta correcta. Un poco de todo nos queda mejor. 😍🍕🍰"
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    const choice = option.dataset.choice;
    result.textContent = messages[choice] || "";
  });
});
