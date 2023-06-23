import "./Card.css";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
function Card(props) {
  const {
    description,
    temperature,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    wind_speed,
    iconcode,
  } = props;

  return (
    <div className="displayCard">
      <script
        src="https://kit.fontawesome.com/c42477e9b4.js"
        crossorigin="anonymous"
      ></script>
      <img
        src={`http://openweathermap.org/img/w/${iconcode}.png`}
        alt="weather icon"
      ></img>
      <p id="temperature">Temperature: {temperature} &#8457;</p>
      <p>Expecting: {description}</p>
      <p>feels_like: {feels_like} &#8457;</p>
      <p>
        Min Temperature :<ThermostatAutoIcon /> {temp_min} &#8457;
      </p>
      <p>
        Max Temperature:
        <ThermostatOutlinedIcon /> {temp_max} &#8457;
      </p>
      <p>Pressure: {pressure} hpa</p>
      <p>
        <AirOutlinedIcon /> {wind_speed} mph{" "}
      </p>
    </div>
  );
}
export default Card;
