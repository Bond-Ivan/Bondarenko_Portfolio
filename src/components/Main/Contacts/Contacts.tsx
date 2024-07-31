import { ReactElement } from "react";
import {
    ContactsContainer,
    ContactsSection, ContactsSocial, ContactsSocialLink, ContactsSocialText, ContactsText, ContactsTitle, ContactsWrapper,
    FormButton, FormContainer, FormItem,
    FormItemInput, FormItemLabel, FormTitle
} from "./Contacts.styled";
import { Form, Formik, FormikHelpers } from "formik";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import FormikValues from "./Contacts.types";

function Contacts(): ReactElement {
    const { t } = useTranslation();

    return (
        <Element name="contacts">
            <ContactsSection>
                <ContactsContainer>
                    <ContactsTitle>
                        {t("contacts.title")}
                    </ContactsTitle>

                    <ContactsWrapper>
                        <ContactsText>
                            {t("contacts.description")}
                        </ContactsText>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                text: '',
                            }}
                            onSubmit={(
                                values: FormikValues,
                                { setSubmitting }: FormikHelpers<FormikValues>
                            ) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 500);
                            }}>
                            <FormContainer>
                                <FormTitle>{t("contacts.form.title")}</FormTitle>
                                <Form>
                                    <FormItem>
                                        <FormItemLabel htmlFor="name">{t("contacts.form.labelName")}</FormItemLabel>
                                        <FormItemInput id="name" name="name" placeholder="John" />
                                    </FormItem>
                                    <FormItem>
                                        <FormItemLabel htmlFor="email">{t("contacts.form.labelEmail")}</FormItemLabel>
                                        <FormItemInput
                                            id="email"
                                            name="email"
                                            placeholder="john@acme.com"
                                            type="email"
                                        />
                                    </FormItem>
                                    <FormItem>
                                        <FormItemLabel htmlFor="Text">{t("contacts.form.labelMessage")}</FormItemLabel>
                                        <FormItemInput
                                            id="text"
                                            name="text"
                                            placeholder="message"
                                            type="text"
                                        />
                                    </FormItem>
                                    <FormButton type="submit">{t("button.submit")}</FormButton>
                                </Form>
                            </FormContainer>
                        </Formik>
                        <ul>
                            <li>
                                <ContactsSocialLink href="https://github.com/Bond-Ivan?tab=repositories" target="_blank">
                                    <ContactsSocial xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </ContactsSocial>
                                </ContactsSocialLink>
                                <ContactsSocialText>GitHub</ContactsSocialText>
                            </li>
                        </ul>
                    </ContactsWrapper>
                </ContactsContainer>
            </ContactsSection>
        </Element>
    );
}

export default Contacts;