const CurrentWeatherFinal = (setDegree, city, token, setResultWeather) => {
    console.log(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`)
        .then(res => res.json())
            .then(data => {
                console.log(data);
                setDegree(data.main.temp);
                setResultWeather(`it's ${data.main.temp}°C in ${city}`);
            })
        .catch((error) => {
            console.log(error);
        }
    )
}

export default CurrentWeatherFinal;