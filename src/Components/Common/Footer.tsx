import { FooterContainer, HR } from "./Common.styles";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";

interface FooterInterface {
    buttonsDisabled: boolean;
}


const Footer = ({ buttonsDisabled }: FooterInterface) => {

    return (
        <>
            <HR />
            <FooterContainer>
                <BackButton disabled={buttonsDisabled}/>
                <HomeButton disabled={buttonsDisabled}/>
            </FooterContainer>
        </>
    )
}

export default Footer;





