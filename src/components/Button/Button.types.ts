import { ReactNode } from "react";

type ButtonTextType = JSX.IntrinsicElements["button"] & JSX.IntrinsicElements["a"];

export interface ButtonProps extends ButtonTextType {
    children: ReactNode | string;
}
