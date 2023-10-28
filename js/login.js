console.log("login.js - start")

let submitButton = document.getElementById("login");
let username = "";
let password = "";

submitButton.addEventListener('click', evt => {
    evt.preventDefault();
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    (username === "henk" && password === "detank" ? loginHandler() : window.location.replace("./login.html"));
});

function loginHandler(){
    localStorage.setItem("currentUser", username);
    window.location.href = "../index.html";
}
