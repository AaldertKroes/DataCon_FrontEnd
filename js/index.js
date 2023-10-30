/**
 * The dashboard of tracking your bicycle tracker
 * @author Aaldert Kroes
 */

console.log("index.js - start")
let coords = [];

// Check if a user is signed in, otherwise send them to the login page.
if(localStorage.getItem("currentUser") === null) window.location.replace("./html/login.html");
document.getElementById("welcome-name").innerHTML = `Welcome ${localStorage.getItem("currentUser")}!`;

/**
 * Collect all positional data from all devices and show the data on the dashboard.
 * @author Aaldert Kroes
 */
fetch("http://127.0.0.1:3000/data", {
  "method": "GET",
  headers: {
    "Content-type": "application/json"
  }
})
.then(res => res.json())
.then(data => {
  // Fetch the 5 latest records if there are more than 5.
  if(data.length >= 5){
    for(let i = data.length-5; i < data.length; i++){
      coords.push(data[i]);
    }
  } else {
    data.forEach(item => coords.push(item));
  }
  
  // Show data on index page.
  let processedData = "";
  for(let i = coords.length-1; i >= 0; i--){
    processedData += `<p>ID: ${coords[i]["tracker_id"]} | long ${coords[i]["long"]} | lat ${coords[i]["lat"]} | time: ${coords[i]["createdAt"]}</p>`.toString();
  }
  document.getElementById("latest-measurements").innerHTML = processedData;
});

/** Eventlisteners */
/**
 * Clear localStorage and move user to the login page. index.html will no longer be available until a user is logged in again.'
 * @author Aaldert Kroes
 */
document.getElementById("logout-button").addEventListener('click', ()=> {
  localStorage.removeItem("currentUser");
  window.location.replace("./html/login.html");
});

/**
 * Generate a link to Google Maps with the last 5 position points.
 * @author Aaldert Kroes
 */
document.getElementById("map-redirect").addEventListener('click', ()=> {
  let url = 'https://www.google.com/maps/dir';
  for(let i = 0; i < coords.length; i++){
    url += `/${coords[i]["long"]},${coords[i]["lat"]}`.toString();
  }
  url += `/@${coords[coords.length-1]["long"]},${coords[coords.length-1]["lat"]},17,75z`.toString();
  window.open(url, '_blank');
});
