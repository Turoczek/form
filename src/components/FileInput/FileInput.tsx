import React from "react";

import { Label } from "../Label/Label";
import { ReactComponent as Warning } from "../../assets/icons/20x20/warning.svg";

import { FileInputProps } from "./FileInput.types";

export const FileInput: React.FC<FileInputProps> = ({ onChange, file }) => {
    const handleFileChange = (file: File) => {
        onChange(file);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        handleFileChange(file);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0];
        file && handleFileChange(file);
    };

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        onChange(null);
    };

    return (
        <>
            <Label label="Photo" isFakeLabel />
            <div
                className="flex flex-col items-center border border-primary10 border-action p-8 bg-white rounded-lg mb-12"
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleDrop}
            >
                <input type="file" id="file" name="file" onChange={handleInputChange} className="hidden" />
                <label htmlFor="file" className="flex flex-col items-center cursor-pointer">
                    <div className="text-m">
                        {(file?.name && (
                            <p className="flex flex-row items-center gap-2">
                                <span>{file.name}</span>
                                <button onClick={(e) => handleDelete(e)}>
                                    <Warning />
                                </button>
                            </p>
                        )) || (
                            <>
                                <span className="text-primary100 underline">Upload a file</span>
                                <span className="hidden medium:text-gray10 ">{"  "}or drag nad drop here</span>
                            </>
                        )}
                    </div>
                </label>
            </div>
        </>
    );
};
