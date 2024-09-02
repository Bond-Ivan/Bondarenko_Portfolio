import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { ModalErrorContainer, ModalErrorText } from "./ModalError.styled";

function ModalError(): ReactElement {
    const { t } = useTranslation();

    return (
        <ModalErrorContainer>
            <ModalErrorText>{t("modal.error")}</ModalErrorText>
        </ModalErrorContainer>
    )
}

export default ModalError;