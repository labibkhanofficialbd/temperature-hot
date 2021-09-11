
const API_KEY = `5da8ea4e4eada1037f018b2c68e0fdb0`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

}