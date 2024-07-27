import { ReactElement } from "react";
import {
    ActivityBox, ActivitySection, ActivityElem,
    ActivityItemPlace, ActivityItemPost, ActivityItemResponsibilities, ActivityItemResponsibility, ActivityList, ActivityResponsibilitiesInner, ActivityTime,
    ActivityTitle,
    ActivityContainer
} from "./Activity.styled";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";

function Activity(): ReactElement {
    const { t } = useTranslation();

    return (
        <Element name="Activity">
            <ActivitySection>
                <ActivityContainer>
                    <ActivityTitle>
                        {t("activity.title")}
                    </ActivityTitle>
                    <div>
                        <ActivityElem>
                            <ActivityBox>
                                <ActivityList>
                                    <li>
                                        <ActivityItemPost>
                                            {t("activity.firstItem.position")}
                                        </ActivityItemPost>
                                    </li>
                                    <li>
                                        <ActivityItemPlace>
                                            {t("activity.firstItem.place")}
                                        </ActivityItemPlace>
                                    </li>
                                    <li>
                                        <ActivityItemResponsibilities>
                                            <ActivityResponsibilitiesInner>
                                                <ActivityItemResponsibility>
                                                    {t("activity.firstItem.duty1")}
                                                </ActivityItemResponsibility>
                                            </ActivityResponsibilitiesInner>
                                            <ActivityResponsibilitiesInner>
                                                <ActivityItemResponsibility>
                                                    {t("activity.firstItem.duty2")}
                                                </ActivityItemResponsibility>
                                            </ActivityResponsibilitiesInner>
                                            <ActivityResponsibilitiesInner>
                                                <ActivityItemResponsibility>
                                                    {t("activity.firstItem.duty3")}
                                                </ActivityItemResponsibility>
                                            </ActivityResponsibilitiesInner>
                                            <ActivityResponsibilitiesInner>
                                                <ActivityItemResponsibility>
                                                    {t("activity.firstItem.duty4")}
                                                </ActivityItemResponsibility>
                                            </ActivityResponsibilitiesInner>
                                        </ActivityItemResponsibilities>
                                    </li>
                                </ActivityList>
                            </ActivityBox>
                            <ActivityTime>{t("activity.firstItem.time")}</ActivityTime>
                        </ActivityElem>

                        <ActivityElem>
                            <ActivityBox>
                                <ActivityList>
                                    <li>
                                        <ActivityItemPost>
                                        {t("activity.secondItem.position")}
                                        </ActivityItemPost>
                                    </li>
                                    <li>
                                        <ActivityItemPlace>
                                        {t("activity.secondItem.place")}
                                        </ActivityItemPlace>
                                    </li>
                                    <li>
                                        <ActivityItemResponsibilities>
                                            <ActivityResponsibilitiesInner>
                                                <ActivityItemResponsibility>
                                                {t("activity.secondItem.duty1")}
                                                </ActivityItemResponsibility>
                                            </ActivityResponsibilitiesInner>
                                            <ActivityResponsibilitiesInner>
                                                <ActivityItemResponsibility>
                                                {t("activity.secondItem.duty2")}
                                                </ActivityItemResponsibility>
                                            </ActivityResponsibilitiesInner>
                                            <ActivityResponsibilitiesInner>
                                                <ActivityItemResponsibility>
                                                {t("activity.secondItem.duty3")}
                                                </ActivityItemResponsibility>
                                            </ActivityResponsibilitiesInner>
                                        </ActivityItemResponsibilities>
                                    </li>
                                </ActivityList>
                            </ActivityBox>
                            <ActivityTime>{t("activity.secondItem.time")}</ActivityTime>
                        </ActivityElem>

                        <ActivityElem>
                            <ActivityBox>
                                <ActivityList>
                                    <li>
                                        <ActivityItemPost>
                                        {t("activity.thirdItem.position")}
                                        </ActivityItemPost>
                                    </li>
                                    <li>
                                        <ActivityItemPlace>
                                        {t("activity.thirdItem.place")}
                                        </ActivityItemPlace>
                                    </li>
                                    <li>
                                        <ActivityItemResponsibilities>
                                            <ActivityResponsibilitiesInner>
                                                <ActivityItemResponsibility>
                                                {t("activity.thirdItem.duty1")}
                                                </ActivityItemResponsibility>
                                            </ActivityResponsibilitiesInner>
                                        </ActivityItemResponsibilities>
                                    </li>
                                </ActivityList>
                            </ActivityBox>
                            <ActivityTime>{t("activity.thirdItem.time")}</ActivityTime>
                        </ActivityElem>
                    </div>
                </ActivityContainer>
            </ActivitySection>
        </Element>
    );
}

export default Activity;