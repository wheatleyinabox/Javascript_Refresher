const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = ""; // openWeather API
// *API key won't be included in commit because security and stuff

weatherForm.addEventListener("submit", async (event) => 
{

    event.preventDefault(); // stop page refresh
    const city = cityInput.value;

    if (city)
    {
        try
        {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error)
        {
            console.log(error);
            displayError(error);
        }
    }
    else
    {
        displayError("Please enter a city!");
    }

});

async function getWeatherData(city)
{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok)
    {
        throw new Error("Couldn't fetch weather data! D:");
    }

    return await response.json();
}   

function displayWeatherInfo(data) // json format
{
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;
           // object that extracts data from json format data
           // name -> str | main -> obj | weather array of objs

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherID)
{
    switch (true)
    {
        case (weatherID >= 200) && weatherID < 300:
            return "⛈";
        case (weatherID >= 300) && weatherID < 400:
            return "🌧";
        case (weatherID >= 500) && weatherID < 600:
            return "🌧";
        case (weatherID >= 600) && weatherID < 700:
            return "❄️";
        case (weatherID >= 700) && weatherID < 800:
            return "🌫";
        case (weatherID === 800):
            return "☀️";
        case (weatherID >= 801) && weatherID < 810:
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message)
{
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}