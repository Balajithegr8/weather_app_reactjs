# Weather App

This is a weather app built with React.js that allows users to search for weather information by city name or automatically detects their location to provide weather data. The app utilizes the OpenWeather API to fetch weather information.

## Features

- **Search by City Name:** Users can enter a city name in the search bar to get weather information for that city.
- **Automatic Location Detection:** The app automatically detects the user's location to provide weather information for their current location.
- **Weather Information:** The app displays the following weather information:
    - Humidity
    - Wind Speed
    - Wind Direction
    - Cloudiness
    - Pressure
    - Visibility
    - Temperature
- **Time, Day, and Date:** The app shows the current time, day, and date.
- **Location and Country:** The app displays the name of the location and the country for which the weather information is displayed.

## Deployment

The app is deployed on [Render](https://render.com/) and uses the [OpenWeather API](https://openweathermap.org/api) to fetch weather data.
[Click here!](https://weather-app-reactjs-nvep.onrender.com/)

## Usage

To use the app, simply open the deployed app URL in your web browser. You can enter a city name in the search bar to get weather information for that city. Alternatively, you can allow the app to detect your location to get weather information for your current location.

# Development

If you want to run the app locally or make changes to the code, you can clone the repository and follow these steps:
1. Install dependencies:
    ``` npm install ```
2. Open apiKeys.js file in the root directory and add your OpenWeather API key:
    ``` const apiKeys = {openWeatherMap: {'Your api key here'}}; ```
3. Start the development server:
    ``` npm start ```   
4. Open http://localhost:3000 in your web browser to view the app.

## Credits

This app was created by Balaji using React.js and the OpenWeather API.

