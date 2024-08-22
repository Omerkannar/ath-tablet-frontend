import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";


import { TabletNavigationButton, IconImage, NavigationButtonParagraph } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import WeatherIcon from '../../Assets/weather.png';
import ConfigurationIcon from '../../Assets/settings.png'
import WarningIcon from '../../Assets/warning.png';
import RepositionIcon from '../../Assets/route.png'

const TransmissionMalfunctionsScreen = () => {

    const handleOnClick = () => {     
        // quick-action-common
        //common-malfuncion
    }

    let navigate = useNavigate();

    const routeChange = (navigateToPath: string) => {
        let path = navigateToPath;
        navigate(path);
    }

    return (
        <MainContainer>
            <Header title={"Transmission Malfunctions Screen"} />
            <BodyContainer>                
                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Eng reduction gearbox oil chips</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Main gearbox oil temp high</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Main GearBox Oil pressure low</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Main GearBox Oil chips</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Rotor Brake System Degreded</NavigationButtonParagraph>
                </TabletNavigationButton>

                
            </BodyContainer>

            <BodyContainer>                
                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Tail Rotor Control System Failure</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Tail Rotor control seizure</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Tail Rotor Gearbox  Chips </NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph> Tail rotor control failure </NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Tail rotor driveshaft failure</NavigationButtonParagraph>
                </TabletNavigationButton>                
            </BodyContainer>
            <Footer buttonsDisabled={false} />
            
        </MainContainer>
    )
}

export default TransmissionMalfunctionsScreen;