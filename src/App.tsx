import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./Components/MainScreen/MainScreen";
import WeatherScreen from "./Components/WeatherScreen/WeatherScreen";
import WeatherCloudsScreen from "./Components/WeatherScreen/Clouds/WeatherCloudsScreen";
import WeatherWindsScreen from "./Components/WeatherScreen/Winds/WeatherWindsScreen";
import WeatherPrecipitationScreen from "./Components/WeatherScreen/Precipitation/WeatherPrecipitationScreen";
import ConfigurationScreen from "./Components/ConfigurationScreen/ConfigurationScreen";
import ActiveMalfunctionsScreen from "./Components/ActiveMalfunctionsScreen/ActiveMalfunctionsScreen";
import RepositionScreen from "./Components/RepositionScreen/RepositionScreen";

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/weather" element={<WeatherScreen />} />
        <Route path="/weather-clouds" element={<WeatherCloudsScreen />} />
        <Route path="/weather-winds" element={<WeatherWindsScreen />} />
        <Route path="/weather-precipitation" element={<WeatherPrecipitationScreen />} />
        <Route path="/configuration" element={<ConfigurationScreen />} />
        <Route path="/reposition" element={<RepositionScreen />} />
        <Route path="/active-malfuncion" element={<ActiveMalfunctionsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
