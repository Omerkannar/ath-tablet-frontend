import { MainContainer, BodyContainer, VL } from "../../Common/Common.styles";
import CloudLayer from "./CloudLayer";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { CloudLayerType } from "../Weather.types";
import { useReducer, useState } from "react";


interface  WeatherCloudsScreenInterface {
    data : any;
    setCloudsChange: (layerData : CloudLayerType, layerName: string) => void;
}

const WeatherCloudsScreen = ({data, setCloudsChange} : WeatherCloudsScreenInterface) => {
    //console.log(data)
    const initialLaye1Data : CloudLayerType= {LAYER_TYPE: data.LAYER_TYPE, 
                                                LAYER_BASE_ALT:data.LAYER_BASE_ALT, 
                                                LAYER_CEILING_ALT: data.LAYER_CEILING_ALT, 
                                                LAYER_COVERAGE: data.LAYER_COVERAGE}
    // const initialLaye2Data : CloudLayerType= {LAYER_TYPE: data.LAYER_2_TYPE, 
    //                                             LAYER_BASE_ALT:data.LAYER_2_BASE_ALT, 
    //                                             LAYER_CEILING_ALT: data.LAYER_2_CEILING_ALT, 
    //                                             LAYER_COVERAGE: data.LAYER_2_COVERAGE}
    
    const handleCloudsChange = (layer : CloudLayerType, layerName: string) => {
        //console.log(`${layerName} received data: `, layer)
        setCloudsChange(layer, layerName);
    }                                              
    
    return (
        <MainContainer>
            <Header title={"Clouds"} />
            <BodyContainer>
                <CloudLayer data={initialLaye1Data} layerName="Layer 1" {...{handleCloudsChange}}/>
                {/* <CloudLayer data={initialLaye2Data} layerName="Layer 2" {...{handleCloudsChange}}/> */}
            </BodyContainer>
            <Footer buttonsDisabled={false} />

        </MainContainer>
    )
}

export default WeatherCloudsScreen;