const url = 'https://api.openweathermap.org/data/2.5/';
const key = '8ffba5dc941da47eb48dedbf951f6086';
const searchBar = document.getElementById('searchBar');
let clicked = false;

function setQuery(e) {
    if(e.keyCode == 13) {
        getResult(searchBar.value);
    }
}

function getResult(cityName) {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json();
    })
    .then(displayResult)
}

function displayResult(result) {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°c`;

    let desc = document.querySelector('.desc');
    desc.innerText = `${result.weather[0].description}`;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°c | ${Math.round(result.main.temp_max)}°c`

    console.log(result)
}


window.addEventListener('load', firstQuery)

function firstQuery(e){
    function getResultStart() {
        let query = `${url}weather?q=istanbul&appid=${key}&units=metric&lang=en`
        fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(displayResultStart)
    }
    getResultStart()

    function displayResultStart(result) {
        let city = document.querySelector('.city');
        city.innerText = `${result.name}, ${result.sys.country}`;
    
        let temp = document.querySelector('.temp');
        temp.innerText = `${Math.round(result.main.temp)}°c`;
    
        let desc = document.querySelector('.desc');
        desc.innerText = `${result.weather[0].description}`;
    
        let minmax = document.querySelector('.minmax');
        minmax.innerText = `${Math.round(result.main.temp_min)}°c | ${Math.round(result.main.temp_max)}°c`
    
        console.log(result)
    }
}

searchBar.addEventListener('keydown', setQuery)