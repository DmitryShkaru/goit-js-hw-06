const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

inputEl.addEventListener("input", onInput);

function onInput(e) {
  spanEl.style.fontSize = `${e.target.value}px`;
}
