import { MainContainer, BodyContainer } from "../../Common/Common.styles";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";


const WeatherPrecipitationScreen = () => {

    return (
        <MainContainer>
            <Header title={"Precipitation"} />
            <BodyContainer>
            </BodyContainer>
            <Footer buttonsDisabled={false} />

        </MainContainer>
    )
}

export default WeatherPrecipitationScreen;