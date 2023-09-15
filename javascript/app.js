const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const city = 'New York'; // Replace with the desired city

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        document.getElementById('city').textContent = cityName;
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('weather').textContent = weatherDescription;
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
