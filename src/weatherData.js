function processWeatherData(data) {
  const weatherConditions = data.currentConditions;
  return {
    location: data.address,
    temperature: Math.round(weatherConditions.temp),
    feelsLike: Math.round(weatherConditions.feelslike),
    description: weatherConditions.conditions,
    humidity: weatherConditions.humidity,
    windSpeed: weatherConditions.windspeed,
    datetime: new Date(weatherConditions.datetime).toLocaleString(),
  };
}

function displayWeatherDetails(weatherData) {
  const weatherInfo = document.querySelector("#weather-info");
  weatherInfo.innerHTML = `
    <h2>${weatherData.location}</h2>
    <p>Date/Time: ${weatherData.datetime}</p>
    <p>Temperature: ${weatherData.temperature}°C</p>
    <p>Feels like: ${weatherData.feelsLike}°C</p>
    <p>Conditions: ${weatherData.description}</p>
    <p>Humidity: ${weatherData.humidity}%</p>
    <p>Wind speed: ${weatherData.windSpeed} km/h</p>
`;
}

export { processWeatherData, displayWeatherDetails };
