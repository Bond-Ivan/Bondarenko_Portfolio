import { ReactElement, SetStateAction, useState } from "react";
import { DropdownArrow, DropdownContainer, DropdownInput, HeaderContainer, OptionsContainer, Option, HeaderToggleTheme, HeaderWrapper } from "./Header.styled";
import { useTranslation } from "react-i18next";
import HeaderProps from "./Header.types";

function Header({ toggleTheme }: HeaderProps): ReactElement {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState(localStorage.getItem('i18nextLng') || 'ru');

    const toggleDropdown = () => {
        setActive(!active);
    };

    const selectOption = (option: SetStateAction<string>) => {
        setSelected(option);
        setActive(false);
    };

    const { i18n } = useTranslation()
    const changelanguage = (language: string) => {
        i18n.changeLanguage(language);
        localStorage.setItem('i18nextLng', language);
    };


    return (
        <HeaderContainer>
            <HeaderWrapper>
                <DropdownContainer>
                    <DropdownInput
                        type="text"
                        value={selected}
                        readOnly
                        onClick={toggleDropdown}
                    />
                    <DropdownArrow $active={active} />
                    <OptionsContainer $active={active}>
                        <Option onClick={() => { selectOption('en'); changelanguage('en'); }}>en</Option>
                        <Option onClick={() => { selectOption('ru'); changelanguage('ru'); }}>ru</Option>
                    </OptionsContainer>
                </DropdownContainer>
                <HeaderToggleTheme onClick={toggleTheme}>Toggle Theme</HeaderToggleTheme>
            </HeaderWrapper>
        </HeaderContainer>
    );
}

export default Header;