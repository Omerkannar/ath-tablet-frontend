import { useEffect, useState } from "react";
import { VL } from "../../Common/Common.styles";
import {
    WindLayerContainer,
    WindLayerHeadingContainer,
    WindLayerAltitudeContainer,
    WindsTypeButton,
    WindLayerBoxTitle,
    WindsAltitudeText,
    WindLayerHeading,
    ButtonsContainer,
    LayerButton,
} from "../Weather.styles";

import { WindLayerType } from "../Weather.types";



interface WindLayerInterface {
    data: WindLayerType;
    handleWindsChange: (layer: WindLayerType) => void;
}


const MAX_LAYER_ALTITUDE: number = 40000;
const LAYER_ALTITUDE_STEP: number = 500;
const MAX_LAYER_SPEED: number = 120;



const WindLayer = ({ data, handleWindsChange }: WindLayerInterface) => {

    //console.log(data)

    const [windsData, setWindsData] = useState<WindLayerType>(data);


    useEffect(() => {
        setWindsData(data)
    }, [data])


    useEffect(() => {
        if (data !== windsData) {
            handleWindsChange(windsData);
        }
    }, [windsData])





    const handleLayerCeilingAltitudeChange = (event: any) => {
        let tmpLayerCeilingAltitude: number = windsData.LAYER_CEILING_ALT;
        tmpLayerCeilingAltitude = event.target.innerText === "+" ? tmpLayerCeilingAltitude + 500 : tmpLayerCeilingAltitude - 500;
        if (tmpLayerCeilingAltitude > MAX_LAYER_ALTITUDE) {
            tmpLayerCeilingAltitude = MAX_LAYER_ALTITUDE;
        } else if (tmpLayerCeilingAltitude <= LAYER_ALTITUDE_STEP) {
            tmpLayerCeilingAltitude = LAYER_ALTITUDE_STEP;
        }
        if (tmpLayerCeilingAltitude <= windsData.LAYER_BASE_ALT) {
            setWindsData({ ...windsData, LAYER_BASE_ALT: tmpLayerCeilingAltitude - LAYER_ALTITUDE_STEP, LAYER_CEILING_ALT: tmpLayerCeilingAltitude });
        } else {
            setWindsData({ ...windsData, LAYER_CEILING_ALT: tmpLayerCeilingAltitude });
        }

    }

    const handleLayerBaseAltitudeChange = (event: any) => {
        let tmpLayerBaseAltitude: number = windsData.LAYER_BASE_ALT;
        tmpLayerBaseAltitude = event.target.innerText === "+" ? tmpLayerBaseAltitude + 500 : tmpLayerBaseAltitude - 500;
        if (tmpLayerBaseAltitude > MAX_LAYER_ALTITUDE) {
            tmpLayerBaseAltitude = MAX_LAYER_ALTITUDE;
        } else if (tmpLayerBaseAltitude < 0) {
            tmpLayerBaseAltitude = 0;
        }
        if (tmpLayerBaseAltitude >= windsData.LAYER_CEILING_ALT) {
            setWindsData({ ...windsData, LAYER_BASE_ALT: tmpLayerBaseAltitude, LAYER_CEILING_ALT: tmpLayerBaseAltitude + LAYER_ALTITUDE_STEP });
        } else {
            setWindsData({ ...windsData, LAYER_BASE_ALT: tmpLayerBaseAltitude });
        }
        
    }

    const handleLayerSpeedChange = (event: any) => {
        let tmpLayerSpeed: number = windsData.LAYER_SPEED;
        tmpLayerSpeed = event.target.innerText === "+" ? tmpLayerSpeed + 5 : tmpLayerSpeed - 5;
        if (tmpLayerSpeed > MAX_LAYER_SPEED) {
            tmpLayerSpeed = MAX_LAYER_SPEED;
        } else if (tmpLayerSpeed < 0) {
            tmpLayerSpeed = 0;
        }
        setWindsData({ ...windsData, LAYER_SPEED: tmpLayerSpeed });
    }

    const handleLayerDirectionChange = (event: any) => {
        let tmpLayerDirection: number = windsData.LAYER_DIRECTION;
        tmpLayerDirection = event.target.innerText === "+" ? tmpLayerDirection + 5 : tmpLayerDirection - 5;
        if (tmpLayerDirection >= 360) {
            tmpLayerDirection = tmpLayerDirection - 360;
        } else if (tmpLayerDirection < 0) {
            tmpLayerDirection = 360 + tmpLayerDirection;
        }
        setWindsData({ ...windsData, LAYER_DIRECTION: tmpLayerDirection });
    }


    return (
        <WindLayerContainer>

            <WindLayerHeadingContainer>
                <WindLayerHeading>{windsData.LAYER_NAME}</WindLayerHeading>
            </WindLayerHeadingContainer>
            <VL />

            <WindLayerAltitudeContainer>
                <WindsTypeButton>
                    <WindLayerBoxTitle>Base Altitude</WindLayerBoxTitle>
                    <WindsAltitudeText>{windsData.LAYER_BASE_ALT} ft</WindsAltitudeText>
                    <ButtonsContainer>
                        <LayerButton onClick={handleLayerBaseAltitudeChange}>-</LayerButton>
                        <LayerButton onClick={handleLayerBaseAltitudeChange}>+</LayerButton>
                    </ButtonsContainer>
                </WindsTypeButton>
            </WindLayerAltitudeContainer>
            <VL />

            <WindLayerAltitudeContainer>
                <WindsTypeButton>
                    <WindLayerBoxTitle>Ceiling Altitude</WindLayerBoxTitle>
                    <WindsAltitudeText>{windsData.LAYER_CEILING_ALT} ft</WindsAltitudeText>
                    <ButtonsContainer>
                        <LayerButton onClick={handleLayerCeilingAltitudeChange}>-</LayerButton>
                        <LayerButton onClick={handleLayerCeilingAltitudeChange}>+</LayerButton>
                    </ButtonsContainer>
                </WindsTypeButton>
            </WindLayerAltitudeContainer>
            <VL />

            <WindLayerAltitudeContainer>
                <WindsTypeButton>
                    <WindLayerBoxTitle>Speed</WindLayerBoxTitle>
                    <WindsAltitudeText>{windsData.LAYER_SPEED} Knots</WindsAltitudeText>
                    <ButtonsContainer>
                        <LayerButton onClick={handleLayerSpeedChange}>-</LayerButton>
                        <LayerButton onClick={handleLayerSpeedChange}>+</LayerButton>
                    </ButtonsContainer>
                </WindsTypeButton>
            </WindLayerAltitudeContainer>
            <VL />

            <WindLayerAltitudeContainer>
                <WindsTypeButton>
                    <WindLayerBoxTitle>Direction</WindLayerBoxTitle>
                    <WindsAltitudeText>{windsData.LAYER_DIRECTION} °Deg</WindsAltitudeText>
                    <ButtonsContainer>
                        <LayerButton onClick={handleLayerDirectionChange}>-</LayerButton>
                        <LayerButton onClick={handleLayerDirectionChange}>+</LayerButton>
                    </ButtonsContainer>
                </WindsTypeButton>
            </WindLayerAltitudeContainer>

        </WindLayerContainer>

    )
}

export default WindLayer;