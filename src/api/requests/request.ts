import axios from "axios";

import api from "../authService";
import { HolidaysResponse } from "../types";
import { URLS, URLS_LW } from "../urls";

export const getHolidays = (country: string, year: number): Promise<HolidaysResponse> =>
    api
        .get(URLS.HOLIDAYS, {
            params: {
                country: country,
                year: year,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });

export const sendForm = (data: FormData): Promise<undefined> =>
    axios
        .post(URLS_LW.SUBMIT, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
