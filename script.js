const apiKey = "67f9a2dee26c5459000ecf2453b844ca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png";
        }
        if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png";
        }
        if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png";
        }
        if (data.weather[0].main == "Humidity") {
            weathericon.src = "images/humidity.png";
        }
        if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png";
        }
        if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png";
        }
        if (data.weather[0].main == "Snow") {
            weathericon.src = "images/snow.png";
        }
        if (data.weather[0].main == "Wind") {
            weathericon.src = "images/wind.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})

