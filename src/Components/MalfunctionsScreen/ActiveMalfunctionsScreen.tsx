import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";


import { TabletNavigationButton, IconImage, NavigationButtonParagraph } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import WeatherIcon from '../../Assets/weather.png';
import ConfigurationIcon from '../../Assets/settings.png'
import WarningIcon from '../../Assets/warning.png';
import RepositionIcon from '../../Assets/route.png'

const ActiveMalfunctionsScreen = () => {

    const handleOnClick = () => {     
        // quick-action-common
    }

    return (
        <MainContainer>
            <Header title={"Active Malfunctions Screen"} />
            <BodyContainer>                              
            </BodyContainer>
            <Footer buttonsDisabled={false} />
            
        </MainContainer>
    )
}

export default ActiveMalfunctionsScreen;