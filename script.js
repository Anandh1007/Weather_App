async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "54b6589e6c044dd78cd64850251004";// 🔁 Replace with your actual WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    console.log("API URL:", url);

    try {
        const response = await fetch(url);
        const data = await response.json();

        const weatherDiv = document.getElementById("weatherResult");

        if (data && data.location) {
            const weatherHTML = `
          <h2>${data.location.name}, ${data.location.country}</h2>
          <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
          <p><strong>Condition:</strong> ${data.current.condition.text}</p>
          <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
          <p><strong>Wind:</strong> ${data.current.wind_kph} kph</p>
          <img src="https:${data.current.condition.icon}" alt="Weather icon">
        `;
            weatherDiv.innerHTML = weatherHTML;
        } else {
            weatherDiv.innerHTML = `<p>City not found. Please try again.</p>`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherResult").innerHTML = "<p>Something went wrong.</p>";
    }
}
