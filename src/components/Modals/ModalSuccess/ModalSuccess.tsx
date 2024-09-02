import { ReactElement } from "react";
import { ModalSuccessContainer, ModalSuccessText } from "./ModalSuccess.styled";
import { useTranslation } from "react-i18next";

function ModalSuccess(): ReactElement {
    const { t } = useTranslation();

    return (
        <ModalSuccessContainer>
            <ModalSuccessText>{t("modal.success")}</ModalSuccessText>
        </ModalSuccessContainer>
    )
}

export default ModalSuccess;