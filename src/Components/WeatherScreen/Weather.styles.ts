import styled from "styled-components";

export const WeatherLayerContainer = styled.div`
  font-family: arial;
  display: flex;
  padding: 0px 0px;
  margin: 20px;
  width: 80%;
  height : 150px;
  background-color: #343841;
  color: white;
  box-sizing: border-box;
  border-radius: 4px;
  flex-direction : row;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
`;


export const WeatherLayerSectionContainer = styled.div<{
  width?: string
}>`
  font-family: arial;
  display: flex;
  padding: 0px 0px;
  margin: 20px;
  width: ${(p) => p.width || '20%'};
  height : 150px;
  background-color: #343841;
  color: white;
  box-sizing: border-box;
  border-radius: 4px;
  flex-direction : row;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
`;

export const LayerName = styled.h1`
  margin: 0;
  color: #bfbfc3;
  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align:center;
`;

export const SectionTitle = styled.h2`
  text-wrap: nowrap;
  margin: 0;
  color: #bfbfc3;
  font-size: 24px;
  padding-top: 0px;
  padding-bottom: 10px;
`;

export const WeatherSectionButton = styled.div`
  display: flex;
  flex-direction : row;
  flex-wrap: wrap;
  padding-top: 0px;
  margin: 0px 0px;
  align-content: stretch;
  justify-content: center;
  align-items: center;
  background: #343841;
  opacity: 0.8;
  height: 100%;
  width: 100%;
`

export const WetherSectionText = styled.div<{
  height?: string;
}>`
  font-family: arial;
  display: flex;
  width: 80%;
  height : ${(p) => p.height || "40px"};
  background-color: #343841;
  color: white;
  box-sizing: border-box;
  border-radius: 4px;
  flex-direction : row;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
  font-size: 22px;
`

export const ButtonsContainer = styled.div`
font-family: arial;
display: flex;
padding: 0px 0px;
margin: 0px;
width: 80%;
height : 30%;
background-color: #343841;
color: white;
box-sizing: border-box;
border-radius: 4px;
flex-direction : row;
flex-wrap: nowrap;
justify-content:center;
align-items:center;
font-size: 18px;
`

export const LayerButton = styled.div<{
  width?: string;
  height?: string;
}>`
font-family: arial;
display: flex;
padding: 0px 0px;
margin: 5px;
width: ${(p) => (p.width || "40%")};
height: ${(p) => (p.height || "100%")};
background-color: #23252b;
color: white;
box-sizing: border-box;
border-radius: 4px;
flex-direction : row;
flex-wrap: nowrap;
justify-content:center;
align-items:center;
font-size: 40px;
`

