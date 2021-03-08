function adjustRating(rating) {
    document.getElementById("displayLvl").innerHTML = rating;
}


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var imgList = ["imgs/Fish-Haven.jpg", "imgs/Preston.jpg", "imgs/Soda-Springs"];

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
        let sec = document.createElement('section');
        let h2 = document.createElement('h2');
        let h5 = document.createElement('h5');
        let p = document.createElement('p');

        h2.textContent = towns[i].name;
        sec.appendChild(h2);

        h5.textContent = towns[i].motto;
        sec.appendChild(h5);

        p.innerHTML = "Year Founded:" + towns[i].yearFounded + "</br>" + "Population:" + towns[i].currentPopulation + "</br>" + "Annual Rain Fall:" + towns[i].averageRainfall;
        sec.appendChild(p);

        document.querySelector('div.info').appendChild(sec);
        }
    }
  });