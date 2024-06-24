import { MainContainer, BodyContainer } from "../Common/Common.styles";
import { LeftContainer, RightContainer, VL, Box2, ButtonsContainer } from "./Reposition.styles";
import Coordinates from "./Coordinates/Coordinates";
import GroundAndEngine from "./GroundAndEngine/GroundAndEngine";
import PresetLocations from "./PresetLocations/PresetLocations";
import HeliContainer from "./PresetLocations/HeliContainer";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { AdditionalData, BasePoint, ButtonsActive } from "./RepositionTypesAndObjects";
import { useState } from "react";
import Runway from "../../Assets/runway.jpg";


export const emptyPresetLocationPoint: BasePoint = {
    id: -1, name: "--Select Location--", x: 0, y: 0, lat: 0, long: 0, additionalData: [{ info: "N\\A", lat: -1, long: -1, heading: -1, alt: -1, vel: -1, engineOn: false, inAir: false }]
}

export const emptyPresetLocationSelected: AdditionalData = {
    info: "N\\A", lat: 0, long: 0, heading: 0, alt: 0, vel: 0, engineOn: false, inAir: false
}

const RepositionScreen = () => {


    const [selectedBasePoint, setSelectedBasePoint] = useState<BasePoint>(emptyPresetLocationPoint);
    const [selectedData, setSelectedData] = useState<AdditionalData>(emptyPresetLocationSelected);
    const [activeButtons, setActiveButtons] = useState(new ButtonsActive())


    const handlePointSelection = (p: BasePoint) => {
        if (p.name === "--Select Location--") {
            setSelectedData(emptyPresetLocationSelected)
            return;
        }
        console.log(p)
        setSelectedBasePoint(p);
        let tmpActiveButtons = new ButtonsActive();
        tmpActiveButtons = { downwindLeft: false, downwindRight: false, takeoff: true, finalClose: false, finalMedium: false, finalFar: false };
        if (tmpActiveButtons !== activeButtons) {
            setActiveButtons(tmpActiveButtons);
        }
        const filterAdd = p?.additionalData?.filter((data: AdditionalData) => {
            return data.info === "TakeOff";
        })
        if (filterAdd[0] === undefined) {
            setSelectedData({
                ...selectedData,
                lat: p.lat,
                long: p.long,
                alt: 0,
                vel: 0,
                heading: 0,
                engineOn: false,
                inAir: false
            })
        }
        else if (filterAdd[0] !== selectedData) {
            setSelectedData({
                ...selectedData,
                lat: filterAdd[0].lat,
                long: filterAdd[0].long,
                alt: filterAdd[0].alt,
                vel: filterAdd[0].vel,
                heading: filterAdd[0].heading,
                engineOn: filterAdd[0].engineOn,
                inAir: filterAdd[0].inAir
            })
        }
    }

    const isActive = (active: boolean, caption: string) => {

        let tmpActiveButtons = new ButtonsActive();
        switch (caption) {
            case "Downwind-Left":
                tmpActiveButtons = { downwindLeft: active, downwindRight: false, takeoff: false, finalClose: false, finalMedium: false, finalFar: false };
                break;
            case "Downwind-Right":
                tmpActiveButtons = { downwindLeft: false, downwindRight: active, takeoff: false, finalClose: false, finalMedium: false, finalFar: false };
                break;
            case "TakeOff":
                tmpActiveButtons = { downwindLeft: false, downwindRight: false, takeoff: active, finalClose: false, finalMedium: false, finalFar: false }
                break;
            case "Final-Close":
                tmpActiveButtons = { downwindLeft: false, downwindRight: false, takeoff: false, finalClose: active, finalMedium: false, finalFar: false };
                break;
            case "Final-Medium":
                tmpActiveButtons = { downwindLeft: false, downwindRight: false, takeoff: false, finalClose: false, finalMedium: active, finalFar: false };
                break;
            case "Final-Far":
                tmpActiveButtons = { downwindLeft: false, downwindRight: false, takeoff: false, finalClose: false, finalMedium: false, finalFar: active };
                break;
            default:
                tmpActiveButtons = { downwindLeft: false, downwindRight: false, takeoff: false, finalClose: false, finalMedium: false, finalFar: false };
                break;
        }
        if (tmpActiveButtons !== activeButtons) {
            setActiveButtons(tmpActiveButtons);
            if (selectedBasePoint.additionalData !== undefined) {
                const filterAdd = selectedBasePoint?.additionalData?.filter((data: AdditionalData) => {
                    return data.info === caption;
                })
                setSelectedData({
                    ...selectedData,
                    lat: filterAdd[0].lat,
                    long: filterAdd[0].long,
                    alt: filterAdd[0].alt,
                    vel: filterAdd[0].vel,
                    heading: filterAdd[0].heading,
                    engineOn: filterAdd[0].engineOn,
                    inAir: filterAdd[0].inAir
                })
            }
        }
    }

    const handleSendApply = () => {
        console.log("Latitude: ", selectedData.lat)
        console.log("Longitude: ", selectedData.long)
        console.log("Altitude: ", selectedData.alt)
        console.log("Heading: ", selectedData.heading)
        console.log("Velocity: ", selectedData.vel)
        console.log("In Air: ", selectedData.inAir === true? "In Air" : "On Ground")
        console.log("Engine On: ", selectedData.engineOn === true ? "Engine On": "Engine Off")
    }


    return (
        <MainContainer>
            <Header title={"Reposition"} />
            <BodyContainer>
                <LeftContainer>
                    <Coordinates {...{ latitude: selectedData.lat, longitude: selectedData.long, velocity: selectedData.vel, altitude: selectedData.alt, heading: selectedData.heading }} />
                    <GroundAndEngine {...{ onGround: !selectedData.inAir, engineOn: selectedData.engineOn }} />
                    <div style={{height: '50%', display:'flex', alignItems: 'end', justifyContent: 'center'}}>
                        <ButtonsContainer onClick={handleSendApply}>Apply</ButtonsContainer>
                    </div>
                    
                </LeftContainer>
                <VL />
                <RightContainer>
                    <PresetLocations {...{ handlePointSelection }} />
                    <br /> <br /> <br /> <br /> <br />
                    <HeliContainer caption={"Downwind-Left"} flip={false} label1='Downwind' label2={`500' AGL`} label3={'100Kts'} direction={'row'} buttonActive={activeButtons.downwindLeft} {...{ isActive }} />
                    <Box2 width='100%' justify='center' >
                        <img style={{ marginTop: '-30px', marginRight: '40px' }} src={Runway} />
                        <HeliContainer caption={"TakeOff"} flip={true} label1='Takeoff' label2={`0K`} label3={' '} direction={'column'} align={'center'} buttonActive={activeButtons.takeoff} {...{ isActive }} />
                        {/* </Box2> */}
                        <HeliContainer caption={"Final-Close"} flip={true} label1='Final' label2={'0.5 NM'} label3={'70Kts'} direction={'column'} align={'center'} buttonActive={activeButtons.finalClose} {...{ isActive }} />
                        <HeliContainer caption={"Final-Medium"} flip={true} label1='Final' label2={'2 NM'} label3={'100Kts'} direction={'column'} align={'center'} buttonActive={activeButtons.finalMedium} {...{ isActive }} />
                        <HeliContainer caption={"Final-Far"} flip={true} label1='Inbound' label2={'5 NM'} label3={'120Kts'} direction={'column'} align={'center'} buttonActive={activeButtons.finalFar} {...{ isActive }} />
                    </Box2>
                    <HeliContainer caption={"Downwind-Right"} flip={false} label1='Downwind' label2={`500' AGL`} label3={'100Kts'} direction={'row'} buttonActive={activeButtons.downwindRight} {...{ isActive }} />
                </RightContainer>
            </BodyContainer>
            <Footer buttonsDisabled={false} />

        </MainContainer>
    )
}

export default RepositionScreen;