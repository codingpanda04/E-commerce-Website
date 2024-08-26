const loginText = document.getElementById("login-txt");
const passwordForgot = document.getElementById("forgot");
const submitBtn = document.getElementById("submit");
const switchText = document.getElementById("switch");
const nameField = document.querySelector(".hidden");

function pageSwitch(){
    loginText.innerHTML = "Sign up";
    nameField.style.display = "block";
    switchText.innerHTML = "Login here";
    switchText.setAttribute("onclick", "originalPage()");
    submitBtn.innerHTML = "Sign Up";
}

function originalPage(){
    window.location.href = "login.html";
}