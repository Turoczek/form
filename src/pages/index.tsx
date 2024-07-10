import React, { FC } from "react";

import { PersonalPage } from "./PersonalPage/PersonalPage";

// HAD TO REMOVE REACT ROUTER, NOTHING HELPS FOR NOW
//https://stackoverflow.com/questions/58065603/netlify-renders-404-on-page-refresh-using-react-and-react-router

const Index: FC = () => {
    return <PersonalPage />;
};

export default Index;
