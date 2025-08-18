
const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pass");
const confirmPasswordInput = document.getElementById("confirmPass");

const UserName_Regex = /^\w{3,15}$/;
const Email_Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Pass_Regex = /^(?=.*[0-9])(?=.*[A-Z]).{8,}$/;

function setError(inputElement, message) {

    inputElement.classList.add("placeholder", "bd");
    inputElement.value = "";
    inputElement.setAttribute("placeholder", message);
}

function setSuccess(inputElement) {

    inputElement.classList.remove("placeholder", "bd");
    inputElement.removeAttribute("placeholder");
}


function validateUsername() {
    if (UserName_Regex.test(usernameInput.value)) {
        setSuccess(usernameInput);
        return true;
    } else {
        setError(usernameInput, "Username must be 3-15 letters/numbers");
        return false;
    }
}

function validateEmail() {
    if (Email_Regex.test(emailInput.value)) {
        setSuccess(emailInput);
        return true;
    } else {
        setError(emailInput, "Please enter a valid email address");
        return false;
    }
}

function validatePassword() {
    if (Pass_Regex.test(passwordInput.value)) {
        setSuccess(passwordInput);
        return true;
    } else {
        setError(passwordInput, "Password: 8+ chars, 1 uppercase, 1 number");
        return false;
    }
}

function validateConfirmPassword() {

    if (confirmPasswordInput.value === passwordInput.value && confirmPasswordInput.value !== '') {
        setSuccess(confirmPasswordInput);
        return true;
    } else {
        setError(confirmPasswordInput, "Passwords do not match");
        return false;
    }
}



usernameInput.addEventListener("blur", validateUsername);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
confirmPasswordInput.addEventListener("blur", validateConfirmPassword);



form.addEventListener("submit", (e) => {
    e.preventDefault();


    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();


    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert("Form submitted successfully!");
        form.reset();
    } else {
        alert("Please fix the errors before submitting.");
    }
});














