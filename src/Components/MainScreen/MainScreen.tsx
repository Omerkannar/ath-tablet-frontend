import { MainContainer, BodyContainer, TabletNavigationButton, IconImage, NavigationButtonParagraph } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";
import WeatherIcon from '../../Assets/weather.png';
import ConfigurationIcon from '../../Assets/settings.png'
import WarningIcon from '../../Assets/warning.png';
import RepositionIcon from '../../Assets/route.png'



const MainScreen = () => {

    let navigate = useNavigate();
    const routeChange = (navigateToPath: string) => {
        let path = navigateToPath;
        navigate(path);
    }


    return (
        <MainContainer>
            <Header title={"Main Screen"} />

            <BodyContainer>                
                <TabletNavigationButton onClick={() => routeChange("/weather")}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Weather</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => routeChange("/configuration")}>
                    <IconImage src={ConfigurationIcon} width={"80px"} />
                    <NavigationButtonParagraph>Configuration</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => routeChange("/reposition")}>
                    <IconImage src={RepositionIcon} width={"80px"} />
                    <NavigationButtonParagraph>Reposition</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => routeChange("/manage-malfuncion")}>
                    <IconImage src={WarningIcon} width={"80px"} />
                    <NavigationButtonParagraph>Manage Mal</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => routeChange("/active-malfuncion")}>
                    <IconImage src={WarningIcon} width={"80px"} />
                    <NavigationButtonParagraph>Active Mal</NavigationButtonParagraph>
                </TabletNavigationButton>

            </BodyContainer>

            <BodyContainer>                
                <TabletNavigationButton onClick={() => routeChange("/quick-action")}>
                    <IconImage src={WarningIcon} width={"80px"} />
                    <NavigationButtonParagraph>Quick Action</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => routeChange("/configuration")}>
                    <IconImage src={WarningIcon} width={"80px"} />
                    <NavigationButtonParagraph>XXX</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => routeChange("/reposition")}>
                    <IconImage src={WarningIcon} width={"80px"} />
                    <NavigationButtonParagraph>XXX</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => routeChange("/active-malfuncion")}>
                    <IconImage src={WarningIcon} width={"80px"} />
                    <NavigationButtonParagraph>XXX</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => routeChange("/template")}>
                    <IconImage src={WarningIcon} width={"80px"} />
                    <NavigationButtonParagraph>XXX</NavigationButtonParagraph>
                </TabletNavigationButton>
            </BodyContainer>

            <Footer buttonsDisabled={false} />


        </MainContainer>
    )
}

export default MainScreen;