import React, { FC, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Layout } from "../../components/Layout/Layout";
import { PersonalForm } from "../../components/PersonalForm/PersonalForm";
import { AppDispatch, RootState } from "../../store/store";
import { fetchHolidays } from "../../store/Holidays/holidays.slice";

export const PersonalPage: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { holidays } = useSelector((state: RootState) => state.holidays);

    useEffect(() => {
        if (holidays.length === 0) {
            dispatch(fetchHolidays({ country: "PL", year: 2023 }));
        }
    }, [dispatch, holidays]);

    return (
        <Layout>
            <PersonalForm />
        </Layout>
    );
};
