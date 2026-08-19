const apk = "d3db02ca37cb228a80f2824529bcdec1";
const input = document.querySelector(".search input");
const city = input.value;
const submit = document.querySelector(".search button");
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"+"&appid="+apk;

async function checkWeather() {
  const response = await fetch(apiUrl);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".info-pcnt-humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".info-pcnt-wind-speed").innerHTML =
    data.wind.speed + "km/h";
}

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    checkWeather();
  }
});
submit.addEventListener("click", () => {
  checkWeather();
});
