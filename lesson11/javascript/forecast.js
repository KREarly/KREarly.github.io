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