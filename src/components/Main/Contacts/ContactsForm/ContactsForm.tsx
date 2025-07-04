import { send } from "emailjs-com";
import { ReactElement, useEffect, useRef, useState } from "react";
import { FormItem, FormItemLabel, FormItemInput, FormButton, FormIcon, ContactsDescription } from "./ContactsForm.styled";
import LoaderContacts from "../../../Loader/LoaderContacts";
import ModalSuccess from "../../../Modals/ModalSuccess";
import { useTranslation } from "react-i18next";
import ModalError from "../../../Modals/ModalError";
import emailRegex from "../../../../unitls/constants/email";
import { ContactsText, ContactsTextSpan } from "../Contacts.styled";

function ContactsForm(): ReactElement {
    const { t } = useTranslation();
    const form = useRef<HTMLFormElement>(null);
    const [loader, setLoader] = useState<boolean>(false);
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);
    const [modalError, setModalError] = useState<boolean>(false);
    const [inputsRequared, setInputRequares] = useState<boolean>(false);

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        email: '',
    });

    useEffect(() => {
        const result = Object.values(toSend).every(input => input.trim() !== '');
        if (!result) {
            setInputRequares(true);
        } else {
            setInputRequares(false);
        }
    }, [toSend]);

    const isValidEmail = (email: string) => {
        return emailRegex.test(email);
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (!toSend.from_name || !toSend.message || !toSend.email) {
            alert('Заполните все поля');
            return;
        }

        if (!isValidEmail(toSend.email)) {
            alert('Некорректный email');
            return;
        }

        setLoader(true);
        send(
            'service_ontefvr',
            'template_mcfwvdk',
            toSend,
            'QzCyi7W2RYNvOoqnW'
        ).then(() => {
            setToSend({
                from_name: '',
                message: '',
                email: '',
            });
            setLoader(false);
            setModalSuccess(true);
            setTimeout(() => {
                setModalSuccess(false);
            }, 4000);
        }).catch(() => {
            setLoader(false);
            setModalError(true);
            setTimeout(() => {
                setModalError(false);
            }, 4000);
        });
    };

    const handleChange = (e: any) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>
            {loader && (
                <LoaderContacts />
            )}
            {modalSuccess && (
                <ModalSuccess />
            )}
            {modalError && (
                <ModalError />
            )}
            <form ref={form} onSubmit={onSubmit}>
                <FormIcon fill="#FFFFFF" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-email">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z">
                        </path>
                    </g>
                </FormIcon>
                <ContactsText>
                    {t("contacts.description.text")}
                    <ContactsTextSpan>
                        {t("contacts.description.name")}
                    </ContactsTextSpan>
                </ContactsText>
                <ContactsDescription>{t("contacts.text")}</ContactsDescription>
                <FormItem>
                    <FormItemLabel>{t("contacts.form.labelName")}</FormItemLabel>
                    <FormItemInput
                        type="text"
                        name="from_name"
                        placeholder="Ivan Bondarenko"
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                </FormItem>
                <FormItem>
                    <FormItemLabel>{t("contacts.form.labelEmail")}</FormItemLabel>
                    <FormItemInput
                        type="email"
                        name="email"
                        placeholder="bond@gmail.com"
                        value={toSend.email}
                        onChange={handleChange}
                    />
                </FormItem>
                <FormItem>
                    <FormItemLabel>{t("contacts.form.labelMessage")}</FormItemLabel>
                    <FormItemInput
                        type="text"
                        id="message"
                        name="message"
                        placeholder="message"
                        value={toSend.message}
                        onChange={handleChange}
                    />
                </FormItem>
                <FormButton $disabled={inputsRequared} type="submit">{t("button.submit")}</FormButton>
            </form>
        </>
    )
}

export default ContactsForm;