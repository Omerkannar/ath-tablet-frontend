import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./Components/MainScreen/MainScreen";
import WeatherScreen from "./Components/WeatherScreen/WeatherScreen";
import WeatherCloudsScreen from "./Components/WeatherScreen/Clouds/WeatherCloudsScreen";
import WeatherWindsScreen from "./Components/WeatherScreen/Winds/WeatherWindsScreen";
import WeatherPrecipitationScreen from "./Components/WeatherScreen/Precipitation/WeatherPrecipitationScreen";
import ConfigurationScreen from "./Components/ConfigurationScreen/ConfigurationScreen";
import ActiveMalfunctionsScreen from "./Components/MalfunctionsScreen/ActiveMalfunctionsScreen";
import RepositionScreen from "./Components/RepositionScreen/RepositionScreen";
import Template from "./Components/TemplateScreen/Template";
import QuickActionScreen from "./Components/QuickActionScreen/QuickActionScreen"
import ManageMalfunctionsScreen from "./Components/MalfunctionsScreen/ManageMalfunctionsScreen"
import CommonMalfunctionsScreen from "./Components/MalfunctionsScreen/CommonMalfunctionsScreen"
import EngineMalfunctionsScreen from "./Components/MalfunctionsScreen/EngineMalfunctionsScreen"
import AutoPilotMalfunctionsScreen from "./Components/MalfunctionsScreen/AutoPilotEngineMalfunctionsScreen"
import ElectricsMalfunctionsScreen from "./Components/MalfunctionsScreen/ElectricsMalfunctionsScreen"
import FuelMalfunctionsScreen from "./Components/MalfunctionsScreen/FuelMalfunctionsScreen"
import TransmissionMalfunctionsScreen from "./Components/MalfunctionsScreen/TransmissionMalfunctionsScreen"
import FireProtectionMalfunctionsScreen from "./Components/MalfunctionsScreen/FireProtectionMalfunctionsScreen"
import HydralicMalfunctionsScreen from "./Components/MalfunctionsScreen/HydralicMalfunctionsScreen"
import FlightControlMalfunctionsScreen from "./Components/MalfunctionsScreen/FlightControlMalfunctionsScreen"
import CommunicationMalfunctionsScreen from "./Components/MalfunctionsScreen/CommunicationMalfunctionsScreen"

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
        <Route path="/manage-malfuncion" element={<ManageMalfunctionsScreen />} />
        <Route path="/common-malfuncion" element={<CommonMalfunctionsScreen />} />        
        <Route path="/engine-malfuncion" element={<EngineMalfunctionsScreen />} />        
        <Route path="/auto-pilot-malfunction" element={<AutoPilotMalfunctionsScreen/>} />  
        <Route path="/electrics-malfunction" element={<ElectricsMalfunctionsScreen/>} />                        
        <Route path="/fuel-malfunction" element={<FuelMalfunctionsScreen/>} />                        
        <Route path="/transmission-malfunction" element={<TransmissionMalfunctionsScreen/>} />                        
        <Route path="/fire-protection-malfunction" element={<FireProtectionMalfunctionsScreen/>} />                        
        <Route path="/hydralic-malfunction" element={<HydralicMalfunctionsScreen/>} />                        
        <Route path="/flight-control-malfunction" element={<FlightControlMalfunctionsScreen/>} />                        
        <Route path="/communication-malfunction" element={<CommunicationMalfunctionsScreen/>} />                        
        <Route path="/quick-action" element={<QuickActionScreen />} />        
        <Route path="/template" element={<Template />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
