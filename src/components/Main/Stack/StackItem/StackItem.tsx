import { ReactElement } from "react";
import { StyledStackItem, StackItemIcon, StackItemTitle } from "./StackItem.styled";
import { animationStack } from "../../../../unitls/animation";

function StackItem({ item }: any): ReactElement {
    return (
        <StyledStackItem variants={animationStack} custom={item.custom}>
            <StackItemIcon {...item.attributes}>
                {item.iconContent}
            </StackItemIcon>
            <StackItemTitle>
                {item.title}
            </StackItemTitle>
        </StyledStackItem>
    )
};

export default StackItem;