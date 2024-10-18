import axios from "axios";

async function getWeatherData() {
  try {
    let location = prompt("Enter the location");
    if (!location) return;
    else {
      let response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=6WJAD4LXLFVS4KJTA55GZD6XV&contentType=json`
      );

      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log("Error fetching details, status code:", response.status);
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
export default getWeatherData;
