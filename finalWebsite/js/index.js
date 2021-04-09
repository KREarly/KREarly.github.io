const requestURL = '...\json\stores.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const stores = jsonObject['stores'];
    for (let i = 0; i < stores.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');

        h2.textContent = stores[i].name;
        card.appendChild(h2);

        p.innerHTML = "Address:" + stores[i].address + "</br>" + "Phone:" + stores[i].phone + "</br>" + "Website:" + stores[i].website + "</br>" + "E-Mail:" + stores[i].email;
        card.appendChild(p);

        document.querySelector('div.cards').appendChild(card);
    }
  });


  const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5429522&appid=04118603852765e7e56e3a85cf67d6e8&units=imperial';

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