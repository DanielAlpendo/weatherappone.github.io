let weather = {
    apiKey: "783f5d9f35fde76419f4817ddbb921f3",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data
        const { icon, description } = data.weather[0];
        const { temp, humidity, pressure } = data.main;
        const { visibility } = data.visibility;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, pressure, visibility, speed);
        document.querySelector(".city").innerText = name + " Weather";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".visibility").innerText = "Visibility : " + visibility;
        document.querySelector(".pressure").innerText = "Pressure : " + pressure;
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function (){
        this.fetchWeather(document.querySelector(".src").value);
    }
};

document.querySelector(".search-bar i").addEventListener("click", function() {
    weather.search();
});

document.querySelector('.src').addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Jakarta");