import { TabletBackButton, BackButtonParagraph } from "./Common.styles";
import BackIcon from '../../Assets/back.png'


interface BackButtonInterface {
    disabled: boolean;
}


const BackButton = ({disabled}: BackButtonInterface) => {

    const handleGoBack = () => {
        window.history.back();
    }

    return (
        <TabletBackButton disabled={disabled} onClick={handleGoBack}>
            <img src={BackIcon} width={'30px'}/>
            <BackButtonParagraph>Back</BackButtonParagraph>
        </TabletBackButton>
    )
}

export default BackButton;





