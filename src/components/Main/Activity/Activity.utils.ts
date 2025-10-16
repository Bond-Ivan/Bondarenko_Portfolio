import { TFunction } from "i18next";
import accordionElems from "../../../unitls/constants/accordion";

export const getExperienceDuration = (dateRange: string): string => {
    const [startDateStr, endDateStr] = dateRange.split(" - ");
    
    const startDate = new Date(startDateStr.split(".").reverse().join("-"));

    const isCurrent = endDateStr === "Now" || endDateStr === "Сейчас" || endDateStr === "Today";
    const endDate = isCurrent ? new Date() : new Date(endDateStr.split(".").reverse().join("-"));

    if (isNaN(startDate.getTime()) || (endDateStr !== "Now" && endDateStr !== "Сейчас" && endDateStr !== "Today" && isNaN(endDate.getTime()))) {
        return "";
    }

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    if (years === 1 && months === 0) {
        return "1 год";
    }

    const yearText = years > 0 ? `${years} ${years === 1 ? "год" : "года"}` : "";
    const monthText = months > 0 ? `${months} ${months === 1 ? "месяц" : "месяца"}` : "";

    if (years > 0 && months > 0) {
        return `${yearText} ${monthText}`;
    } else if (years > 0) {
        return yearText;
    } else if (months > 0) {
        return monthText;
    }

    return "";
};

export const getTotalExperience = (t: TFunction): string => {
    const totalMonths = accordionElems.reduce((sum, item) => {
        const dateRange = t(item.timeKey);
        const [startDateStr, endDateStr] = dateRange.split(" - ");
        const startDate = new Date(startDateStr.split(".").reverse().join("-"));
        const isCurrent = endDateStr === "Now" || endDateStr === "Сейчас" || endDateStr === "Today";
        const endDate = isCurrent
            ? new Date()
            : new Date(endDateStr.split(".").reverse().join("-"));

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            return sum;
        }

        const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
        const monthsDiff = endDate.getMonth() - startDate.getMonth();

        return sum + yearsDiff * 12 + monthsDiff;
    }, 0);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const yearText = years > 0 ? `${years} ${years === 1 ? "год" : "года"}` : "";
    const monthText = months > 0 ? `${months} ${months === 1 ? "месяц" : "месяца"}` : "";

    if (years > 0 && months > 0) {
        return `${yearText} ${monthText}`;
    } else if (years > 0) {
        return yearText;
    } else if (months > 0) {
        return monthText;
    }

    return "Нет опыта";
};