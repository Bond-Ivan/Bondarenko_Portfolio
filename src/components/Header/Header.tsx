import { ReactElement } from "react";
import { HeaderContainer, HeaderWrapper } from "./Header.styled";
import HeaderProps from "./Header.types";
import Language from "./Language";

function Header({ toggleTheme }: HeaderProps): ReactElement {
    console.log(toggleTheme)
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Language />
                {/* <ToggleSwitchContainer>
                    <Label>
                        <HiddenInput type="checkbox" onChange={toggleTheme} />
                        <Slider />
                    </Label>
                </ToggleSwitchContainer> */}
            </HeaderWrapper>
        </HeaderContainer>
    );
}

export default Header;