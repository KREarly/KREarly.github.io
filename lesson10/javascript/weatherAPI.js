const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=04118603852765e7e56e3a85cf67d6e8&units=imperial';


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);
  document.getElementById('current-temp').textContent = jsObject.main.temp;
  document.getElementById('high-temp').textContent = jsObject.main.temp_max;
  document.getElementById('humidity').textContent = jsObject.main.humidity;
  document.getElementById('wind-speed').textContent = jsObject.wind.speed;
});


function windChill(s, t) {
  if (t <= 50.0 && s > 3.0) {
      document.getElementById("wind-chill").textContent = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)).toFixed(2);
  } else {
      document.getElementById("wind-chill").textContent = "N/A";
  }
}
windChill(20, 40);


const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=04118603852765e7e56e3a85cf67d6e8&units=imperial';
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);
  
  for (let i = 0; i < jsObject.list.length; i++) {
    const date = new Date(jsObject.list[i].dt_txt);
    if (date.getHours() == 18) {
      console.log(days[date.getDay()]);

      let th = document.createElement('th');
      let p = document.createElement('p');

      p.textContent = days[date.getDay()];
      th.appendChild(p);
      document.querySelector('tr.topRow').appendChild(th);
    }
  }
});