const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((el) => {
  const titleEL = el.querySelector("h2").textContent;
  console.log(`Category: ${titleEL}`);

  const categoriesItem = el.querySelectorAll("li").length;
  console.log(`Elements: ${categoriesItem}`);
});
