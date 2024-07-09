import React, { FC } from "react";

import { LayoutProps } from "./Layout.types";

export const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <div className="mx-auto small:max-w-page-width small:px-16-8 medium:max-w-page-width-medium medium:px-32 large:max-w-page-width-large large:px-32 bg-error0">
            {children}
        </div>
    );
};
