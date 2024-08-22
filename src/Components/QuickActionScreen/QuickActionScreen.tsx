import React, { useEffect, useState, useRef } from 'react';
import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";

import { TabletNavigationButton, IconImage, NavigationButtonParagraph } from "../Common/Common.styles";
import { useNavigate } from "react-router-dom";
import WeatherIcon from '../../Assets/weather.png';
import ConfigurationIcon from '../../Assets/settings.png'
import WarningIcon from '../../Assets/warning.png';
import RepositionIcon from '../../Assets/route.png'

const QuickActionScreen = () => {
    
    const [flightFreeze, setFlightFreeze] = useState<boolean>(false);
    const [crashOverride, setCrashOverride] = useState<boolean>(false);
    const [heliResetSetToTrue, setHeliResetSetToTrue] = useState<boolean>(false);    
    const [dustStatus, setDustStatus] = useState<string>('');
    const [dustString, setDustString] = useState<string>('Off');
    const [dustLevel, setDustLevel] = useState<number>(0);
    const [airportLighActive, setAirportLighActive] = useState<string>('Off');
    

    let navigate = useNavigate();

    const routeChange = (navigateToPath: string) => {
        let path = navigateToPath;
        navigate(path);
    }

    useEffect(() => {
        setTimeout(() => {
          if (heliResetSetToTrue === true) {
            setHeliResetSetToTrue(false)
            OnClickHelicopterReset(false)
          }
        }, 2000);
      }, [heliResetSetToTrue]);

    const handleOnClick = () => {     
        // m_nEntityID
    }

  // ============================================================================================
  //                                       #1 - OnClickFlightFreeze
  // ============================================================================================
  const OnClickFlightFreeze = () => {

    console.log("Tablet:QuickAction => On Click : #01 Start : Flight Freeze ...")
    
    const m_dEntityId = -1

    let flightFreezeStr = "false"
    if (flightFreeze === true) {
      setFlightFreeze(false)
      flightFreezeStr = "true"
    }
    else {
      setFlightFreeze(true)
      flightFreezeStr = "false"
    }

    fetch('https://192.168.18.108:5001/FireEvent/SetData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(
        {
          "eventName": "Quick Action FlightFreeze ...",
          "eventId": "ATH_WEB_SET_OWNSHIP_FLIGHT_FREEZE",
          "eventClass": "CEventATH_WEB_OwnshipFlightFreeze",
          "entityId": -1,
          "eventParams": [m_dEntityId, flightFreezeStr]
        })
    });

    console.log("Tablet:QuickAction => On Click : #01 Finish : Flight Freeze ...")
  }
   
  // ============================================================================================
  //                                     #2 - OnClickFlightRun
  // ============================================================================================
  const OnClickFlightRun = () => {

    console.log("Tablet:QuickAction => On Click : #02 Start : OnClickFlightRun ...")
    
    const m_dEntityId = -1        

    fetch('https://192.168.18.108:5001/FireEvent/SetData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(
        {
          "eventName": "Quick Action FlightRun ...",
          "eventId": "ATH_WEB_EVENT_ONLY_OWNSHIP_FLIGHT_RUN",
          "eventClass": "CAthWebEventOnlyOwnshipFlightRun",
          "entityId": -1,
          "eventParams": [m_dEntityId]
        })
    });

    console.log("Tablet:QuickAction => On Click : #0 Finish : OnClickFlightRun ...")
  }

  const OnClickClearAllMalfunction = () => {
    const m_dEntityId = -1

    console.log("Tablet:QuickAction => On Click : #03 Start : OnClickClearAllMalfunction ...")

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

    console.log("Tablet:QuickAction => On Click : #03 Start : OnClickClearAllMalfunction ...")
  }

  const OnClickCrashReset = () => {
    const m_dEntityId = -1
    const m_bCrashReset = true;

    console.log("Tablet:QuickAction => On Click : #04 Start : OnClickCrashReset ...")

    fetch('https://192.168.18.108:5001/FireEvent/SetData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(
        {
          "eventName": "Quick Action Ownship Crash Reset ...",
          "eventId": "ATH_WEB_SET_OWNSHIP_CRASH_RESET",
          "eventClass": "CEventATH_WEB_OwnshipCrashReset",
          "entityId": -1,
          "eventParams": [m_dEntityId, m_bCrashReset]
        })
    });

    console.log("Tablet:QuickAction => On Click : #04 Finish : OnClickCrashReset ...")
  }

  const OnClickEngineQuickStart = () => {
    const m_dEntityId = -1

    console.log("Tablet:QuickAction => On Click : #05 Start : OnClickEngineQuickStart ...")

    fetch('https://192.168.18.108:5001/FireEvent/SetData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(
        {
          "eventName": "Quick Action Ownship EngineQuickStart ...",
          "eventId": "ATH_WEB_SET_OWNSHIP_ENGINE_QUICK_START",
          "eventClass": "CEventATH_WEB_OwnshipEngineQuickStart",
          "entityId": -1,
          "eventParams": [m_dEntityId]
        })
    });

    console.log("Tablet:QuickAction => On Click : #05 Finish : OnClickEngineQuickStart ...")
  }

  const OnClickCrashOverride = () => {

    console.log("Tablet:QuickAction => On Click : #06 Start : OnClickCrashOverride ...")

    let crashOverrideStr = "false"
    if (crashOverride === true) {
      setCrashOverride(false)
      crashOverrideStr = "true"
    }
    else {
      setCrashOverride(true)
      crashOverrideStr = "false"
    }

    const m_dEntityId = -1

    console.log("QA: Start Send Event - FireEventCrashOverride")
    console.log("QA: crashOverride - ", crashOverride, crashOverrideStr)

    fetch('https://192.168.18.108:5001/FireEvent/SetData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(
        {
          "eventName": "Quick Action Ownship Crash override ...",
          "eventId": "ATH_WEB_SET_OWNSHIP_CRASH_OVERRIDE",
          "eventClass": "CEventATH_WEB_OwnshipCrashOverride",
          "entityId": -1,
          "eventParams": [m_dEntityId, crashOverrideStr]
        })
    });

    console.log("Tablet:QuickAction => On Click : #06 Finish : OnClickCrashOverride ...")
  }
  
  const OnClickHelicopterReset = (cmdToSend: boolean) => {

    const m_dEntityId = -1

    console.log("Tablet:QuickAction => On Click : #07 Start : OnClickHelicopterReset => ", cmdToSend, " ...")

    fetch('https://192.168.18.108:5001/FireEvent/SetData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(
        {
          "eventName": "Quick Action HelicopterReset ...",
          "eventId": "ATH_WEB_SET_OWNSHIP_HELICOPTER_RESET",
          "eventClass": "CEventATH_WEB_Ownship_HelicopterReset",
          "entityId": -1,
          "eventParams": [cmdToSend]
        })
    });

    console.log("Tablet:QuickAction => On Click : #07 Finish : OnClickHelicopterReset => {cmdToSend} ...")
  }
  
  const OnClickDustOnOff = () => {

    console.log("Tablet:QuickAction => On Click : #08 Start : OnClickDustOnOff, Dust Status = ", dustStatus, ", Dust Level = ",  dustLevel, " ...")

    const m_dEntityId = -1
    let dustLevelIndex = dustLevel
    let dustCmmand = dustStatus === 'True' ? false : true;

    // test code
    dustLevelIndex = dustLevelIndex + 1
    if ((dustLevelIndex >= 4) || (dustLevelIndex <= 0)) {
      dustLevelIndex = 0
      setDustStatus('False')
      setDustString('Off')
      dustCmmand = false
    }
    else {
      setDustStatus('True')
      setDustString('On')
      dustCmmand = true
    }
    setDustLevel(dustLevelIndex)
    

    fetch('https://192.168.18.108:5001/FireEvent/SetData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(
        {
          "eventName": "Quick Action Dust On - Off ...",
          "eventId": "ATH_WEB_SET_OWNSHIP_ENGINE_DUST_ON_OFF",
          "eventClass": "CEventATH_WEB_OwnshipDustOnOff",
          "entityId": -1,
          "eventParams": [dustCmmand, dustLevelIndex]
        })
    });

    console.log("Tablet:QuickAction => On Click : #08 Finish : OnClickDustOnOff, Dust Status = ", dustStatus, ", Dust Level = ",  dustLevel, " ...")
  }

  const OnClickAirportLighActive = () => {

    console.log("Tablet:QuickAction => On Click : #09 Start : OnClickAirportLighActive = ", airportLighActive, " ...")
        
    let airportLighActiveTemp = airportLighActive === 'Off' ? false : true;

    // test code    
    if (airportLighActive === "On") {      
      setAirportLighActive('Off')            
    }
    else {
      setAirportLighActive('On')            
    }
        
    fetch('https://192.168.18.108:5001/FireEvent/SetData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(
        {
          "eventName": "Quick Action Dust On - Off ...",
          "eventId": "ATH_WEB_SET_AIRPORT_LIGHT",
          "eventClass": "CEventATH_WEB_SetAirportLight",
          "entityId": -1,
          "eventParams": [airportLighActiveTemp]
        })
    });

    console.log("Tablet:QuickAction => On Click : #09 Finish : OnClickAirportLighActive = ", airportLighActive, " ...")
  }
  
  const OnClickRefuel = () => {

    console.log("Tablet:QuickAction => On Click : #10 Start : OnClickRefuel ...")
        
    const m_dEntityId = -1
        
    fetch('https://192.168.18.108:5001/FireEvent/SetData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(
        {
          "eventName": "Quick Action Dust On - Off ...",
          "eventId": "ATH_WEB_SET_OWNSHIP_REFUEL",
          "eventClass": "CEventATH_WEB_OwnshipRefuel",
          "entityId": -1,
          "eventParams": [m_dEntityId]
        })
    });

    console.log("Tablet:QuickAction => On Click : #10 Finish : OnClickRefuel ...")
  }
  
  return (
        <MainContainer>
            <Header title={"Quick Action Screen"} />
            <BodyContainer>                                
                <TabletNavigationButton onClick={() => OnClickFlightFreeze()}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Flight Freeze</NavigationButtonParagraph>
                </TabletNavigationButton>

                <TabletNavigationButton onClick={() => OnClickFlightRun()}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Flight Run</NavigationButtonParagraph>
                </TabletNavigationButton>

                
                <TabletNavigationButton onClick={() => OnClickClearAllMalfunction()}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Clear All Mal</NavigationButtonParagraph>
                </TabletNavigationButton>
                                
                <TabletNavigationButton onClick={() => OnClickEngineQuickStart()}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Engine Start</NavigationButtonParagraph>
                </TabletNavigationButton>
                
                <TabletNavigationButton onClick={() => OnClickDustOnOff()}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Dust {dustString} {dustLevel} </NavigationButtonParagraph>
                </TabletNavigationButton>

                
            </BodyContainer>

            <BodyContainer>                            
                <TabletNavigationButton onClick={() => OnClickAirportLighActive()}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                <NavigationButtonParagraph>Air Lights {airportLighActive}</NavigationButtonParagraph>
                </TabletNavigationButton>

                
                <TabletNavigationButton onClick={() => OnClickRefuel()}>                
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Refuel</NavigationButtonParagraph>
                </TabletNavigationButton>
                
                <TabletNavigationButton onClick={() => OnClickCrashReset()}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Crash Reset</NavigationButtonParagraph>
                </TabletNavigationButton>
                
                <TabletNavigationButton onClick={() => OnClickHelicopterReset(false)}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Heli Reset</NavigationButtonParagraph>
                </TabletNavigationButton>
                
                <TabletNavigationButton onClick={() => OnClickCrashOverride()}>
                    <IconImage src={WeatherIcon} width={"80px"} />
                    <NavigationButtonParagraph>Crash Overrite</NavigationButtonParagraph>
                </TabletNavigationButton>
                
            </BodyContainer>

            <BodyContainer>                                
            </BodyContainer>
            <Footer buttonsDisabled={false} />
            
        </MainContainer>
    )
}

export default QuickActionScreen;