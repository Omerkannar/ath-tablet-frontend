import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";
import { LeftContainer, RightContainer, VL, Box2, ButtonsContainer, ConfigurationBox, ConfigurationBody, RoundedSelectBox, ConfigInputBox, ConfigBox, InputTitleBeforeListBox } from "./Configuration.styles";
import React, { useEffect, useRef, useState } from "react";
import ConfigurationMonitor from "./ConfigurationMonitor";

const apiURL = "https://192.168.18.8:7195/"

const ConfigurationScreen = () => {
    
    const [tempTimer, setTempTimer] = useState<number>(0)

    const [people, setPeople] = useState<number>(0)
    const [payload, setPayload] = useState<number>(0)
    const [grossWeight, setGrossWeight] = useState<number>(0)
    const [emptyWeight, setEmptyWeight] = useState<number>(0)
    const [cg_x, setCG_X] = useState<number>(0)
    const [cg_y, setCG_Y] = useState<number>(0)    
    const [fuel, setFuel] = useState<number>(0)
                    
    useEffect(() => {
        const tempInterval = setInterval(() => {
          setTempTimer((prevTemp) => prevTemp + 1)
        }, 1000);
        return () => {
          clearInterval(tempInterval);
        }
      }, []);

    useEffect(() => {
        console.log('Do Get Config every 1 sec')
        //sendGetConfig();
      }, [tempTimer]);
    

    const sendGetConfig = async () => {
        
        // console.log("ATH-Config: sendGetConfig")
        //const result = await fetch(apiURL + "api/Reposition/GetConfigurationList")
        const result = await fetch("https://192.168.18.8:7195/api/Reposition/GetConfigurationList")        
        result.json().then(data => {
          //console.log("ATH-Config: Get Config: ", data)
          //console.log(data)
          //console.log('External-api.tsx', presetConfigurations)
        })
      }

      const handleChange = (e: any) => {
        let value = e.target.value;
        let name = e.target.value;
        //setValue(name)        
        //setSelectedConfigNameFromDB(name)        
    }

    
    const handleSendApply = () => {
        console.log("handleSendApply ... ")        
    }

    const handleMinConfig = () => {
        console.log("Handle Min Config ... ")             
        setPeople(1)
        setPayload(0)
        setGrossWeight(1725)
        setEmptyWeight(1540)
        setCG_X(2450)
        setCG_Y(0)
        setFuel(100)
    }

    const handleMidConfig = () => {
        console.log("Handle Min Config ... ")             
        setPeople(2)
        setPayload(0)
        setGrossWeight(2060)
        setEmptyWeight(1540)
        setCG_X(2450)
        setCG_Y(0)
        setFuel(350)
    }

    const handleMaxConfig = () => {
        console.log("Handle Max Config ... ")             
        setPeople(4)
        setPayload(0)
        setGrossWeight(2850)
        setEmptyWeight(1540)
        setCG_X(2450)
        setCG_Y(0)
        setFuel(600)
    }

    const handleFireEvent_ClearAllMalfunction = () => {
        const m_dEntityId = -1
    
        console.log("QA: Start Send Event - FireEventClearAllMalfunction")
    
        fetch('https://192.168.18.108:5001/FireEvent/SetData', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
          },
          body: JSON.stringify(
            {
              "eventName": "Quick Action Clear All Malfunction ...",
              "eventId": "ATH_WEB_SET_OWNSHIP_CLEAR_ALL_MALFUNCTION",
              "eventClass": "CEventATH_WEB_OwnshipClearAllMalfunction",
              "entityId": -1,
              "eventParams": [m_dEntityId]
            })
        });
    
        console.log("QA: Finish Send Event - FireEventClearAllMalfunction")
      }
    
      const handleFireEvent_OwnshipConfiguration = () => {
                
        console.log("QA: handleFireEvent_OwnshipConfiguration")

        const m_nEntityID = -1
        
        const m_nOwnship_People_Temp = {people}
        const m_nOwnship_People = Number(m_nOwnship_People_Temp) * 85
        const m_nOwnship_FuelQuantity = {fuel}
        const m_bOwnship_FuelQuantityEnable = "True"
        const m_nOwnship_Payload = {payload}
        const m_bOwnship_PayloadEnable = "True"
        const m_nOwnshipCG_X = {cg_x}
        const m_nOwnshipCG_Y = {cg_y}
        const m_bOwnshipCG_enable = "True"
        const m_nOwnshipGross_Weight = {grossWeight}
        const m_bOwnshipGross_WeightEnable = "True"
            
        console.log("Tablet: Start Send Event - ATH_WEB_SET_OWNSHIP_CONFIGURATION")
    
        fetch('https://192.168.18.108:5001/FireEvent/SetData', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
          },
          body: JSON.stringify(
            {
              "eventName": "Quick Action Clear All Malfunction ...",
              "eventId": "ATH_WEB_SET_OWNSHIP_CONFIGURATION",
              "eventClass": "CEventATH_WEB_SetOwnshipConfiguration",
              "entityId": -1,
              "eventParams": [m_nEntityID, m_nOwnship_People, m_nOwnship_FuelQuantity, m_bOwnship_FuelQuantityEnable, m_nOwnship_Payload, m_bOwnship_PayloadEnable,
                              m_nOwnshipCG_X, m_nOwnshipCG_Y, m_bOwnshipCG_enable, m_nOwnshipGross_Weight, m_bOwnshipGross_WeightEnable] })
        });
    
        console.log("Tablet: Finish Send Event - ATH_WEB_SET_OWNSHIP_CONFIGURATION")
      }

    /****************************************************************************************************   
   *                                          SAVE Configuration
   ****************************************************************************************************/
  const SavePresetName = (event : any) => {      
    console.log("ATH-Tablet-Config: Save Preset ...")            
  }

    return (
        <MainContainer>
            <Header title={"Configuration"} />
            <BodyContainer>    

                <ConfigurationBody>
                    <ConfigurationBox display='flex' margin='0px 0' justify="space-evenly">
                        <ConfigurationMonitor title={'Fuel [Kg]'} value={fuel}/>
                        <ConfigurationMonitor title={'Payload [Kg]'} value={10}/>
                    </ConfigurationBox>
                    
                    <ConfigurationBox display='flex' margin='5px 0' justify="space-evenly">
                        <ConfigurationMonitor title={'Gross [Kg]'} value={Math.floor(Number(grossWeight.toFixed(0)))}/>
                        <ConfigurationMonitor title={'Empty [Kg]'}  value={Math.floor(Number(emptyWeight.toFixed(0)))}/>
                    </ConfigurationBox>
                    
                    <ConfigurationBox display='flex' margin='5px 0' justify="space-evenly">
                        <ConfigurationMonitor title={'CG X [m]'} value={30}/>
                        <ConfigurationMonitor title={'CG Y [m]'} value={30} />
                    </ConfigurationBox>

                    <ConfigurationBox display='flex' margin='5px 0' justify="space-evenly">
                        <ConfigurationMonitor title={'People'} value={22}  />
                        <ConfigurationMonitor title={'Payload'} value={22} />
                    </ConfigurationBox>
                    
                    <ConfigurationBox display='flex' margin='5px 0' justify="space-evenly">
                        <ConfigurationMonitor title={'fuel'} value={33} />   
                        <ConfigurationMonitor title={'Last Configuration'} value={0} />                     
                    </ConfigurationBox>
                    
                    <ConfigurationBox display='flex' margin='5px 0' justify="space-evenly">
                         <ConfigInputBox width='94%'>
                            <ConfigBox width='100%' justify='start' gap='10px' >
                                <InputTitleBeforeListBox>{'Preset Name ...'}</InputTitleBeforeListBox>
                                    <RoundedSelectBox onChange={handleChange} value={0} width={"100%"}>                                        
                                    </RoundedSelectBox>
                            </ConfigBox>
                        </ConfigInputBox>
                    </ConfigurationBox>

                    <ConfigBox width='100%' justify='center' gap='0px' margin='0px' >
                        <ButtonsContainer onClick={handleMinConfig}>Min</ButtonsContainer>
                        <ButtonsContainer onClick={handleMidConfig}>Mid</ButtonsContainer>
                        <ButtonsContainer onClick={handleMaxConfig}>Max</ButtonsContainer>                        
                    </ConfigBox>

                    <ConfigBox width='100%' justify='center' gap='0px' margin='0px' >                    
                        <ButtonsContainer onClick={handleFireEvent_OwnshipConfiguration}>Apply</ButtonsContainer>
                        <ButtonsContainer onClick={handleFireEvent_ClearAllMalfunction}>Clear</ButtonsContainer>                        
                    </ConfigBox>
                    
                </ConfigurationBody>

            </BodyContainer>

            <Footer buttonsDisabled={false} />
            
        </MainContainer>
    )
}

export default ConfigurationScreen;