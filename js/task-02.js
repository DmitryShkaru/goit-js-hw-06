const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const elements = ingredients.map((element) => {
  const liEl = document.createElement("li");
  liEl.textContent = element;
  liEl.classList.add("item");
  return liEl;
});
ulEl.append(...elements);

// for (let ingredient of ingredients) {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   liEl.classList.add("item");
//   ulEl.appendChild(liEl);
// }
