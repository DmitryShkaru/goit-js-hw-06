const btnDec = document.querySelector("button[data-action = 'decrement']");
// console.log(btnDec);
const btnInc = document.querySelector("button[data-action = 'increment']");
// console.log(btnInc);
const valueEl = document.querySelector("#value");

let counterValue = 0;

btnDec.addEventListener("click", onClickDec);
btnInc.addEventListener("click", onClickInk);

function onClickDec() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onClickInk() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
