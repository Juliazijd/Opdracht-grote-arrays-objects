const data = randomPersonData;

const createList = items => {
    const list = document.getElementsByTagName('ul')[0];
    list.innerHTML = ' ';
    
    for (i = 0; i < items.length; i++) {
        const listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.innerHTML = items[i];
    }
}
const createCapricornList = capricorns => {
    const name = capricorns.map(capri => capri.name);
    const surname = capricorns.map(capri => capri.surname);
    const photo = capricorns.map(capri => capri.photo);
    const list = document.getElementsByTagName('ul')[0];
    list.innerHTML = ' ';

    for (i = 0; i < capricorns.length; i++) {
        const listItem = document.createElement('li');
        const image = document.createElement('img');
        image.src = photo[i];
        list.appendChild(listItem);
        listItem.innerHTML = `${name[i]}  ${surname[i]} `;
        listItem.appendChild(image);
    }
}

const getCountries = event => {
    event.preventDefault();
    const countries = data.map(person => person.region);
    return createList(countries);
}
const getCapricornWomen = event => {
    event.preventDefault();
    let capricorns = data.filter(person => {
        let birthday = (person.birthday.dmy);
        let day = birthday.slice(0,2);
        let month = birthday.slice(3,5);
            if (person.gender === "female" && 
            person.birthday.raw < 665025397 &&
            ((day >= 22 && month == 12) || (day <= 19 && month == 01))
            ) {
                return person;
            } 
        });
    createCapricornList(capricorns);
}

const countriesButton = document.querySelector('#countries-button')
.addEventListener('click', getCountries);

const capricornButton = document.querySelector('#capricorn-button')
.addEventListener('click', getCapricornWomen);