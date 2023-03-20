const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Всі поля повинні бути заповнені!");
  }

  if (email.value.trim() !== "" && password.value.trim() !== "") {
    const object = {
      Email: `${email.value}`,
      Password: `${password.value}`,
    };
    console.log(object);
    event.currentTarget.reset();
  }
}
