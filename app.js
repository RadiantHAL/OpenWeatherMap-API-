// ========================================
// SkyFetch Weather Dashboard - Part 1
// ========================================

// TODO: Replace 'YOUR_API_KEY_HERE' with your actual OpenWeatherMap API key
const API_KEY = 'YOUR_API_KEY_HERE';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Fetches weather data for a given city
 * @param {string} city - The name of the city
 */
function fetchWeather(city) {
    // TODO: Build the complete API URL
    // Format: BASE_URL?q=CITY&appid=API_KEY&units=metric
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    
    // TODO: Make API call using Axios
    // Use axios.get(url) with .then() and .catch()
    axios.get(url)
        .then(response => {
            // Success! We got the weather data
            console.log('Weather data received:', response.data);
            
            // Display the weather on the page
            displayWeather(response.data);
        })
        .catch(error => {
            // Something went wrong
            console.error('Error fetching weather:', error);
            
            // Show error message to user
            document.getElementById('cityName').textContent = 'City not found';
            document.getElementById('temperature').textContent = '--°C';
            document.getElementById('description').textContent = 'Please try another city';
        });
}

/**
 * Displays weather data on the webpage
 * @param {object} data - Weather data from the API
 */
function displayWeather(data) {
    // TODO: Extract data from the response object
    // The API returns data in this structure:
    // - data.name → city name
    // - data.main.temp → temperature
    // - data.weather[0].description → weather description
    // - data.weather[0].icon → icon code
    
    // Update city name
    const cityName = data.name;
    document.getElementById('cityName').textContent = cityName;
    
    // Update temperature
    const temp = Math.round(data.main.temp);
    document.getElementById('temperature').textContent = `${temp}°C`;
    
    // Update description
    const description = data.weather[0].description;
    document.getElementById('description').textContent = description;
    
    // Update weather icon
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById('weatherIcon').src = iconUrl;
    document.getElementById('weatherIcon').alt = description;
}

// ========================================
// Initialize the app
// ========================================

// Fetch weather for London when the page loads
// TODO: Try changing this to different cities: 'Paris', 'New York', 'Tokyo', 'Mumbai'
fetchWeather('London');


// ========================================
// 🎯 YOUR TASKS:
// ========================================
// 1. Replace 'YOUR_API_KEY_HERE' with your actual API key from OpenWeatherMap
// 2. Make sure all three files (index.html, style.css, app.js) are in the same folder
// 3. Open index.html in your browser
// 4. Check the browser console (F12) to see the API response
// 5. Try changing 'London' to other cities and refresh the page
// 6. Commit your code to GitHub on the 'part-1-api-integration' branch
// 7. Create a Pull Request
// 8. Record your video explanation
// ========================================