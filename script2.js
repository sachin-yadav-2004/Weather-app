const apk = "d3db02ca37cb228a80f2824529bcdec1";
const input = document.querySelector(".search input");
const submit = document.querySelector(".search button");

// ------------------------------

async function checkWeather() {
  const city = input.value;
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    apk;

  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

  document.querySelector(".info-pcnt-humidity").innerHTML =
    data.main.humidity + "%";

  document.querySelector(".info-pcnt-wind-speed").innerHTML =
    data.wind.speed + " km/h";

  if (city === "undefined" || city === "") {
    document.querySelector(".city-name").style.fontSize = "15px";
    document.querySelector(".city-name").innerHTML = "Please enter a city name.";
    return; 
  }
}

// ------------------------------------------------
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    checkWeather();
    input.value = "";
  }
});

submit.addEventListener("click", () => {
  checkWeather();
  input.value = "";
});
