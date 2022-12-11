const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formEl = { email, password }
  
  if (email === "" || password === "") {
    return alert ("Please fill in all the fields!");
  }

  console.log(formEl);
  event.currentTarget.reset();
}