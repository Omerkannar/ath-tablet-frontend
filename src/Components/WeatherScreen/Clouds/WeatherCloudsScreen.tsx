import { MainContainer, BodyContainer, VL } from "../../Common/Common.styles";
import CloudLayer from "./CloudLayer";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { CloudLayerType } from "../Weather.types";
import { useEffect, useState } from "react";


interface  WeatherCloudsScreenInterface {

}

const WeatherCloudsScreen = () => {


    const [temp, setTemp] = useState(0);
    const [cloudsDataFromBE, setCloudDataFromBE] = useState<CloudLayerType[]>();
  
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
      fetch("http://127.0.0.1:5000/getCloudLayerData", {
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
          if (data !== undefined) {
            setCloudDataFromBE(data);
          }
        }, error => {
          console.log('Unable to parse data')
        });
    }



    
    const handleCloudsChange = (layer : CloudLayerType) => {
        console.log(`${layer.LAYER_NAME} received data: `, layer)
            console.log("App.tsx: Received data for ", layer.LAYER_NAME, " Data: ", layer);
            const request = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
              body: JSON.stringify({
                  LAYER_NAME: layer.LAYER_NAME,
                  LAYER_TYPE: layer.LAYER_TYPE,
                  LAYER_BASE_ALT: layer.LAYER_BASE_ALT,
                  LAYER_CEILING_ALT: layer.LAYER_CEILING_ALT,
                  LAYER_COVERAGE: layer.LAYER_COVERAGE
              })
          };
          fetch("http://127.0.0.1:5000/setCloudLayerData", request)
              .then(response => response.json())
              .then(data => console.log(data));
        
    }                                              
    
    return (
        <MainContainer>
            <Header title={"Clouds"} />
            <BodyContainer>
                {cloudsDataFromBE?.map ((l) => {
                    return (
                        <CloudLayer data={l} {...{handleCloudsChange}}/>    
                    )
                })}
            </BodyContainer>
            <Footer buttonsDisabled={false} />

        </MainContainer>
    )
}

export default WeatherCloudsScreen;