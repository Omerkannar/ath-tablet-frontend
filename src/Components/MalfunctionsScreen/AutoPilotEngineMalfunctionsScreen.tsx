import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";


import { TabletNavigationButton, IconImage, NavigationButtonParagraph } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import WeatherIcon from '../../Assets/weather.png';
import ConfigurationIcon from '../../Assets/settings.png'
import WarningIcon from '../../Assets/warning.png';
import RepositionIcon from '../../Assets/route.png'

export interface QuickActionItemConstProps {
    title?: string;
    QuickActionRequest?: any;
    QuickActionRequestString?: string;
}


const AutoPilotMalfunctionsScreen = ({title, QuickActionRequest, QuickActionRequestString}: QuickActionItemConstProps) => {

    const handleOnClick = (event : any ) => {
        console.log('Debug 1 ', event);
        console.log('Debug 2 ', event.target.name);
        console.log('Debug 3 ', event.target.outerText);

        QuickActionRequestString = event.target.name;
        //QuickActionRequest(event.target.name);
        //QuickActionRequestString = event.target.outerText;        

    }

    let navigate = useNavigate();

    const routeChange = (navigateToPath: string) => {
        let path = navigateToPath;
        navigate(path);
    }

    return (
        <MainContainer>
            <Header title={"Auto Pilot Malfunctions Screen"} />
            <BodyContainer>                
                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Autopilot Failure 1</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Autopilot Failure 2</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Vertical Gypo 1</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Vertical Gypo 2</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Pitch Actuator 1</NavigationButtonParagraph>
                </TabletNavigationButton>

                
            </BodyContainer>

            <BodyContainer>                
                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Roll Actuator 2</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Yaw Actuator</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Oscillatory During Roll</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Repeated Disturbances During Roll</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Helipilot Control Panel</NavigationButtonParagraph>
                </TabletNavigationButton>                
            </BodyContainer>
            <Footer buttonsDisabled={false} />
            
        </MainContainer>
    )
}

export default AutoPilotMalfunctionsScreen;