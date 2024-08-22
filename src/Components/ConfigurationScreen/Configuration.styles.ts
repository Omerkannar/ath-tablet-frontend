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

export const ConfigurationBody = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    box-sizing: border-box;
`

export const ConfigurationBox = styled.div<BoxProps>`
    display: ${p => p.display || 'flex'};
    flex-direction: ${p => p.direction || 'row'};
    justify-content: ${p => p.justify || 'center'};
    align-items: ${p => p.align || 'center'};
    margin: ${p => p.margin || '0'};
    width: ${p => p.width || 'auto'};
    gap: ${p => p.gap || 'auto'};
    flex: ${p => p.flex || '1'};
`
export const InputBoxMonitor = styled.div<{width?: string}>`
    display: flex;
    justify-content: space-between;
    & > * {
        flex: 100%;
    }
    align-items: center;
    // background: #1b1a21;
    border: 1px solid #4a4d56;
    border-radius: 6px;
    padding: 12px;
    box-sizing: border-box;
    color: white;
    width: ${p => p.width || '45%'};
    cursor: not-allowed;
`

export const InputMonitor = styled.input<{inputsize?: string}>`
    max-width: ${p => p.inputsize === 'sm' ? '30px' : p.inputsize === 'md' ? '40px' : 'auto'};
    background: transparent;
    color: white;
    border: none;
    outline: none;
    font-size: 0.7rem;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    &::input[type=number] {
    -moz-appearance: textfield;
    }
    cursor: not-allowed;
`

export const InputTitle = styled.p`
    width: auto;
    white-space: nowrap;
    display: block;
    font-size: 0.8rem;
    @media (max-width: 768px) {
        font-size: .9rem;
    }
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 200;
`

export const InputValueMonitor = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;
    color: white;
    border-radius: 6px;
    padding: 4px;
    border: 1px solid #f2f2f2;
    margin: 0;
    cursor: not-allowed;
`

export const InputBox = styled.div<{width?: string}>`
    display: flex;
    justify-content: space-between;
    & > * {
        flex: 100%;
    }
    align-items: center;
    background: #1b1a23;
    border: 1px solid #4a4d56;
    border-radius: 6px;
    padding: 12px;
    box-sizing: border-box;
    color: white;
    width: ${p => p.width || '45%'};
`


export const RoundedSelectBox = styled.select<{
  width?: string;
  textAlign?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.width || "40px"};
  text-align: center;
  height: 20px;
  background: #1b1a21;
  outline: none;
  border: 1px solid #f2f2f2;
  color: #bfbfc3;
  transition: 0.1s ease-in-out;
  &:hover {
    border: 1px solid #f2f2f2;
  }
`;

export const InputTitleBeforeListBox = styled.p`
    width: auto;
    white-space: nowrap;
    display: block;
    font-size: 0.8rem;
    @media (max-width: 768px) {
        font-size: .9rem;
    }
    color: white;
    margin: 0;
    marginright: 100px;
    padding: 0;
    font-weight: 200;
`

export const ConfigInputBox = styled.div<{width?: string}>`
    display: flex;
    justify-content: space-between;
    & > * {
        flex: 100%;
    }
    align-items: center;
    background: #1b1a23;
    border: 1px solid #4a4d56;
    border-radius: 6px;
    padding: 12px;
    box-sizing: border-box;
    color: white;
    width: ${p => p.width || '45%'};
`

export const ConfigBox = styled.div<BoxProps>`
    display: ${p => p.display || 'flex'};
    flex-direction: ${p => p.direction || 'row'};
    justify-content: ${p => p.justify || 'center'};
    align-items: ${p => p.align || 'center'};
    margin: ${p => p.margin || '0'};    
    width: ${p => p.width || 'auto'};
    gap: ${p => p.gap || 'auto'};
    flex: ${p => p.flex || '1'};
`
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
