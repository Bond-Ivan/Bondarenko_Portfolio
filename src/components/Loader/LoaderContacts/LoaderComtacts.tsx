import { ReactElement } from "react";
import { LoaderContactsContainer, LoaderContactsSpinner } from "./LoaderContacts.styled";

function LoaderContacts(): ReactElement {
    return (
        <LoaderContactsContainer>
            <LoaderContactsSpinner>
            </LoaderContactsSpinner>
        </LoaderContactsContainer>
    )
}

export default LoaderContacts;