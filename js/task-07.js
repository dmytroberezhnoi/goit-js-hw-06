const inputArea = document.querySelector("#font-size-control");
const textArea = document.querySelector("#text");
inputArea.addEventListener("input", (event) => {
  textArea.style.fontSize = `${event.currentTarget.value}px`;
});
