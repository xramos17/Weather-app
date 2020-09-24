//FUNCTION MOTHER FOR TIME AND DATE

let now = new Date();
console.log(now);

//DATE WITH DAY MONTH AND DAY OF THE WEEK
function formatDate(date) {
  let daynum = date.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];

  let currentDate = document.querySelector("#date-city");

  currentDate.innerHTML = `${day} ${daynum},  ${month}`;
  return currentDate;
}
console.log(formatDate(now));

//🕵️‍♀️TIME

function formatHour(time) {
  let hours = time.getHours();
  if (hours > 10) {
    hours = ` ${hours}`;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = ` 0${minutes} `;
  }
  let currentHour = document.querySelector("#date-hours");

  currentHour.innerHTML = `${hours}:${minutes}`;

  return currentHour;
}
console.log(formatHour(now));

//ShOW NEW CITY

function displayWeather(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temp-currently").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#temp-sub").innerHTML =
    response.data.weather[0].description;

  document.querySelector("#min-temp").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#high-temp").innerHTML = Math.round(
    response.data.main.temp_max
  );
}

function search(city) {
  let units = "metric";
  let apiKey = "08055b42352faa5e0aeff40ba5a95cdb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", showCity);

function searchLocation(position) {
  let units = "metric";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "08055b42352faa5e0aeff40ba5a95cdb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocation = document.querySelector("#button-current-geo");
currentLocation.addEventListener("click", getCurrentLocation);

//🕵️‍♀️Feature #2

//TEMPERATURE TO FARENHEIT

/*
let temperature = document.querySelector("#temp-currently");
temperature.innerHTML = "17º";

function showCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp-currently");
  temperature.innerHTML = "17º";
}

function showFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp-currently");
  let toFarenheit = Math.round(17 * (9 / 5) + 32);
  temperature.innerHTML = `${toFarenheit}º`;

}

//let Celsius = document.querySelector("#celsius-a1");
Celsius.addEventListener("click", showCelsius);

let Fahrenheit = document.querySelector("#farhen-a2");
Fahrenheit.addEventListener("click", showFahrenheit); */
