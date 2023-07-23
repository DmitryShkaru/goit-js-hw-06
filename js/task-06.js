const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", onBlur);

const length = Number(inputEl.dataset.length);
// console.log(length);

function onBlur(e) {
  if (e.currentTarget.value.length === length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
