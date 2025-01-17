import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: arial;
  display: flex;
  padding: 0px 0px;
  margin: 0;
  width: 1280px;
  height : 800px;
  background-color: #21242b;
  color: white;
  box-sizing: border-box;
  border-radius: 0;
  flex-direction : column;
  flex-wrap: nowrap;
`;

export const HR = styled.hr`
  border: 1px solid #4a4d56;
  width: 98%
`;

export const VL = styled.div`
  border: 1px solid #4a4d56;
  height: 96%;
  margin-top: 00px;
`;

export const HeaderFooterContainer = styled.div<{
  footer?: boolean;
}>`
  font-family: arial;
  display: flex;
  padding: ${(p) => p.footer ? '0px 10px' : '0px 0px'};
  margin: 0;
  width: 100%;
  height : 10%;
  background-color: #21242b;
  color: white;
  box-sizing: border-box;
  border-radius: 0;
  flex-direction : ${(p) => p.footer ? 'row' : 'column'};
  flex-wrap: nowrap;
  justify-content: ${(p) => p.footer ? 'start' : 'center'};
  align-items: center;
`;

export const BodyContainer = styled.div<{
  flexDirection?: string;
}>`
  font-family: arial;
  display: flex;
  padding: 0px 10px;
  margin: 0;
  width: 100%;
  height : 80%;
  background-color: #21242b;
  color: white;
  box-sizing: border-box;
  border-radius: 0;
  flex-direction : ${(p) => p.flexDirection || 'row'};
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  align-content: start;
`;

export const DividedBodyContainer = styled.div`
  font-family: arial;
  display: flex;
  width: 1200px;
  height : 50%;
  background-color: #21242b;
  color: white;
  box-sizing: border-box;
  border-radius: 0;
  flex-direction : row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  align-content: start;
`;

export const TabletParagraph = styled.p`
  margin: 0;
  color: #bfbfc3;
  font-size: 12px;
`;

export const TabletHeading = styled.h1`
  margin: 0;
  color: #bfbfc3;
  font-size: 48px;
  padding-top: 10px;
`;

export const TabletNavigationButton = styled.button<{
  justifyContent?: string;
  borderOn?: boolean;
}>`
  display: flex;
  flex-direction : column;
  flex-wrap: wrap;
  padding: 10px 0px 0px 0px;
  margin: 15px 15px;
  align-content: center;
  justify-content: ${(p) => p.justifyContent || "center"};
  align-items: center;
  border: ${(p) => p.borderOn? "5px solid yellow": "1px solid cyan"};
  background: #333;
  border-radius: 6px;
  opacity: 0.8;
  height: 210px;
  width: 210px;
`

export const IconImage = styled.img.attrs(props => ({
  src: props.src,
}))`
    width: ${props => (props.width)}px;    
`

export const NavigationButtonParagraph = styled.p<{
  alignContent?: string;
  height?: string;
}>`
  margin: 0;
  padding-top: 20px;
  color: #bfbfc3;
  font-size: 24px;
  word-wrap: normal;
  height: ${(p) => p.height || "35%"};
  width: 90%;
  align-content: ${(p) => p.alignContent || "center"};;
  justify-content: center;
  align-items: end;
`;

export const TabletFooterButton = styled.button`
  display: flex;
  flex-direction : column;
  flex-wrap: wrap;
  padding: 10px 0px;
  margin: 20px 20px;
  align-content: center;
  justify-content: center;
  align-items: center;
  border: 1px solid cyan;
  background: #333;
  border-radius: 6px;
  opacity: 0.8;
  height: 70px;
  width: 70px;
 `;

export const TabletFooterButtonParagraph = styled.p`
  margin: 0;
  color: #bfbfc3;
  font-size: 18px;
  padding-top: 0px;
`;

export const TabletFooterStatus = styled.div<{
  color?: string
}>`
  display: flex;
  flex-direction : column;
  flex-wrap: wrap;
  padding: 0px 0px;
  margin: 20px 20px;
  align-content: center;
  justify-content: center;
  align-items: center;
  border: 4px solid;
  border-color: ${(p) => p.color || "cyan"};
  background: #333;
  border-radius: 6px;
  opacity: 0.8;
  height: 70px;
  width: 200px;
 `
