import { MainContainer, BodyContainer } from "../Common/Common.styles";
import Header from "../Common/Components/Header";
import Footer from "../Common/Components/Footer";
import {GroupAContainer, TemplateTitle, TemplateText, TemplateMonitor } from "./Template.style"
import {useEffect, useState} from "react"
import {TemplateType} from "./Template.types"


const Tempalte = () => {

    const [temp, setTemp] = useState(0);
    const [templateDataFromBE, setTemplateDataFromBE] = useState<TemplateType>();
  
    useEffect(() => {
      const tempInterval = setInterval(() => {
        setTemp((prevTemp) => prevTemp + 1)
      }, 1000 * 1);
      return () => {
        clearInterval(tempInterval);
      }
    }, []);
  
    useEffect(() => {
      handleTextFromBEChange()
    }, [temp]);
  

    const handleTextFromBEChange = () => {
      fetch("http://127.0.0.1:5000/getTemplateLayerData", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*'
        }
      })
        .then(Response => Response.json()
          , error => {
            console.log('Unable to fetch data')
          }
        )
        .then(data => {
          if (data !== undefined) {
              console.log(data)
            setTemplateDataFromBE(data);
          }
        }, error => {
          console.log('Unable to parse data')
        });
    }

    const handleInputChange = (e : any) => {
        console.log(e)
            const request = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
              body: JSON.stringify({
                TEMPLATE_STRING: e.target.name === "string" ? e.target.value : templateDataFromBE?.TEMPLATE_STRING,
                TEMPLATE_NUMBER: e.target.name === "number" ? e.target.value : templateDataFromBE?.TEMPLATE_NUMBER
              })
          };
          fetch("http://127.0.0.1:5000/setTemplateLayerData", request)
              .then(response => response.json())
              .then(data => console.log(data));
    }


    return (
        <MainContainer>
            <Header title={"Template Screen"} />
            <BodyContainer 
            flexDirection="column">
                    <GroupAContainer 
                    marginTop="15px" 
                    marginLeft="15px"
                    width="35%">
                        <TemplateTitle>String</TemplateTitle>
                        <TemplateMonitor>{templateDataFromBE?.TEMPLATE_STRING}</TemplateMonitor>
                        <TemplateText name="string" onChange={handleInputChange}/>
                    </GroupAContainer>
                    <GroupAContainer                    
                    marginTop="15px" 
                    marginLeft="15px"
                    width="35%">
                    <TemplateTitle>Number</TemplateTitle>
                    <TemplateMonitor>{templateDataFromBE?.TEMPLATE_NUMBER}</TemplateMonitor>
                    <TemplateText name="number" onChange={handleInputChange}/>
                    </GroupAContainer>
            </BodyContainer>
            <Footer buttonsDisabled={false} />

        </MainContainer>
    )
}

export default Tempalte;