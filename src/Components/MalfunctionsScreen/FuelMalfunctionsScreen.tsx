import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";


import { TabletNavigationButton, IconImage, NavigationButtonParagraph } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import WeatherIcon from '../../Assets/weather.png';
import ConfigurationIcon from '../../Assets/settings.png'
import WarningIcon from '../../Assets/warning.png';
import RepositionIcon from '../../Assets/route.png'

const FuelMalfunctionsScreen = () => {

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
            <Header title={"Fuel Malfunctions Screen"} />
            <BodyContainer>                
                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Dual Pump Failure</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Filter Partialy Clogged</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Fuel Tank : Leak 1</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Fuel Tank : Leak 2</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Fuel Low Sensor Failure</NavigationButtonParagraph>
                </TabletNavigationButton>

                
            </BodyContainer>

            <BodyContainer>                
                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Fuel Pump : Failure 1</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Fuel Pump : Failure 2</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Fuel Drain : Open 1</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Fuel Drain : Open  2</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={handleOnClick}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Transfer Pump Failure</NavigationButtonParagraph>
                </TabletNavigationButton>                
            </BodyContainer>
            <Footer buttonsDisabled={false} />
            
        </MainContainer>
    )
}

export default FuelMalfunctionsScreen;