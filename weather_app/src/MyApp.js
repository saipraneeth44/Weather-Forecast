import App from "./App";
import Forecast from "./Forecast";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import "./Card.css";

function MyApp() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/weather" element={<App />} />
          <Route path="/forecast" element={<Forecast />} />
        </Routes>
      </div>
    </div>
  );
}

export default MyApp;
