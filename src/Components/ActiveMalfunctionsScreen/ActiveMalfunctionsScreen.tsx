import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";


const ActiveMalfunctionsScreen = () => {

    return (
        <MainContainer>
            <Header title={"Active Malfunctions"} />
            <BodyContainer>

            </BodyContainer>
            <Footer buttonsDisabled={false} />
            
        </MainContainer>
    )
}

export default ActiveMalfunctionsScreen;