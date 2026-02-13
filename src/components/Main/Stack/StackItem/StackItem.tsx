import { ReactElement } from "react";
import { StyledStackItem, StackItemIcon, StackItemTitle } from "./StackItem.styled";
import { animationStack } from "../../../../unitls/animation";
import IStackItem from "./StackItem.types";

function StackItem({ custom, title, attributes, iconContent }: IStackItem): ReactElement {
    return (
        <StyledStackItem variants={animationStack} custom={custom}>
            <StackItemIcon {...attributes}>
                {iconContent}
            </StackItemIcon>
            <StackItemTitle>
                {title}
            </StackItemTitle>
        </StyledStackItem>
    )
}

export default StackItem;