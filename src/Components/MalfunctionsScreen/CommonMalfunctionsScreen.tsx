import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";


import { TabletNavigationButton, IconImage, NavigationButtonParagraph } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import WeatherIcon from '../../Assets/weather.png';
import ConfigurationIcon from '../../Assets/settings.png'
import WarningIcon from '../../Assets/warning.png';
import RepositionIcon from '../../Assets/route.png'

const CommonMalfunctionsScreen = () => {

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
            <Header title={"Common Malfunctions Screen"} />
            <BodyContainer>                
                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Compressor Stall</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Engine Flameout - no restart</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Malf of the fuel control system - decrease</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Malf of the fuel control system - increase</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Autopilot failure 1</NavigationButtonParagraph>
                </TabletNavigationButton>

                
            </BodyContainer>

            <BodyContainer>                
                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Autopilot failure 2</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Engine fire</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Rotor brake system degra</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Primary Flight Display PFD Failure</NavigationButtonParagraph>
                </TabletNavigationButton>           
            </BodyContainer>
            <Footer buttonsDisabled={false} />
            
        </MainContainer>
    )
}

export default CommonMalfunctionsScreen;