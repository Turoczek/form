import React from "react";

import { Label } from "../Label/Label";
import { ReactComponent as Info } from "../../assets/icons/16x16/info.svg";

import { TextInputProps } from "./TextInput.types";

export const TextInput: React.FC<TextInputProps> = ({ id, label, name, value, onChange, error, required }) => {
    return (
        <div className="mb-8 h-16 w-full">
            <Label id={id} label={label} />
            <input
                className={`rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
          ${
              error
                  ? "bg-error5 border-2 border-error500 focus:ring-error500"
                  : "border-1 border-primary10 focus:border-2 focus:border-primary100"
          }`}
                id={id}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={`${id}Error`}
                required={required}
            />
            {error && (
                <p id={`${id}Error`} className="flex flex-row gap-2 text-error500 text-xs mt-1">
                    <Info className="mt-1 text-error500" />
                    {error.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
            )}
        </div>
    );
};
