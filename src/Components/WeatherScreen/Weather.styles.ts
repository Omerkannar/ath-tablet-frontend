import styled from "styled-components";

export const CloudLayerContainer = styled.div`
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

export const CloudLayerHeadingContainer = styled.div`
  font-family: arial;
  display: flex;
  padding: 0px 0px;
  margin: 20px;
  width: 14%;
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

export const CloudLayerTypeContainer = styled.div`
  font-family: arial;
  display: flex;
  padding: 0px 0px;
  margin: 0px;
  width: 20%;
  height : 150px;
  background-color: #343841;
  color: white;
  box-sizing: border-box;
  border-radius: 4px;
  flex-direction : column;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
`;

export const CloudLayerAltitudeContainer = styled.div`
  font-family: arial;
  display: flex;
  padding: 0px 0px;
  margin: 0px;
  width: 23%;
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

export const CloudLayerCoverageContainer = styled.div`
font-family: arial;
display: flex;
padding: 0px 0px;
margin: 0px;
width: 20%;
height : 150px;
background-color: #343841;
color: white;
box-sizing: border-box;
border-radius: 4px;
flex-direction : column;
flex-wrap: nowrap;
justify-content:center;
align-items:center;
`;

export const CloudLayerHeading = styled.h1`
  margin: 0;
  color: #bfbfc3;
  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align:center;
`;

export const CloudLayerBoxTitle = styled.h2`
  margin: 0;
  color: #bfbfc3;
  font-size: 24px;
  padding-top: 0px;
  padding-bottom: 10px;
`;

export const CloudsTypeButton = styled.div`
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

export const CloudsTypeText = styled.div`
font-family: arial;
display: flex;
padding: 0px 0px;
margin: 0px;
width: 80%;
height : 100px;
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

export const CloudsCoverageText = styled.div`
font-family: arial;
display: flex;
padding: 0px 0px;
margin: 0px;
width: 80%;
height : 40px;
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

export const CloudsAltitudeText = styled.div`
font-family: arial;
display: flex;
padding: 0px 0px;
margin: 0px;
width: 80%;
height : 40px;
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
width: ${(p) => (p.width ? p.width : "40%")};
height: ${(p) => (p.height ? p.height : "100%")};
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

