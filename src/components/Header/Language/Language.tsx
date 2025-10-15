import { ReactElement, SetStateAction, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageArrow, LanguageContainer, LanguageInput, LanguageOption, LanguageOptions } from "./Languages.styled";

function Language(): ReactElement {
    const { i18n } = useTranslation();

    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState(localStorage.getItem('i18nextLng') || 'ru');
    const dropdownRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActive(false);
            }
        };
    
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActive(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);
    return (
        <LanguageContainer ref={dropdownRef}>
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