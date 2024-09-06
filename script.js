const loginText = document.getElementById("login-txt");
const passwordForgot = document.getElementById("forgot");
const submitBtn = document.getElementById("submit");
const switchText = document.getElementById("switch");
const nameField = document.querySelector(".hidden");
const password = document.getElementById("password");
const forgotPass = document.getElementById("forgot");
const emailInstructions = document.getElementById("instructions");
const email = document.getElementById("email");
const inputsDiv = document.querySelector(".inputs");


submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
})

function pageSwitch(){
    forgotPass.innerHTML = "Already have an account?";
    loginText.innerHTML = "Sign up";
    nameField.style.display = "block";
    switchText.innerHTML = "Login here";
    switchText.setAttribute("onclick", "originalPage()");
    submitBtn.innerHTML = "Sign Up";
}

function originalPage(){
    loginText.innerHTML = "Log in";
    nameField.style.display = "none";
    switchText.innerHTML = "Create account";
    switchText.setAttribute("onclick", "pageSwitch()");
    submitBtn.innerHTML = "Log in";
}

forgotPass.addEventListener("click", ()=>{
    nameField.style.display = "none";
    password.style.display = "none";
    loginText.innerHTML = "Email Address";
    forgotPass.style.display = "none";
    switchText.style.display = "none";
    submitBtn.setAttribute("onclick","recoverFn()");
    submitBtn.innerHTML = "Recover Account";
    submitBtn.style.marginTop = "-70px";
    submitBtn.style.padding = "10px 100px";
})


function recoverFn(event){
    if(email.value === ""){
        console.error("Email is required");
    }
    else{
        let userId = email.value;
        let message = document.createElement("p");
        message.innerHTML = "Follow the instructions sent to " + userId + " to recover your account";
        email.style.display = "none";
        submitBtn.style.display = "none";
        loginText.innerHTML = "Account Recovery";
        inputsDiv.appendChild(message);
    }
}


function switchDarkMode(){
    const body = document.querySelector(".body");
    body.style.color = "white";
    body.style.background = "black";
    const switchButton = document.getElementById("switch-btn");
    switchButton.setAttribute("onclick", "switchLightMode()");
    const modeText = document.getElementById("dark");
    modeText.innerHTML = "Light Mode";
}

function switchLightMode(){
    const body = document.querySelector(".body");
    const switchButton = document.getElementById("switch-btn");
    const modeText = document.getElementById("dark");
    body.style.background = "floralwhite";
    body.style.color = "black";
    modeText.innerHTML = "Dark Mode";
    switchButton.setAttribute("onclick", "switchDarkMode()");
}


function hideBox(){
    const searchBox = document.querySelector(".search-box");
    searchBox.style.display = "none";
}


const searchInput = document.getElementById("search");

searchInput.addEventListener("mouseover", ()=>{
    setTimeout(() => {
        searchInput.innerText = "Denim";
    }, 1000);
    searchInput.value = "Louis vuton";
})
    




function increaseQuant(){
    const quantity = document.getElementById("quantity");
    quantity.innerText ++;
}

function decreaseQuant(){
    const quantity = document.getElementById("quantity");
    quantity.innerText --;
}

function clearCart(){
    const productInCart = document.querySelector(".product-in-cart");
    productInCart.style.display = "none";
}