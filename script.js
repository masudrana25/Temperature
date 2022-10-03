let weather = {
    apikey: "02f883a2f30fc1f55b0df40f4e6293ec",
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=02f883a2f30fc1f55b0df40f4e6293ec`)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {

        const {name} = data;
        const {icon, description} = data.weather[0];
        let {temp} = data.main;
        temperature = parseInt(temp - 273);
        console.log(name,icon,description,temp);
        document.getElementById("image").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.getElementById("city").innerText = name;
        document.getElementById("temperature").innerText = temperature;
        document.getElementById("description").innerText = description;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')";
    },
    search: function(){
        this.fetchWeather(document.getElementById("search_bar_text").value)
    }
};

document.getElementById("search-button").addEventListener("click", function(){
    weather.search();
});

document.getElementById("search-button").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Dhaka");