import React, { FC } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { PersonalPage } from "./PersonalPage/PersonalPage";

const Index: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PersonalPage />} />
                <Route path="*" element={<h1>Error 404, źle trafiłeś!</h1>} />
            </Routes>
        </Router>
    );
};

export default Index;
