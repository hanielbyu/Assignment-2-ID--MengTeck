const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('input', e => {
    e.preventDefault();
    validateInputs();
});
// const to identify where to set error and success
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

    
    // validation for password input requirements
    if (passwordValue.length< 8) {
        setError(password, 'Password must be at least 8 characters!')
    }
    else if (passwordValue.search(/[A-Z]/) < 0) {
        setError(password, 'Password must contain at least one uppercase letter')
    }
    else if (passwordValue.search(/[a-z]/) < 0) {
        setError(password, 'Password must contain at least one lowercase letter');
    }
    else if (passwordValue.search(/[0-9]/) < 0) {
        setError(password, 'Password must have at least a number')
    }
    else {
        setSuccess(password);
    }
};