import { TabletFooterButton, TabletFooterButtonParagraph } from "../Common.styles";
import BackIcon from '../../../Assets/back.png'


interface BackButtonInterface {
    disabled: boolean;
}


const BackButton = ({disabled}: BackButtonInterface) => {

    const handleGoBack = () => {
        window.history.back();
    }

    return (
        <TabletFooterButton disabled={disabled} onClick={handleGoBack}>
            <img src={BackIcon} width={'25px'}/>
            <TabletFooterButtonParagraph>Back</TabletFooterButtonParagraph>
        </TabletFooterButton>
    )
}

export default BackButton;





