let counterValue = 0;
const sumValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  sumValue.textContent = Number(`${counterValue}`);
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  sumValue.textContent = Number(`${counterValue}`);
});
