import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { isAxiosError } from "axios";

import { sendForm } from "../../api/requests/request";
import { PersonalFormState } from "../PersonalForm/personalForm.slice";

interface FormState {
    submitting: boolean;
    error?: string;
}

const initialState: FormState = {
    submitting: false,
};

export const submitForm = createAsyncThunk(
    "personalFormActions/submitForm",
    async (args: { formData: PersonalFormState; file: File }) => {
        const data = new FormData();
        data.append("firstName", args.formData.firstName.value);
        data.append("lastName", args.formData.lastName.value);
        data.append("email", args.formData.email.value);
        data.append("date", args.formData.date.value);
        data.append("hour", args.formData.hour.value);
        data.append("file", args.file);

        try {
            const res = await sendForm(data);
            return res;
        } catch (e) {
            let errorMsg = "Wystąpił błąd. Spróbuj później.";
            if (isAxiosError(e) && e?.response?.data.detail) {
                errorMsg = e.response.data.detail;
            }
            // SHOW NOTIFICATIONS INSTEAD OF CONSOLE LOG console.log(errorMsg);
            console.log(errorMsg);
            console.log(e);
            throw e;
        }
    },
);

const personalForm = createSlice({
    name: "personalFormActions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.submitting = true;
            })
            .addCase(submitForm.fulfilled, (state) => {
                state.submitting = false;
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export default personalForm.reducer;
