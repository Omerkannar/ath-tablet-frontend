import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";
import { SendMalfunctionEvent } from "../Common/Common";


import { TabletNavigationButton, IconImage, NavigationButtonParagraph } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import WeatherIcon from '../../Assets/weather.png';
import ConfigurationIcon from '../../Assets/settings.png'
import WarningIcon from '../../Assets/warning.png';
import RepositionIcon from '../../Assets/route.png'
import { useState } from "react";

import jsonData from './Data/AutoPilotMalfunctions.json'


interface AutoPilotMalfunction {
    name: string;
    title: string;
    value: boolean;
};

//  let AutoPilotMalfunctions: AutoPilotMalfunction[] = [];


const AutoPilotMalfunctionsScreen = () => {

    const [autoPilotMalfunctions, setAutoPilotMalfunctions] = useState<AutoPilotMalfunction[]>(jsonData)

    const handleOnClick = (event: any) => {

        // SendMalfunctionEvent(event.target.outerText, true);
        console.log(event.target.outerText)
        const filterMalf = autoPilotMalfunctions.filter(item => {
            return item.name === event.target.outerText
        })

        // setAutoPilotMalfunctions((prevItem)=> [...prevItem, ])
        // console.log(filterMalf[0])
        const newItem: AutoPilotMalfunction = {
            "name": filterMalf[0].name,
            "title": filterMalf[0].title,
            "value": !filterMalf[0].value
        }

        setAutoPilotMalfunctions(prevItem => 
            prevItem.map(item => 
            item.name === newItem.name ? {...item, value: newItem.value} : item
        ))
        // console.log(autoPilotMalfunctions)
    }



    return (
        <MainContainer>
            <Header title={"Auto Pilot Malfunctions Screen"} />
            <BodyContainer>
                {autoPilotMalfunctions.map((item: AutoPilotMalfunction) => {
                    return (<TabletNavigationButton borderOn={item.value} onClick={handleOnClick}>
                        <NavigationButtonParagraph>{item.name}</NavigationButtonParagraph>
                    </TabletNavigationButton>)
                })}
            </BodyContainer>
            <Footer buttonsDisabled={false} />

        </MainContainer>
    )
}

export default AutoPilotMalfunctionsScreen;