const Clock = document.getElementById("Clock");
let m;
function updateClock() {
  const now = new Date();
  const hours = (now.getHours() % 12).toString().padStart(2, "0");
  now.getHours() > 12 ? (m = "P.M") : (m = "A.M");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours} : ${minutes} : ${seconds} ${m}`;
  Clock.textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);
