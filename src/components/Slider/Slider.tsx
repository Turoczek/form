import React, { useState } from "react";

export const Slider: React.FC = () => {
    const [value, setValue] = useState(8); // Domyślna wartość slidera

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value)); // Ustawianie wartości slidera na podstawie jego pozycji
    };

    return (
        <div className="flex flex-col items-center">
            <label htmlFor="slider" className="text-gray-600 text-sm mb-2">
                Select pressure
            </label>
            <div className="relative flex items-center">
                <div
                    className="absolute h-4 bg-primary100"
                    style={{ width: `${((value - 8) / (100 - 8)) * 100}%` }}
                ></div>
                <div
                    className="absolute w-4 h-4 bg-primary100 rounded-full top-0 transform -translate-x-2/4 -translate-y-full"
                    style={{ left: `${((value - 8) / (100 - 8)) * 100}%` }}
                ></div>
            </div>
            <input
                id="slider"
                type="range"
                min={8}
                max={100}
                step={1}
                value={value}
                onChange={handleChange}
                className="slider appearance-none w-full h-4 bg-transparent rounded-full outline-none focus:outline-none mt-2"
            />
            <output
                htmlFor="slider"
                className="absolute bg-white border border-gray-300 p-2 rounded text-sm text-center"
                style={{
                    left: `calc(${((value - 8) / (100 - 8)) * 100}% - 20px)`,
                }}
            >
                {value}
            </output>
        </div>
    );
};
