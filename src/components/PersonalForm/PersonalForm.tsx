import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CircularProgress } from "@mui/material";

import { TextInput } from "../TextInput/TextInput";
import { AppDispatch, RootState } from "../../store/store";
import { setFieldValidity, setFieldValue } from "../../store/PersonalForm/personalForm.slice";
import { Button } from "../Button/Button";
import { Calendar } from "../Calendar/Calendar";
import { FileInput } from "../FileInput/FileInput";
import { submitForm } from "../../store/PersonalFormActions/personalFormActions.slice";

export const PersonalForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const formData = useSelector((state: RootState) => state.personalForm);
    const { submitting } = useSelector((state: RootState) => state.personalFormActions);

    const [file, setFile] = useState<File | null>(null);
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (formData && file) {
            dispatch(submitForm({ formData, file: file }));
            e.preventDefault();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let error = "";
        let isValid = false;
        switch (name) {
            case "firstName":
                dispatch(setFieldValue({ field: "firstName", value }));
                isValid = value.trim() !== "";
                error = isValid ? "" : "First name is required";
                break;
            case "lastName":
                dispatch(setFieldValue({ field: "lastName", value }));
                isValid = value.trim() !== "";
                error = isValid ? "" : "Last name is required";
                break;
            case "email":
                dispatch(setFieldValue({ field: "email", value }));
                if (!value) {
                    error = "Email is required";
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = `Please use correct formatting. \n Example: address@email.com`;
                } else {
                    isValid = true;
                }
                break;
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
        dispatch(setFieldValidity({ field: name as keyof RootState["personalForm"], isValid }));
    };

    const handleFileChange = (file: File | null) => {
        setFile(file);
    };

    const canSubmit = () => {
        return (
            formData.firstName.isValid &&
            formData.lastName.isValid &&
            formData.email.isValid &&
            file &&
            formData.date.isValid &&
            formData.hour.isValid
        );
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form
                className="max-w-288px mx-auto medium:p-2 max-w-426px"
                onSubmit={(e) => handleSubmit(e)}
                aria-label="Personal info form"
                noValidate
            >
                <fieldset className="mb-6" aria-labelledby="form-title">
                    <legend id="form-title" className="text-l font-medium mb-8">
                        Personal info
                    </legend>
                    <TextInput
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        value={formData.firstName.value}
                        onChange={handleChange}
                        error={errors.firstName}
                        required
                    />
                    <TextInput
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName.value}
                        onChange={handleChange}
                        error={errors.lastName}
                        required
                    />
                    <TextInput
                        id="email"
                        label="Email"
                        name="email"
                        value={formData.email.value}
                        onChange={handleChange}
                        error={errors.email}
                        required
                    />
                    <Calendar />
                    <FileInput onChange={handleFileChange} file={file} />
                    {submitting ? (
                        <CircularProgress />
                    ) : (
                        <Button type="submit" disabled={!canSubmit() || submitting}>
                            Send application
                        </Button>
                    )}
                </fieldset>
            </form>
        </div>
    );
};
