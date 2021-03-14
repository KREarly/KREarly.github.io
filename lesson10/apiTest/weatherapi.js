const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=04118603852765e7e56e3a85cf67d6e8&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;


    const desc = jsObject.weather[0].description;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
});