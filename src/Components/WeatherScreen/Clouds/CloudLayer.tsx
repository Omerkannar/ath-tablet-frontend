import { useEffect, useState } from "react";
import { VL } from "../../Common/Common.styles";
import {
    WeatherLayerContainer,
    WeatherLayerSectionContainer,
    LayerName,
    SectionTitle,
    WeatherSectionButton,
    WetherSectionText,
    ButtonsContainer,
    LayerButton
} from "../Weather.styles";

import { CloudLayerType } from "../Weather.types";



interface CloudLayerInterface {
    data: CloudLayerType;
    handleCloudsChange: (layer: CloudLayerType) => void;
}


const MAX_LAYER_ALTITUDE: number = 40000;
const LAYER_ALTITUDE_STEP: number = 500;


//const cloudTypes = ["Stratus", "Cumulus", "Cirrus", "Fractus"];


const CloudLayer = ({ data, handleCloudsChange }: CloudLayerInterface) => {

    const [cloudsData, setCloudData] = useState<CloudLayerType>(data);


    useEffect(() => {
        setCloudData(data)
    }, [data])


    useEffect(() => {
        if (data !== cloudsData) {
            handleCloudsChange(cloudsData);
        }
    }, [cloudsData])

    const handleCloudTypeChange = (event: any) => {
        switch (cloudsData.LAYER_TYPE) {
            case "Stratus":
                setCloudData({ ...cloudsData, LAYER_TYPE: "Cumulus" });
                break;
            case "Cumulus":
                setCloudData({ ...cloudsData, LAYER_TYPE: "Cirrus" });
                break;
            case "Cirrus":
                setCloudData({ ...cloudsData, LAYER_TYPE: "Fractus" });
                break;
            case "Fractus":
                setCloudData({ ...cloudsData, LAYER_TYPE: "Stratus" });
                break;
            default:
                setCloudData({ ...cloudsData, LAYER_TYPE: "Unknown" });
                break;
        }
    }


    const handleLayerCoverageChange = (event: any) => {
        let tmpLayerCovearge: number = cloudsData.LAYER_COVERAGE;
        tmpLayerCovearge = event.target.innerText === "+" ? tmpLayerCovearge + 1 : tmpLayerCovearge - 1;
        if (tmpLayerCovearge > 8) {
            tmpLayerCovearge = 0;
        } else if (tmpLayerCovearge < 0) {
            tmpLayerCovearge = 8;
        }
        setCloudData({ ...cloudsData, LAYER_COVERAGE: tmpLayerCovearge });
    }

    const handleLayerCeilingAltitudeChange = (event: any) => {
        let tmpLayerCeilingAltitude: number = cloudsData.LAYER_CEILING_ALT;
        tmpLayerCeilingAltitude = event.target.innerText === "+" ? tmpLayerCeilingAltitude + LAYER_ALTITUDE_STEP : tmpLayerCeilingAltitude - LAYER_ALTITUDE_STEP;
        if (tmpLayerCeilingAltitude > MAX_LAYER_ALTITUDE) {
            tmpLayerCeilingAltitude = MAX_LAYER_ALTITUDE;
        } else if (tmpLayerCeilingAltitude <= LAYER_ALTITUDE_STEP) {
            tmpLayerCeilingAltitude = LAYER_ALTITUDE_STEP;
        }
        if (tmpLayerCeilingAltitude <= cloudsData.LAYER_BASE_ALT) {
            //console.log('Ceiling is lower than base')
            setCloudData({ ...cloudsData, LAYER_BASE_ALT: tmpLayerCeilingAltitude - LAYER_ALTITUDE_STEP, LAYER_CEILING_ALT: tmpLayerCeilingAltitude });
        } else {
            setCloudData({ ...cloudsData, LAYER_CEILING_ALT: tmpLayerCeilingAltitude });
        }
    }

    const handleLayerBaseAltitudeChange = (event: any) => {
        let tmpLayerBaseAltitude: number = cloudsData.LAYER_BASE_ALT;
        tmpLayerBaseAltitude = event.target.innerText === "+" ? tmpLayerBaseAltitude + LAYER_ALTITUDE_STEP : tmpLayerBaseAltitude - LAYER_ALTITUDE_STEP;
        if (tmpLayerBaseAltitude > MAX_LAYER_ALTITUDE) {
            tmpLayerBaseAltitude = MAX_LAYER_ALTITUDE;
        } else if (tmpLayerBaseAltitude < 0) {
            tmpLayerBaseAltitude = 0;
        }

        if (tmpLayerBaseAltitude >= cloudsData.LAYER_CEILING_ALT) {
            //console.log('Base is higher than ceiling')
            setCloudData({ ...cloudsData, LAYER_BASE_ALT: tmpLayerBaseAltitude, LAYER_CEILING_ALT: tmpLayerBaseAltitude + LAYER_ALTITUDE_STEP });
        } else {
            setCloudData({ ...cloudsData, LAYER_BASE_ALT: tmpLayerBaseAltitude });
        }
    }


    return (
        <WeatherLayerContainer>

            <WeatherLayerSectionContainer width="14%">
                <LayerName>{cloudsData.LAYER_NAME}</LayerName>
            </WeatherLayerSectionContainer>
            <VL />
            <WeatherLayerSectionContainer width="20%">
                <WeatherSectionButton onClick={handleCloudTypeChange}>
                    <SectionTitle>Type</SectionTitle>
                    <WetherSectionText height="100px">{cloudsData.LAYER_TYPE}</WetherSectionText>
                </WeatherSectionButton>
            </WeatherLayerSectionContainer>
            <VL />
            <WeatherLayerSectionContainer width="23%">
                <WeatherSectionButton>
                    <SectionTitle>Base Altitude</SectionTitle>
                    <WetherSectionText>{cloudsData.LAYER_BASE_ALT} ft</WetherSectionText>
                    <ButtonsContainer>
                        <LayerButton onClick={handleLayerBaseAltitudeChange}>-</LayerButton>
                        <LayerButton onClick={handleLayerBaseAltitudeChange}>+</LayerButton>
                    </ButtonsContainer>
                </WeatherSectionButton>
            </WeatherLayerSectionContainer>
            <VL />

            <WeatherLayerSectionContainer width="23%">
                <WeatherSectionButton>
                    <SectionTitle>Ceiling Altitude</SectionTitle>
                    <WetherSectionText>{cloudsData.LAYER_CEILING_ALT} ft</WetherSectionText>
                    <ButtonsContainer>
                        <LayerButton onClick={handleLayerCeilingAltitudeChange}>-</LayerButton>
                        <LayerButton onClick={handleLayerCeilingAltitudeChange}>+</LayerButton>
                    </ButtonsContainer>
                </WeatherSectionButton>
            </WeatherLayerSectionContainer>
            <VL />

            <WeatherLayerSectionContainer width="20%">
                <WeatherSectionButton>
                    <SectionTitle>Coverage</SectionTitle>
                    <WetherSectionText>{cloudsData.LAYER_COVERAGE} / 8</WetherSectionText>
                    <ButtonsContainer>
                        <LayerButton onClick={handleLayerCoverageChange}>-</LayerButton>
                        <LayerButton onClick={handleLayerCoverageChange}>+</LayerButton>
                    </ButtonsContainer>
                </WeatherSectionButton>
            </WeatherLayerSectionContainer>
        </WeatherLayerContainer>

    )
}

export default CloudLayer;