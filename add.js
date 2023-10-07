const inputBox = document.querySelector(".input-box")
const searchBtn = document.querySelector("#searchBtn")
const weather_img = document.querySelector(".weather-img")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const humidity = document.querySelector("#humidity")
const wind_speed = document.querySelector("#wind-speed")
const location_not_found = document.querySelector(".location-not-found")
const weather_body = document.querySelector(".weather-body")


async function checkWeather(city){
    const api_key ="a099c67d97a50575ce5eccca267522e5"
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(response=>response.json())

    if(weather_data.cod===`404`){
        location_not_found.style.display = "flex"
        weather_body.style.display ="none"
        return;
    }


    location_not_found.style.display="none"
    weather_body.style.display="flex"
    temperature.innerHTML =`${Math.round(weather_data.main.temp-273.15)}<sup>°C</sup>`

    description.innerHTML = `${weather_data.weather[0].description}`

    humidity.innerHTML = `${weather_data.main.humidity}%`

    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`


    switch(weather_data.weather[0].main){
        case 'Clouds':
        weather_img.src="images/clouds.png";
        break;
        case 'Clear':
        weather_img.src="images/clear.png";
        break;
        case 'Drizzle':
        weather_img.src="images/drizzle.png";
        break;
        case 'Haze':
        weather_img.src="images/mist.png";
        break;
        case 'Rain':
        weather_img.src="images/rain.png";
        break;
        case 'Wind':
        weather_img.src="images/wind.png";
        break;
        case 'Snow':
        weather_img.src="images/snow.png";
        break;
    }
    // console.log(weather_data.main)

}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value)
})
