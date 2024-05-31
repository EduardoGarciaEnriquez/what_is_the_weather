const display = document.querySelector("#weather");
const input = document.querySelector("#city");
const form = document.querySelector("#form");

function returnLoading() {
  return (display.innerHTML = `<div class="spinner-border text-primary mt-4" role="status">
    <span class="sr-only">Loading...</span>
  </div>`);
}

function returnWeather({ city, description, temp, wind }) {
  return (display.innerHTML = `
    <div class="alert alert-primary" role="alert">
    The weather in ${city} is currently ${description}. <br/>
    The temperature is ${temp} <br/>
    The wind speed is ${wind}
    </div>
  `);
}

function returnError() {
  return (display.innerHTML = '<div class="alert alert-warning" role="alert">Error: not a valid city</div>');
}

async function fetchData(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`);
  const data = await response.json();
  return data
}

async function searchWeather(city) {
  //query
  try {
    //loading effect
    returnLoading();

    const data = await fetchData(city);

    if (data?.cod === 200) {
      const city = data.name;
      const temp = (data["main"]["temp"] - 273.15).toFixed() + "°C";
      const wind = data["wind"]["speed"] + " m/s";
      const description = data["weather"][0]["description"];
      returnWeather({ city, temp, wind, description });
    } else {
      returnError();
    }
  } catch (error) {
    // display.innerHTML = `<div class="alert alert-warning" role="alert">${error}</div>`;
    console.log(error);
  }
}

function onSubmit(event) {
  searchWeather(input.value);
  event.preventDefault();
}

input?.addEventListener("change", (event) => {
  input.value = event.target.value;
});

form?.addEventListener("submit", onSubmit);

module.exports = searchWeather;
