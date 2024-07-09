import api from "../authService";
import { HolidaysResponse } from "../types";
import { URLS } from "../urls";

export const getHolidays = async (country: string, year: number): Promise<HolidaysResponse> =>
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
