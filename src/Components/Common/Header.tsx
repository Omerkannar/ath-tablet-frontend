import { HeaderContainer, TabletHeading, HR } from "./Common.styles";

interface HeaderInterface {
    title: string;
}


const Header = ({ title }: HeaderInterface) => {

    return (
        <HeaderContainer>
            <TabletHeading>{title}</TabletHeading>
            <HR />
        </HeaderContainer>
    )
}

export default Header;





