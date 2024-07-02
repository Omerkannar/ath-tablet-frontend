import { MainContainer, BodyContainer, TabletNavigationButton, IconImage, NavigationButtonParagraph, DividedBodyContainer } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import CloudsIcon from '../../Assets/clouds.png'
import WindsIcon from '../../Assets/wind.png'
import RainIcon from '../../Assets/raindrops.png'
import { useState } from "react";


type DustLevel = 'Off' | 'Low' | 'Medium' | 'High';
type TurbulanceLevel = 'Off' | 'Low' | 'Medium' | 'High' | 'Extreme';
type GustsLevel = 'Off' | 'On';


const WeatherScreen = () => {

    const [dustLevel, setDustLevel] = useState<DustLevel>('Off');
    const [turbulanceLevel, setTurbulanceLevel] = useState<TurbulanceLevel>('Off');
    const [gustsLevel, setGustsLevel] = useState<GustsLevel>('Off');

    let navigate = useNavigate();
    const routeChange = (navigateToPath: string) => {
        let path = navigateToPath;
        navigate(path);
    }

    const handleDustChange = () => {
        switch (dustLevel) {
            case 'Off':
                setDustLevel('Low')
                break;
            case 'Low':
                setDustLevel('Medium')
                break;
            case 'Medium':
                setDustLevel('High')
                break;
            case 'High':
                setDustLevel('Off')
                break;
            default:
                setDustLevel('Off')
                break;
        }
    }

    const handleTurbulanceChange = () => {
        switch (turbulanceLevel) {
            case 'Off':
                setTurbulanceLevel('Low')
                break;
            case 'Low':
                setTurbulanceLevel('Medium')
                break;
            case 'Medium':
                setTurbulanceLevel('High')
                break;
            case 'High':
                setTurbulanceLevel('Extreme')
                break;
            case 'Extreme':
                setTurbulanceLevel('Off')
                break;
            default:
                setDustLevel('Off')
                break;
        }
    }

    const handleGustsChange = () => {
        switch (gustsLevel) {
            case 'Off':
                setGustsLevel('On')
                break;
            case 'On':
                setGustsLevel('Off')
                break;
            default:
                setDustLevel('Off')
                break;
        }
    }



    return (
        <MainContainer>
            <Header title={"Weather"} />
            <BodyContainer flexDirection="column">
                <DividedBodyContainer>
                <TabletNavigationButton onClick={() => routeChange("/weather-clouds")}>
                    <IconImage src={CloudsIcon} width={"80px"} />
                    <NavigationButtonParagraph>Clouds</NavigationButtonParagraph>
                </TabletNavigationButton>
                <TabletNavigationButton onClick={() => routeChange("/weather-winds")}>
                    <IconImage src={WindsIcon} width={"80px"} />
                    <NavigationButtonParagraph>Winds</NavigationButtonParagraph>
                </TabletNavigationButton>
                <TabletNavigationButton onClick={() => routeChange("/weather-precipitation")}>
                    <IconImage src={RainIcon} width={"80px"} />
                    <NavigationButtonParagraph>Precipitation</NavigationButtonParagraph>
                </TabletNavigationButton>
                </DividedBodyContainer>
                <DividedBodyContainer>
                <TabletNavigationButton justifyContent="start" onClick={handleDustChange}>
                    <NavigationButtonParagraph height="50%">Dust</NavigationButtonParagraph>
                    <NavigationButtonParagraph alignContent="end">{dustLevel}</NavigationButtonParagraph>
                </TabletNavigationButton>
                <TabletNavigationButton justifyContent="start" onClick={handleTurbulanceChange}>
                    <NavigationButtonParagraph height="50%">Turbulance</NavigationButtonParagraph>
                    <NavigationButtonParagraph alignContent="end">{turbulanceLevel}</NavigationButtonParagraph>
                </TabletNavigationButton>
                <TabletNavigationButton justifyContent="start" onClick={handleGustsChange}>
                    <NavigationButtonParagraph height="50%">Gusts</NavigationButtonParagraph>
                    <NavigationButtonParagraph alignContent="end">{gustsLevel}</NavigationButtonParagraph>
                </TabletNavigationButton>
                </DividedBodyContainer>

            </BodyContainer>
            <Footer buttonsDisabled={false} />

        </MainContainer>
    )
}

export default WeatherScreen;