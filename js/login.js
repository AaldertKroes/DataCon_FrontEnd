/**
 * Login page
 * @author Aaldert Kroes
 */

console.log("login.js - start")
let submitButton = document.getElementById("login");
let username = "";
let password = "";

/**
 * Create submit button to login with the credentials that have been filled in the boxes.
 * @author Aaldert Kroes
 */
submitButton.addEventListener('click', evt => {
    evt.preventDefault();
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    password = password.hashCode();
    console.log(`${username} | ${password}`);

    fetch("https://atlantic-shard-bream.glitch.me/user", {
        "method": "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(item => loginCheck(username, password, item["username"], item["password"], item["id"]));
    });
});

/**
 * Check if there is a user that matches the credentials filled in.
 * @param {string} curUser filled in username
 * @param {number} curPass filled in password hashed
 * @param {string} user record username
 * @param {number} pass record password hashed
 * @author Aaldert Kroes
 */
function loginCheck(curUser, curPass, user, pass, userId){
    console.log(curPass,pass);
    if(curUser === user && curPass == pass){
        localStorage.setItem("currentUser", curUser);
        localStorage.setItem("currentUserId", userId);
        window.location.href = "../index.html";
    } else {
        window.location.replace("./login.html");
    }
}

/**
 * Simple hashing algorithm.
 * @returns {number} hashed password
 */
String.prototype.hashCode = function() {
    var hash = 0,
        i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
