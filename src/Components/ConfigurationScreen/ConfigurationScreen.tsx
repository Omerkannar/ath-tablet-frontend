import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";

const ConfigurationScreen = () => {

    return (
        <MainContainer>
            <Header title={"Configuration"} />
            <BodyContainer>

            </BodyContainer>
            <Footer buttonsDisabled={false} />
            
        </MainContainer>
    )
}

export default ConfigurationScreen;