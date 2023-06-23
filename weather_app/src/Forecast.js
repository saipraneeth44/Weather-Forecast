import { useState, useEffect } from "react";
import ForeCastCard from "./ForeCastCard";
function Forecast() {
  const [data, setData] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  //console.log(data);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    let mydata = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=8c843f5b8b1bcf94210cd4d693298b70&units=Imperial`
    );
    //console.log("the forecast link is called");
    mydata
      .then((res) => {
        return res.json();
      })
      .then((item) => {
        setData(item.list);
      });
  }, [latitude, longitude]);

  return (
    <div>
      {data.map((item, i) => {
        return (
          <ForeCastCard
            index={i}
            date={item.dt_txt}
            description={item.weather[0].description}
            temperature={item.main.temp}
            feels_like={item.main.feels_like}
            temp_min={item.main.temp_min}
            temp_max={item.main.temp_max}
            pressure={item.main.pressure}
            wind_speed={item.wind.speed}
            iconcode={item.weather[0].icon}
          />
        );
      })}
    </div>
  );
}

export default Forecast;
