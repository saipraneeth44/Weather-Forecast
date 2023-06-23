import Card from "./Card";
import "./Card.css";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Card.css";

function ForeCastCard(props) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const {
    date,
    description,
    temperature,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    wind_speed,
    iconcode,
  } = props;

  function formatHours(num) {
    if (num === 0) {
      return (num = 12);
    } else if (num > 12) {
      return (num = num % 12);
    } else {
      return num;
    }
  }
  function AMPM(num) {
    return num >= 12 ? "PM" : "AM";
  }

  return (
    <div className="forecastDisplay">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <span>Date: {date.split(" ")[0]}</span>{" "}
            <span>Day: {weekday[new Date(date).getDay()]}</span>{" "}
            <span>
              Time: {formatHours(new Date(date).getHours())}
              {AMPM(new Date(date).getHours())}{" "}
            </span>{" "}
            <span id="temperature">Temperature: {temperature} &#8457;</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card
            description={description}
            temperature={temperature}
            feels_like={feels_like}
            temp_min={temp_min}
            temp_max={temp_max}
            pressure={pressure}
            wind_speed={wind_speed}
            iconcode={iconcode}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default ForeCastCard;
