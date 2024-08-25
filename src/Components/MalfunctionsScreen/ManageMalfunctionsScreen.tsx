
import React, { useEffect, useState, useRef } from 'react';
import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";


import { TabletNavigationButton, IconImage, NavigationButtonParagraph } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import WeatherIcon from '../../Assets/weather.png';
import ConfigurationIcon from '../../Assets/settings.png'
import WarningIcon from '../../Assets/warning.png';
import RepositionIcon from '../../Assets/route.png'

const ManageMalfunctionsScreen = () => {

    const handleOnClick = () => {     
        // quick-action-common
        // common-malfuncion
        // engine-malfuncion
        // auto-pilot-malfunction
        console.log('Manage malfunction received on click')
    }

    let navigate = useNavigate();
    const routeChange = (navigateToPath: string) => {
        let path = navigateToPath;
        navigate(path);
    }
    
    const QuickActionRequest = (QuickActionRequestFromUser: any) => {
        console.log('\n\nQA: Main screen got ' + QuickActionRequestFromUser + ' Request')
    }

    const handleAmbientLightsChange = (event: any) => {
        console.log(event.target.value)
    }    

    const [QuickActionRequestString, setQuickActionRequestString] = useState('');

    return (
        <MainContainer>
            <Header title={"Manage Malfunctions Screen"} />
            <BodyContainer>                
                <TabletNavigationButton onClick={() => routeChange("/common-malfuncion")}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Common</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => routeChange("/engine-malfuncion")}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Engine</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => {
                    routeChange("/auto-pilot-malfunction")
                    handleOnClick()
                }}
                >
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Auto Pilot</NavigationButtonParagraph>
                </TabletNavigationButton>
                
                <TabletNavigationButton onClick={() => routeChange("/electrics-malfunction")}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Electrics</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => routeChange("/fuel-malfunction")}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Fuel</NavigationButtonParagraph>
                </TabletNavigationButton>

                
            </BodyContainer>

            <BodyContainer>                            
                <TabletNavigationButton onClick={() => routeChange("/transmission-malfunction")}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Transmission</NavigationButtonParagraph>
                </TabletNavigationButton>
                
                <TabletNavigationButton onClick={() => routeChange("/fire-protection-malfunction")}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Fire Protection</NavigationButtonParagraph>
                </TabletNavigationButton>
                
                <TabletNavigationButton onClick={() => routeChange("/hydralic-malfunction")}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Hydraulic</NavigationButtonParagraph>
                </TabletNavigationButton>
                
                <TabletNavigationButton onClick={() => routeChange("/flight-control-malfunction")}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Flight Controls</NavigationButtonParagraph>
                </TabletNavigationButton>
                
                <TabletNavigationButton onClick={() => routeChange("/communication-malfunction")}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Avionics</NavigationButtonParagraph>
                </TabletNavigationButton>                
                
            </BodyContainer>
            <Footer buttonsDisabled={false} />
            
        </MainContainer>
    )
}

export default ManageMalfunctionsScreen;