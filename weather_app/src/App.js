import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const [data, setData] = useState({
    description: "",
    temperature: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    wind_speed: 0,
    iconcode: "",
  });

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8c843f5b8b1bcf94210cd4d693298b70&units=Imperial`;
    let mydata = fetch(url);
    //console.log("the weather link is called");
    mydata
      .then((res) => {
        return res.json();
      })
      .then((item) => {
        setData({
          ...data,
          description: item.weather[0].description,
          temperature: item.main.temp,
          feels_like: item.main.feels_like,
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max,
          pressure: item.main.pressure,
          wind_speed: item.wind.speed,
          iconcode: item.weather[0].icon,
        });
      });
  }, [latitude, longitude]);
  //console.log(data);

  return (
    <>
      <div className="weather_card">
        <Card
          description={data.description}
          temperature={data.temperature}
          feels_like={data.feels_like}
          temp_min={data.temp_min}
          temp_max={data.temp_max}
          pressure={data.pressure}
          wind_speed={data.wind_speed}
          iconcode={data.iconcode}
        />
      </div>
    </>
  );
}

export default App;
