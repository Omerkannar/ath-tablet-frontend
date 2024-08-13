import { HeaderFooterContainer, TabletHeading, HR } from "../Common.styles";

interface HeaderInterface {
    title: string;
}


const Header = ({ title }: HeaderInterface) => {

    return (
        <HeaderFooterContainer footer={false}>
            <TabletHeading>{title}</TabletHeading>
            <HR />
        </HeaderFooterContainer>
    )
}

export default Header;





