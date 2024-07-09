import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { isAxiosError } from "axios";

import { Holiday } from "../../api/types";
import { getHolidays } from "../../api/requests/request";

interface HolidayState {
    holidays: Holiday[];
    loading: boolean;
    error: string | null;
}

const initialState: HolidayState = {
    holidays: [],
    loading: false,
    error: null,
};

export const fetchHolidays = createAsyncThunk(
    "holidays/fetchHolidays",
    async (args: { country: string; year: number }) => {
        try {
            const res = await getHolidays(args.country, args.year);
            return res;
        } catch (e) {
            let errorMsg = "Wystąpił błąd. Spróbuj później.";
            if (isAxiosError(e) && e?.response?.data.detail) {
                errorMsg = e.response.data.detail;
            }
            //SHOW NOTIFICATION
            console.log(errorMsg);
            console.log(e);
            throw e;
        }
    },
);

const holidaySlice = createSlice({
    name: "holidays",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHolidays.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchHolidays.fulfilled, (state, action) => {
                state.loading = false;
                state.holidays = action.payload;
            })
            .addCase(fetchHolidays.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as string;
            });
    },
});

export default holidaySlice.reducer;
