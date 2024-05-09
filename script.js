document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    const now = new Date();
    document.getElementById("localTime").textContent =
      now.toLocaleTimeString() + "";
    document.getElementById("localDate").textContent =
      now.toLocaleDateString() + "";
    document.getElementById("screenRes").textContent =
      window.innerWidth + "x" + window.innerHeight + "";
  }
  setInterval(updateTime, 1000); // Update time every second

  let sessionStartTime = Date.now();
  setInterval(function () {
    let sessionTime = Date.now() - sessionStartTime;
    let hours = Math.floor(sessionTime / 3600000);
    let minutes = Math.floor((sessionTime % 3600000) / 60000);
    let seconds = Math.floor((sessionTime % 60000) / 1000);
    let milliseconds = sessionTime % 1000;
    document.getElementById(
      "sessionTime"
    ).textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }, 100);
});
