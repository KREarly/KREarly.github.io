const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={04118603852765e7e56e3a85cf67d6e8}'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });