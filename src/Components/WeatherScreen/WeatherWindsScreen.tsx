import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Header";
import Footer from "../Common/Footer";


const WeatherWindsScreen = () => {

    return (
        <MainContainer>
            <Header title={"Winds"} />
            <BodyContainer>
            </BodyContainer>
            <Footer buttonsDisabled={false} />

        </MainContainer>
    )
}

export default WeatherWindsScreen;