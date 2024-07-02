import { MainContainer, BodyContainer } from "../../Common/Common.styles";
import WindLayer from "./WindLayer";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { WindLayerType } from "../Weather.types";
import { useEffect, useState } from "react";


const WeatherWindsScreen = () => {

    // const initialData = [{
    //     "LAYER_NAME": "Layer 1",
    //     "LAYER_BASE_ALT": 0,
    //     "LAYER_CEILING_ALT": 0,
    //     "LAYER_SPEED": 0,
    //     "LAYER_DIRECTION": 0
    // }, {
    //     "LAYER_NAME": "Layer 2",
    //     "LAYER_BASE_ALT": 1000,
    //     "LAYER_CEILING_ALT": 2000,
    //     "LAYER_SPEED": 50,
    //     "LAYER_DIRECTION": 90
    // }, {
    //     "LAYER_NAME": "Layer 3",
    //     "LAYER_BASE_ALT": 5000,
    //     "LAYER_CEILING_ALT": 9000,
    //     "LAYER_SPEED": 90,
    //     "LAYER_DIRECTION": 135
    // }]

    

    const [temp, setTemp] = useState(0);
    const [windsDataFromBE, setWindsDataFromBE] = useState<WindLayerType[]>();


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
        fetch("http://127.0.0.1:5000/getWindLayerData", {
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
                    setWindsDataFromBE(data);
                }
            }, error => {
                console.log('Unable to parse data')
            });
    }

    const handleWindsChange = (layer: WindLayerType) => {
        console.log(`${layer.LAYER_NAME} received data: `, layer)
        console.log("App.tsx: Received data for ", layer.LAYER_NAME, " Data: ", layer);
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({
                LAYER_NAME: layer.LAYER_NAME,
                LAYER_BASE_ALT: layer.LAYER_BASE_ALT,
                LAYER_CEILING_ALT: layer.LAYER_CEILING_ALT,
                LAYER_SPEED: layer.LAYER_SPEED,
                LAYER_DIRECTION: layer.LAYER_DIRECTION
            })
        };
        fetch("http://127.0.0.1:5000/setWindLayerData", request)
            .then(response => response.json())
            .then(data => console.log(data));

    }

    return (
        <MainContainer>
            <Header title={"Winds"} />
            <BodyContainer>
                {windsDataFromBE?.map((windLayer) => {
                    return (
                        <WindLayer data={windLayer} {...{ handleWindsChange }} />
                    )
                })}
            </BodyContainer>
            <Footer buttonsDisabled={false} />

        </MainContainer>
    )
}

export default WeatherWindsScreen;