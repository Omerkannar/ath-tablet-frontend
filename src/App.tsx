import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./Components/MainScreen/MainScreen";
import WeatherScreen from "./Components/WeatherScreen/WeatherScreen";
import WeatherCloudsScreen from "./Components/WeatherScreen/Clouds/WeatherCloudsScreen";
import WeatherWindsScreen from "./Components/WeatherScreen/WeatherWindsScreen";
import WeatherPrecipitationScreen from "./Components/WeatherScreen/WeatherPrecipitationScreen";
import ConfigurationScreen from "./Components/ConfigurationScreen/ConfigurationScreen";
import ActiveMalfunctionsScreen from "./Components/ActiveMalfunctionsScreen/ActiveMalfunctionsScreen";
import RepositionScreen from "./Components/RepositionScreen/RepositionScreen";
import {CloudLayerType} from './Components/WeatherScreen/Weather.types';

function App() {

  const [temp, setTemp] = useState(0);
  const [dataFromBE, setDataFromBE] = React.useState({});

  useEffect(() => {
    const tempInterval = setInterval(() => {
      setTemp((prevTemp) => prevTemp + 1)
    }, 1000 * 1);
    return () => {
      clearInterval(tempInterval);
    }
  }, []);

  useEffect(() => {
    handleTextFromBEChange()
  }, [temp]);

  const handleTextFromBEChange = () => {
    fetch("http://127.0.0.1:5000/getCMDSPanelData", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      }
    })
      .then(Response => Response.json()
        , error => {
          console.log('Unable to fetch data')
        }
      )
      .then(data => {
        //handleParseMessageFromBE(data)
        if (data !== undefined) {
          setDataFromBE(data);

        }
      }, error => {
        console.log('Unable to parse data')
      });
  }

  const setCloudsChange = (layer : CloudLayerType, layerName: string) => {
    console.log("App.tsx: Received data for ", layerName, " Data: ", layer);
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
          LAYER_NAME: layerName,
          LAYER_TYPE: layer.LAYER_TYPE,
          LAYER_BASE_ALT: layer.LAYER_BASE_ALT,
          LAYER_CEILING_ALT: layer.LAYER_CEILING_ALT,
          LAYER_COVERAGE: layer.LAYER_COVERAGE
      })
  };
  fetch("http://127.0.0.1:5000/setCMDSPanelData", request)
      .then(response => response.json())
      .then(data => console.log(data));

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/weather" element={<WeatherScreen />} />
        <Route path="/weather-clouds" element={<WeatherCloudsScreen data={dataFromBE} {...{setCloudsChange}} />} />
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
