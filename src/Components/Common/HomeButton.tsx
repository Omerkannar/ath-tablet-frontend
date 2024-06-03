import { TabletHomeButton, HomeButtonParagraph } from "./Common.styles";
import HomeIcon from '../../Assets/home.png'
import {useNavigate} from 'react-router-dom';

interface HomeButtonInterface {
    disabled: boolean;
}


const HomeButton = ({disabled}: HomeButtonInterface) => {

    let navigate = useNavigate(); 
    const routeChange = (navigateToPath: string) =>{ 
      let path = navigateToPath; 
      navigate(path);
    }

    return (
        <TabletHomeButton disabled={disabled} onClick={()=>routeChange('/main')}>
            <img src={HomeIcon} width={'25px'}/>
            <HomeButtonParagraph>Main</HomeButtonParagraph>
        </TabletHomeButton>
    )
}

export default HomeButton;





