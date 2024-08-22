import styled from "styled-components";

export const GroupAContainer = styled.div<{
    marginTop?: string;
    marginLeft?: string;
    marginBottom?: string;
    marginRight?: string;
    width?: string;
    height?: string;
  }>`
  font-family: arial;
  display: flex;
  margin-top: ${(p)=> p.marginTop || '0px'};
  margin-left: ${(p)=> p.marginLeft || '0px'};
  margin-bottom: ${(p)=> p.marginBottom || '0px'};
  margin-right: ${(p)=> p.marginRight || '0px'};
  width: ${(p)=> p.width || '23%'};
  height : ${(p)=> p.height || '150px'};
  background-color: #343841;
  color: white;
  box-sizing: border-box;
  border-radius: 4px;
  flex-direction : row;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
`;

export const TemplateTitle = styled.h1`
  margin: 0;
  color: #bfbfc3;
  font-size: 24px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 20px;
`;

export const TemplateText = styled.input`
font-family: arial;
display: flex;
padding: 0px 0px;
margin-left: 10px;
width: 30%;
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

export const TemplateMonitor = styled.div`
font-family: arial;
display: flex;
padding: 0px 0px;
margin-left: 10px;
width: 30%;
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