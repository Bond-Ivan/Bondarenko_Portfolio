import { ReactElement } from "react";
import {
    ContactsContainer, ContactsSection, ContactsSociaItem,
    ContactsSocial, ContactsSocialLink, ContactsSocialText,
    ContactsTitle, ContactsWrapper,
    FormContainer, FormList
} from "./Contacts.styled";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import ContactsForm from "./ContactsForm/ContactsForm";
import ParticlesBackground from "../../Particular/ParticularGrab";

function Contacts(): ReactElement {
    const { t } = useTranslation();

    return (
        <Element name="contacts">
            <ContactsSection>
                <ParticlesBackground id="particles-contacts" />

                <ContactsContainer>
                    <ContactsTitle>
                        {t("contacts.title")}
                    </ContactsTitle>
                    <ContactsWrapper>
                        <FormContainer>
                            <ContactsForm />
                        </FormContainer>
                        <FormList>
                            <ContactsSociaItem>
                                <ContactsSocialLink href="https://github.com/Bond-Ivan?tab=repositories" target="_blank">
                                    <ContactsSocial xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </ContactsSocial>
                                </ContactsSocialLink>
                                <ContactsSocialText>{t("socials.gitHub")}</ContactsSocialText>
                            </ContactsSociaItem>
                            <ContactsSociaItem>
                                <ContactsSocialLink href="https://t.me/frontendeeer" target="_blank">
                                    <ContactsSocial xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                        <title>Telegram SVG Icon</title>
                                        <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" d="M40.83 8.48c1.14 0 2 1 1.54 2.86l-5.58 26.3c-.39 1.87-1.52 2.32-3.08 1.45L20.4 29.26a.4.4 0 0 1 0-.65l15.37-13.88c.7-.62-.15-.92-1.07-.36L15.41 26.54a.46.46 0 0 1-.4.05L6.82 24C5 23.47 5 22.22 7.23 21.33L40 8.69a2.2 2.2 0 0 1 .83-.21" />
                                    </ContactsSocial>
                                </ContactsSocialLink>
                                <ContactsSocialText>{t("socials.telegram")}</ContactsSocialText>
                            </ContactsSociaItem>
                            <ContactsSociaItem>
                                <ContactsSocialLink href="mailto:bond.code@yandex.ru" target="_blank">
                                    <ContactsSocial xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <title>Email SVG Icon</title>
                                        <path fill="#ffffff" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z" />
                                    </ContactsSocial>
                                </ContactsSocialLink>
                                <ContactsSocialText>{t("socials.email")}</ContactsSocialText>
                            </ContactsSociaItem>
                        </FormList>
                    </ContactsWrapper>
                </ContactsContainer>
            </ContactsSection>
        </Element>
    );
}

export default Contacts;