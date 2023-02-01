const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");

submit.style.backgroundColor = " rgb(198, 146, 68, 0.997)";
submit.disabled = true;

form.addEventListener("input", () => {
  if (username.value.length > 5 && password.value.length > 8) {
    setError(username, 'Username is required')
    setError(password, 'Password must be at least 8 characters')
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});
