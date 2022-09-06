//Sets validity of confirm password input accordingly

window.onload = () => {
    document.getElementById("confirm-password").oninput = checkPasswords;
}

function checkPasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword= document.getElementById("confirm-password");
    if (password != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
    }
    else {
        confirmPassword.setCustomValidity("");
    }
}