const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('input', e => {
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
/* Validation for sign up form*/
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    if(usernameValue === '') {
        setError(username, 'Username is required');
    }
    else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required')
    } 
    else if (password.search([a-z]) < 0) {
        setError(password, 'Password must contain at one lower case character')
    }
    else if (passwordValue.search([0-9]) < 0) {
        setError(password, 'Password must contain at least one number')
    }
    else if (passwordValue.length< 8) {
        setError(password, 'Password must be at least 8 characters!')
    }
    else {
        setSuccess(password);
    }
};