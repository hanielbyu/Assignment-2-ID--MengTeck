const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

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
// regex validation for email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
/* Validation for sign up form*/
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }
    else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    // validation for password input requirements
    if (password1Value === '') {
        setError(password1, 'Password is required');
    } else if (password1Value.length < 8) {
        setError(password1, 'Password must be at least 8 characters!');
    }
    else if (password1Value.search(/[A-Z]/) < 0) {
        setError(password1, 'Password must contain at least one uppercase letter');
    }
    else if (password1Value.search(/[a-z]/) < 0) {
        setError(password1, 'Password must contain at least one lowercase letter');
    }
    else if (password1Value.search(/[0-9]/) < 0) {
        setError(password1, 'Password must have at least a number');
    } 
     else {
        setSuccess(password1);
    }

    
    if (password2Value === '') {
        setError(password2, 'Plese re-enter your password!');
    }
    else if (password1Value !== password2Value) {
        setError(password2, "Passwords does not match!");
    } 
    else {
        setSuccess(password2);
    }


};