const display = document.querySelector("#weather");
const input = document.querySelector("#city");
const form = document.querySelector('#form');

async function searchWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
  );
  const data = await response.json();

  if (data?.cod === 200) {
    const city = data.name;
    const temp = (data["main"]["temp"] - 273.15).toFixed() + "°C";
    const wind = data["wind"]["speed"] + " m/s";
    const description = data["weather"][0]["description"];
    display.innerHTML = `
    <div class="alert alert-primary" role="alert">
    The weather in ${city} is currently ${description}. <br/>
    The temperature is ${temp} <br/>
    The wind speed is ${wind}
    </div>
    `;
  } else {
    display.innerHTML =
      '<div class="alert alert-warning" role="alert">Error: not a valid city</div>';
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
