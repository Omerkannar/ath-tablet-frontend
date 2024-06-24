import { RepositionParagraph, RepositionParagraphUnits } from "./Reposition.styles";

export interface TitleAndParagraph {
  title: string;
}

export const Title = ({ title }: TitleAndParagraph) => {
  return <p style={{ fontSize: 24 }}>{title}</p>
}

export const RepositionParagraphComponent = ({ title }: TitleAndParagraph) => {
  return <RepositionParagraph style={{width: "25%"}}>{title}</RepositionParagraph>
}

export const RepositionParagraphComponentUnits = ({ title }: TitleAndParagraph) => {
  return <RepositionParagraphUnits style={{width: "25%"}}>{title}</RepositionParagraphUnits>
}



