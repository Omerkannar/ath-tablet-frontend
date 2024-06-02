import { useEffect, useState } from "react";
import { MainContainer, VL } from "../../Common/Common.styles";
import {
    CloudLayerContainer,
    CloudLayerHeadingContainer,
    CloudLayerHeading,
    CloudLayerTypeContainer,
    CloudLayerAltitudeContainer,
    CloudLayerCoverageContainer,
    CloudLayerBoxTitle,
    CloudsTypeButton,
    CloudsTypeText,
    CloudsCoverageText,
    ButtonsContainer,
    LayerButton,
    CloudsAltitudeText
} from "../Weather.styles";

import { CloudLayerType } from "../Weather.types";



interface CloudLayerInterface {
    layerName: string;
    data: CloudLayerType;
    handleCloudsChange: (layer : CloudLayerType, LayerName: string) => void;
}


const MAX_LAYER_ALTITUDE : number = 40000;

//const cloudTypes = ["Stratus", "Cumulus", "Cirrus", "Fractus"];


const CloudLayer = ({ layerName, data, handleCloudsChange }: CloudLayerInterface) => {

    //console.log(data)

    const [cloudsData, SetCloudData] = useState<CloudLayerType>(data);
    

    useEffect(() => {
        handleCloudsChange(cloudsData, layerName);
    }, [cloudsData])

    const handleCloudTypeChange = (event: any) => {
        switch (cloudsData.LAYER_TYPE) {
            case "Stratus":
                SetCloudData({...cloudsData, LAYER_TYPE: "Cumulus"});
                break;
            case "Cumulus":
                SetCloudData({...cloudsData, LAYER_TYPE: "Cirrus"});
                break;
            case "Cirrus":
                SetCloudData({...cloudsData, LAYER_TYPE: "Fractus"});
                break;
            case "Fractus":
                SetCloudData({...cloudsData, LAYER_TYPE: "Stratus"});
                break;
            default:
                SetCloudData({...cloudsData, LAYER_TYPE: "Unknown"});
                break;
        }
    }


    const handleLayerCoverageChange = (event: any) => {
        let tmpLayerCovearge : number = cloudsData.LAYER_COVERAGE;
        tmpLayerCovearge = event.target.innerText === "+" ? tmpLayerCovearge + 1 : tmpLayerCovearge - 1;
        if (tmpLayerCovearge > 8) {
            tmpLayerCovearge = 0;
        } else if (tmpLayerCovearge < 0) {
            tmpLayerCovearge = 8;
        }
        SetCloudData({...cloudsData, LAYER_COVERAGE: tmpLayerCovearge});
    }

    const handleLayerCeilingAltitudeChange = (event: any) => {
        let tmpLayerCeilingAltitude : number = cloudsData.LAYER_CEILING_ALT;
        tmpLayerCeilingAltitude = event.target.innerText === "+" ? tmpLayerCeilingAltitude + 500 : tmpLayerCeilingAltitude - 500;
        if (tmpLayerCeilingAltitude > MAX_LAYER_ALTITUDE) {
            tmpLayerCeilingAltitude = MAX_LAYER_ALTITUDE;
        } else if (tmpLayerCeilingAltitude < cloudsData.LAYER_BASE_ALT) {
            SetCloudData({...cloudsData, LAYER_BASE_ALT: tmpLayerCeilingAltitude});
        }
        SetCloudData({...cloudsData, LAYER_CEILING_ALT: tmpLayerCeilingAltitude});
    }

    const handleLayerBaseAltitudeChange = (event: any) => {
        let tmpLayerBaseAltitude :number = cloudsData.LAYER_BASE_ALT;
        tmpLayerBaseAltitude = event.target.innerText === "+" ? tmpLayerBaseAltitude + 500 : tmpLayerBaseAltitude - 500;
        if (tmpLayerBaseAltitude > MAX_LAYER_ALTITUDE) {
            tmpLayerBaseAltitude = MAX_LAYER_ALTITUDE;
        } else if (tmpLayerBaseAltitude < 0) {
            tmpLayerBaseAltitude = 0;
        }
        if (tmpLayerBaseAltitude > cloudsData.LAYER_CEILING_ALT) {
            SetCloudData({...cloudsData, LAYER_CEILING_ALT: tmpLayerBaseAltitude});
        }
        SetCloudData({...cloudsData, LAYER_BASE_ALT: tmpLayerBaseAltitude});
    }


    return (
        <CloudLayerContainer>

            <CloudLayerHeadingContainer>
                <CloudLayerHeading>{layerName}</CloudLayerHeading>
            </CloudLayerHeadingContainer>
            <VL />

            <CloudLayerTypeContainer>
                <CloudsTypeButton onClick={handleCloudTypeChange}>
                    <CloudLayerBoxTitle>Type</CloudLayerBoxTitle>
                    <CloudsTypeText>{cloudsData.LAYER_TYPE}</CloudsTypeText>
                </CloudsTypeButton>
            </CloudLayerTypeContainer>
            <VL />

            <CloudLayerAltitudeContainer>
                <CloudsTypeButton>
                    <CloudLayerBoxTitle>Base Altitude</CloudLayerBoxTitle>
                    <CloudsAltitudeText>{cloudsData.LAYER_BASE_ALT}</CloudsAltitudeText>
                    <ButtonsContainer>
                        <LayerButton onClick={handleLayerBaseAltitudeChange}>-</LayerButton>
                        <LayerButton onClick={handleLayerBaseAltitudeChange}>+</LayerButton>
                    </ButtonsContainer>
                </CloudsTypeButton>
            </CloudLayerAltitudeContainer>
            <VL />

            <CloudLayerAltitudeContainer>
                <CloudsTypeButton>
                    <CloudLayerBoxTitle>Ceiling Altitude</CloudLayerBoxTitle>
                    <CloudsAltitudeText>{cloudsData.LAYER_CEILING_ALT}</CloudsAltitudeText>
                    <ButtonsContainer>
                        <LayerButton onClick={handleLayerCeilingAltitudeChange}>-</LayerButton>
                        <LayerButton onClick={handleLayerCeilingAltitudeChange}>+</LayerButton>
                    </ButtonsContainer>
                </CloudsTypeButton>
            </CloudLayerAltitudeContainer>
            <VL />

            <CloudLayerCoverageContainer>
                <CloudsTypeButton>
                    <CloudLayerBoxTitle>Coverage</CloudLayerBoxTitle>
                    <CloudsCoverageText>{cloudsData.LAYER_COVERAGE} / 8</CloudsCoverageText>
                    <ButtonsContainer>
                        <LayerButton onClick={handleLayerCoverageChange}>-</LayerButton>
                        <LayerButton onClick={handleLayerCoverageChange}>+</LayerButton>
                    </ButtonsContainer>
                </CloudsTypeButton>
            </CloudLayerCoverageContainer>
        </CloudLayerContainer>

    )
}

export default CloudLayer;