async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=6WJAD4LXLFVS4KJTA55GZD6XV&contentType=json`
    );
    if (!response.ok) throw new Error("Weather data not found");
    return await response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export { getWeatherData };
