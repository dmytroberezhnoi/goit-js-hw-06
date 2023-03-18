const listWithId = document.querySelector("#categories");
const arrayOfCategories = Array.from(listWithId.children);
const arrayLength = arrayOfCategories.length;
console.log(`Number of categories: ${arrayLength}`);

arrayOfCategories.forEach((category) => {
  const nameOfCategory = category.querySelector("h2").textContent;
  const quantityOfElements = category.querySelectorAll("li").length;
  console.log(`
Category: ${nameOfCategory}
Elements: ${quantityOfElements}
  `);
});
