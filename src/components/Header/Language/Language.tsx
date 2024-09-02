import { ReactElement, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageArrow, LanguageContainer, LanguageInput, LanguageOption, LanguageOptions } from "./Languages.styled";

function Language(): ReactElement {
    const { i18n } = useTranslation();

    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState(localStorage.getItem('i18nextLng') || 'ru');

    const toggleDropdown = () => {
        setActive(!active);
    };

    const selectOption = (option: SetStateAction<string>) => {
        setSelected(option);
        setActive(false);
    };
    const changelanguage = (language: string) => {
        i18n.changeLanguage(language);
        localStorage.setItem('i18nextLng', language);
    };

    return (
        <LanguageContainer>
            <LanguageInput
                type="text"
                value={selected}
                readOnly
                onClick={toggleDropdown}
            />
            <LanguageArrow $active={active} />
            <LanguageOptions $active={active}>
                <LanguageOption onClick={() => { selectOption('en'); changelanguage('en'); }}>en</LanguageOption>
                <LanguageOption onClick={() => { selectOption('ru'); changelanguage('ru'); }}>ru</LanguageOption>
            </LanguageOptions>
        </LanguageContainer>
    )
}

export default Language;