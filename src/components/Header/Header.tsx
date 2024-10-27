import { ReactElement } from "react";
import { HeaderContainer, HeaderWrapper, HiddenInput, Label, Slider, ToggleSwitchContainer } from "./Header.styled";
import HeaderProps from "./Header.types";
import Language from "./Language";

function Header({ toggleTheme }: HeaderProps): ReactElement {

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Language />
                <ToggleSwitchContainer>
                    <Label>
                        <HiddenInput type="checkbox" onChange={toggleTheme} />
                        <Slider />
                    </Label>
                </ToggleSwitchContainer>
            </HeaderWrapper>
        </HeaderContainer>
    );
}

export default Header;