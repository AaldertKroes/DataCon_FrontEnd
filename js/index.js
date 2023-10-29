console.log("index.js - start")

let coord1 = {"long":53.1003743, "lat":6.0751035};
let coord2 = {"long":53.0993585, "lat":6.07491};
let coord3 = {"long":53.0988369, "lat":6.0755131};
let coords = [coord1, coord2, coord3];

if(localStorage.getItem("currentUser") === null) window.location.replace("./html/login.html");

document.getElementById("welcome-name").innerHTML = `Welcome ${localStorage.getItem("currentUser")}!`;

document.getElementById("map-redirect").addEventListener('click', ()=>{
  let url = 'https://www.google.com/maps/dir';
  for(let i = 0; i < coords.length; i++){
    url += `/${coords[i]["long"]},${coords[i]["lat"]}`.toString();
  }
  url += `/@${coords[coords.length-1]["long"]},${coords[coords.length-1]["lat"]},17,75z`.toString();
  window.open(url, '_blank');
});
