import React from "react";

import { BadgeProps } from "./Badge.types";

export const Badge: React.FC<BadgeProps> = ({ children, selected = false, type = "button", ...props }) => {
    const baseStyles = "items-center justify-center rounded-md font-medium text-m text-black-black200 p-3";
    const selectedStyles = "border-2 border-primary100 text-primary100";
    const defaultStyles = "border border-primary10 text-gray-700";

    return (
        <button type={type} className={`${baseStyles} ${selected ? selectedStyles : defaultStyles}`} {...props}>
            {children}
        </button>
    );
};
