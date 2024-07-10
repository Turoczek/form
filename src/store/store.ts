import { configureStore } from "@reduxjs/toolkit";

import personalFormReducer from "./PersonalForm/personalForm.slice";
import holidaysReducer from "./Holidays/holidays.slice";
import personalFormActionsReducer from "./PersonalFormActions/personalFormActions.slice";

const store = configureStore({
    reducer: {
        personalForm: personalFormReducer,
        holidays: holidaysReducer,
        personalFormActions: personalFormActionsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
