const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("All input fields must be filled");
  }

  let obj = {};
  obj.email = email.value;
  obj.password = password.value;

  console.log(obj);

  e.currentTarget.reset();
}
