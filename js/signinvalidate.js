const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");


/* form.addEventListener("input", () => {
  if (username.value.length > 5 && password.value.length > 8) {
    setError(username, 'Username is required')
    setError(password, 'Password must be at least 8 characters')
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}); */
form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password1.value.trim();


 if (passwordValue < 8) {
    setError(password, 'Password is less than 8 characters');
  }
  else {
    setSuccess(password);
    
  }
}