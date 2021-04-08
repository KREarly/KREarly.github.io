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