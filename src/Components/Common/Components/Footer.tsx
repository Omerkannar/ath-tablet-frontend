import { HeaderFooterContainer, HR } from "../Common.styles";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";

interface FooterInterface {
    buttonsDisabled: boolean;
}


const Footer = ({ buttonsDisabled }: FooterInterface) => {

    return (
        <>
            <HR />
            <HeaderFooterContainer footer={true}>
                <BackButton disabled={buttonsDisabled}/>
                <HomeButton disabled={buttonsDisabled}/>
            </HeaderFooterContainer>
        </>
    )
}

export default Footer;





