const cityName= document.getElementById("cityInput");
const searchBtn = document.getElementById("getWeatherBtn")
const weatherInfo = document.querySelector(".resultWeather");

searchBtn.addEventListener("click", function(){
   city = cityName.value;
   const apiKey ="744e1db4dd089fd000449dbd807cd984";
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
console.log(data);
    })
})

