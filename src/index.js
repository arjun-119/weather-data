import "./styles.css";
import {getWeatherData} from "./api";
import { processWeatherData, displayWeatherDetails } from "./weatherData";

const weatherForm = document.querySelector("#weather-form");
const locationInput = document.querySelector("#location-input");

weatherForm.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const location = locationInput.value.trim();
    if(!location)
        return;

    try{
        const weatherData = await getWeatherData(location);
        const processData = processWeatherData(weatherData);
        displayWeatherDetails(processData);
    }
    catch(error){
        alert('Error fetching the data. Please try again!')
    }
})
