const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", onBlur);

const length = Number(inputEl.dataset.length);
// console.log(length);

function onBlur(e) {
  if (e.currentTarget.value.length === length) {
    validInvalid("valid", "invalid");
  } else {
    validInvalid("invalid", "valid");
  }
}

function validInvalid(first, second) {
  inputEl.classList.add(first);
  inputEl.classList.remove(second);
}
