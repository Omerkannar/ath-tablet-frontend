import { MainContainer, BodyContainer, TabletNavigationButton, IconImage, NavigationButtonParagraph } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import CloudsIcon from '../../Assets/clouds.png'
import WindsIcon from '../../Assets/wind.png'
import RainIcon from '../../Assets/raindrops.png'



const WeatherScreen = () => {

    let navigate = useNavigate();
    const routeChange = (navigateToPath: string) => {
        let path = navigateToPath;
        navigate(path);
    }

    return (
        <MainContainer>
            <Header title={"Weather"} />
            <BodyContainer>

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

            </BodyContainer>
            <Footer buttonsDisabled={false} />

        </MainContainer>
    )
}

export default WeatherScreen;