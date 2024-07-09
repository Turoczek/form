import React from "react";

import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({ children, onClick, href, ...props }) => {
    const baseStyles = "flex py-4 w-full items-center justify-center rounded text-white font-bold";
    const disabledStyles = "bg-primary10 cursor-not-allowed";
    const defaultStyles = "bg-primary100 hover:bg-primary200";

    const commonStyles = `${baseStyles} ${props.disabled ? disabledStyles : defaultStyles} opacity-100`;

    const style = {};

    if (href) {
        return (
            <a href={href} className={commonStyles} style={style} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={commonStyles} onClick={onClick} style={style} {...props}>
            {children}
        </button>
    );
};
