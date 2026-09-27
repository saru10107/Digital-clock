
function updateClock(){
let currentTime = new Date();
let hours = currentTime.getHours().toString().padStart(2, "0");
let ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
let minutes = currentTime.getMinutes().toString().padStart(2, "0");
let Seconds = currentTime.getSeconds().toString().padStart(2, "0");
let time = hours + ":"  + minutes + ":" + Seconds + " " + ampm;
document.getElementById("clock").innerText=time;
}
updateClock();
setInterval(updateClock, 1000);
