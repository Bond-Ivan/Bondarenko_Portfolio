import { ReactElement } from "react";
import { HeaderContainer, HeaderToggleTheme, HeaderWrapper } from "./Header.styled";
import HeaderProps from "./Header.types";
import Language from "./Language";

function Header({ toggleTheme }: HeaderProps): ReactElement {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Language />
                <HeaderToggleTheme onClick={toggleTheme}>Toggle Theme</HeaderToggleTheme>
            </HeaderWrapper>
        </HeaderContainer>
    );
}

export default Header;