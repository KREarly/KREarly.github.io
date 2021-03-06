function windChill(s, t) {
    if (t <= 50.0 && s > 3.0) {
        document.getElementById("wind-chill").textContent = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)).toFixed(2);
    } else {
        document.getElementById("wind-chill").textContent = "N/A";
    }
}

windChill(20, 40);