import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";


import { TabletNavigationButton, IconImage, NavigationButtonParagraph } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import WeatherIcon from '../../Assets/weather.png';
import ConfigurationIcon from '../../Assets/settings.png'
import WarningIcon from '../../Assets/warning.png';
import RepositionIcon from '../../Assets/route.png'

const EngineMalfunctionsScreen = () => {

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
            <Header title={"Engine Malfunctions Screen"} />
            <BodyContainer>                
                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Compressor stall</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Engine flameout no restart</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Engine drive shaft</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Engine oil temp high</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Fuel system decrease</NavigationButtonParagraph>
                </TabletNavigationButton>                
            </BodyContainer>

            <BodyContainer>                
                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Fuel system increase</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Engine hot start</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Oil pressure failure yellow</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Airframe unit GEA 1</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Airframe unit GEA 2</NavigationButtonParagraph>
                </TabletNavigationButton>                
            </BodyContainer>
            <Footer buttonsDisabled={false} />
            
        </MainContainer>
    )
}

export default EngineMalfunctionsScreen;