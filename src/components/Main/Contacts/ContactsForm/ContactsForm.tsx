import { send } from "emailjs-com";
import { ReactElement, useEffect, useRef, useState } from "react";
import { FormItem, FormItemLabel, FormItemInput, FormButton } from "./ContactsForm.styled";
import LoaderContacts from "../../../Loader/LoaderContacts";
import ModalSuccess from "../../../Modals/ModalSuccess";
import { useTranslation } from "react-i18next";
import ModalError from "../../../Modals/ModalError";
import emailRegex from "../../../../unitls/constants/email";

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