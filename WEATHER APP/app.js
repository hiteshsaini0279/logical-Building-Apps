const cityName= document.getElementById("cityInput");
const searchBtn = document.getElementById("getWeatherBtn")
const weatherInfo = document.querySelector(".resultWeather");
const place = document.getElementById("place");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feelsLike");
const tempMin = document.getElementById("temp_min");
const tempMax = document.getElementById("temp_max");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const resultBox = document.querySelector(".resultWeather");

searchBtn.addEventListener("click", function(){
 let city = cityName.value.trim();
    if(city === ""){
        alert("Please enter a city name");

    }else{
   const apiKey ="744e1db4dd089fd000449dbd807cd984";
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
console.log(data);
    place.innerText = data.name;

    temperature.innerText = "🌡️ Temp: " + data.main.temp + " °C";

    description.innerText = "🌥️ " + data.weather[0].description;

    feelsLike.innerText = "🤒 Feels Like: " + data.main.feels_like + " °C";

    tempMin.innerText = "⬇️ Min Temp: " + data.main.temp_min + " °C";

    tempMax.innerText = "⬆️ Max Temp: " + data.main.temp_max + " °C";

    humidity.innerText = "💧 Humidity: " + data.main.humidity + "%";

    pressure.innerText = "🔵 Pressure: " + data.main.pressure + " hPa";

    resultBox.style.display = "block"; // show result
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please try again.");});
    }


})

