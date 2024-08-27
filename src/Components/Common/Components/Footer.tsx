import { HeaderFooterContainer, TabletFooterStatus, TabletFooterButtonParagraph, HR } from "../Common.styles";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";

interface FooterInterface {
    buttonsDisabled: boolean;
}

interface FooterStatus {
    text: string;
    color: string;
    active: boolean;
}

const statusArray: FooterStatus[] = [
    {
        text: 'Demo 1',
        color: 'red',
        active: true
    },
    {
        text: 'Demo 2',
        color: 'blue',
        active: true
    },
    {
        text: 'Demo 3',
        color: 'green',
        active: true
    }

]


const Footer = ({ buttonsDisabled }: FooterInterface) => {

    return (
        <>
            <HR />
            <HeaderFooterContainer footer={true}>
                <BackButton disabled={buttonsDisabled} />
                <HomeButton disabled={buttonsDisabled} />
                {statusArray.map((status: FooterStatus) =>
                (
                    status.active && <TabletFooterStatus color={status.color}>
                        <TabletFooterButtonParagraph>{status.text}</TabletFooterButtonParagraph>
                    </TabletFooterStatus>
                )
                )}
            </HeaderFooterContainer>
        </>
    )
}

export default Footer;





