import { ReactElement } from "react";
import { LoaderContainer, LoaderSpinner } from "./Loader.styled";

function Loader(): ReactElement {
    return (
        <LoaderContainer>
            <LoaderSpinner>
            </LoaderSpinner>
        </LoaderContainer>
    );
}

export default Loader;