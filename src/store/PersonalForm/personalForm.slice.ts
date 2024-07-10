import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PersonalFormState {
    firstName: {
        value: string;
        isValid: boolean;
    };
    lastName: {
        value: string;
        isValid: boolean;
    };
    email: {
        value: string;
        isValid: boolean;
    };
    date: {
        value: string;
        isValid: boolean;
    };
    hour: {
        value: string;
        isValid: boolean;
    };
}

const initialFieldState = {
    value: "",
    isValid: false,
};

const initialState: PersonalFormState = {
    firstName: { ...initialFieldState },
    lastName: { ...initialFieldState },
    email: { ...initialFieldState },
    date: { ...initialFieldState },
    hour: { ...initialFieldState },
};

const personalForm = createSlice({
    name: "personalForm",
    initialState,
    reducers: {
        setFieldValue: (state, action: PayloadAction<{ field: keyof PersonalFormState; value: string }>) => {
            const { field, value } = action.payload;
            state[field].value = value;
        },
        setFieldValidity: (state, action: PayloadAction<{ field: keyof PersonalFormState; isValid: boolean }>) => {
            const { field, isValid } = action.payload;
            state[field].isValid = isValid;
        },
    },
});

export const { setFieldValue, setFieldValidity } = personalForm.actions;

export default personalForm.reducer;
