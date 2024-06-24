import styled from "styled-components";

export const LeftContainer = styled.div`
  font-family: arial;
  display: block;
  padding: 0px 10px;
  margin: 0;
  width: 600px;
  height : 100%;
  background-color: #21242b;
  color: white;
  box-sizing: border-box;
  border-radius: 0;
`;

export const RightContainer = styled.div`
  font-family: arial;
  display: block;
  padding: 0px 10px;
  margin: 0;
  width: 600px;
  height : 100%;
  background-color: #21242b;
  color: white;
  box-sizing: border-box;
  border-radius: 0;
`;

export const VL = styled.div`
  border: 1px solid #4a4d56;
  height: 98%;
  margin-top: 5px;
`;

export interface BoxProps {
    display?: string;
    direction?: string;
    justify?: string;
    align?: string;
    margin?: string;
    width?: string;
    padding?: string;
    flex?: string;
    height?: string;
    gap?: string;
    wrap?: string;
  }
  
  export const Box = styled.div<BoxProps>`
    position: relative;
    display: ${(p) => p.display || "flex"};
    flex: ${(p) => p.flex || "1"};
    flex-direction: ${(p) => p.direction || "row"};
    justify-content: ${(p) => p.justify || "center"};
    align-items: ${(p) => p.align || "center"};
    margin: ${(p) => p.margin || "0"};
    width: ${(p) => p.width || "auto"};
    height: ${(p) => p.height || "auto"};
    gap: ${(p) => p.gap || "auto"};
    flex-wrap: ${(p) => p.wrap || "wrap"};
    padding: ${(p) => p.padding === "small" ? "4px" : p.padding === "medium" ? "8px" : p.padding === "large" && "16px"};
  `;

  export const CoordinatesTtitle = styled.p`
  margin: 0;
  color: #bfbfc3;
  font-size: 20px;
  align-self: center;
  width: 165px;
`;

export const RoundedInputBox = styled.div<{
    width?: string;
    textAlign?: string;
    disable?: boolean;
  }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(p) => p.width || "100%"};
    text-align: center;
    box-sizing: border-box;
    height: 40px;
    background: ${(p) => (p.disable ? "#1b1a21" : "#1b1a21")};
    outline: none;
    border: 1px solid #4a4d56;
    padding: 4px;
    transition: 0.1s ease-in-out;
    opacity: ${(p) => (p.disable ? "0.6" : "1")};
    cursor: ${(p) => (p.disable ? "not-allowed" : "default")};
    &:hover {
      border: ${(p) => (p.disable ? "" : "1px solid cyan")};
    }
  `;


  export const RepositionParagraph = styled.p`
  margin: 0;
  color: #bfbfc3;
  font-size: 24px;
  text-align: left;
`;

export const RepositionParagraphUnits = styled.p`
margin: 0;
color: #bfbfc3;
font-size: 24px;
text-align: right;
`;

export const CoordinatesInputField = styled.input<{
  width?: string;
  textAlign?: string;
}>`
  background: #1b1a21;
  text-align: ${(p) => p.textAlign || "center"};
  outline: none;
  border: none;
  font-size: 24px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #bfbfc3;
  width: ${(p) => p.width || "150px"};
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PresetInputBox = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  text-align: center;
  height: auto;
  font-size: 24px;
  background: #1b1a21;
  outline: none;
  border: 1px solid #4a4d56;
  box-sizing: border-box;
  color: #bfbfc3;
  padding: 6px;
  transition: 0.1s ease-in-out;
  &:hover {
    border: 1px solid cyan;
  }
`;

export interface BoxProps2 {
  display?: string;
  direction?: string;
  justify?: string;
  align?: string;
  margin?: string;
  width?: string;
  padding?: string;
  flex?: string;
  height?: string;
  gap?: string;
  wrap?: string;
}

export const Box2 = styled.div<BoxProps2>`
  position: relative;
  display: ${(p) => p.display || "flex"};
  flex: ${(p) => p.flex || "1"};
  flex-direction: ${(p) => p.direction || "row"};
  justify-content: ${(p) => p.justify || "center"};
  align-items: ${(p) => p.align || "center"};
  margin: ${(p) => p.margin || "0"};
  width: ${(p) => p.width || "auto"};
  height: ${(p) => p.height || "auto"};
  gap: ${(p) => p.gap || "auto"};
  flex-wrap: ${(p) => p.wrap || "wrap"};
  padding: ${(p) => p.padding || "0"};
`;

export const ButtonsContainer = styled.div`
font-family: arial;
display: flex;
padding: 0px 0px;
margin: 10px 0px;
width: 50%;
height : 20%;
background-color: #343841;
color: white;
box-sizing: border-box;
border-radius: 4px;
flex-direction : row;
flex-wrap: nowrap;
justify-content:center;
align-items:center;
font-size: 24px;
`


export const DataContainer = styled.div`
font-family: arial;
display: flex;
padding: 0px 0px;
margin: 0px;
width: 100%;
height : 80%;
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

