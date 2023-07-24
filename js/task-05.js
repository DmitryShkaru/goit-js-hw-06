const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");
let anonymus = "Anonimous";

spanEl.textContent = anonymus;

inputEl.addEventListener("input", onInput);

function onInput(e) {
  spanEl.textContent = e.target.value.trim() || anonymus;
}
