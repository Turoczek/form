import React from "react";

import { LabelProps } from "./Label.types";

export const Label: React.FC<LabelProps> = ({ id, label, isFakeLabel }) => {
    const TagName = isFakeLabel ? "p" : "label";

    return (
        <TagName className="block font-inter text-base font-normal text-s font-bold mb-2" htmlFor={id}>
            {label}
        </TagName>
    );
};
