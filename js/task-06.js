const inputField = document.querySelector("#validation-input");
const lengthOfInput = Number(inputField.getAttribute("data-length"));

inputField.addEventListener("blur", () => {
  if (inputField.value.trim().length === lengthOfInput) {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
  } else {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
  }
});
