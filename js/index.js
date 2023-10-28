console.log("index.js - start")

if(localStorage.getItem("currentUser") === null) window.location.replace("./html/login.html");

document.getElementById("welcome-name").innerHTML = `Welcome ${localStorage.getItem("currentUser")}`;

document.getElementById("test-button").addEventListener('click', ()=>{
    document.getElementById("dash").innerHTML = "hey";
});
