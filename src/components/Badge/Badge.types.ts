import { ButtonHTMLAttributes, ReactNode } from "react";

export interface BadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | string;
    selected?: boolean;
}
