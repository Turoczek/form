import React from "react";

import { Badge } from "../Badge/Badge";
import { Label } from "../Label/Label";

import { AvailableHoursProps } from "./AvailableHours.types";

export const AvailableHours: React.FC<AvailableHoursProps> = ({ setHour, hours, hour }) => {
    return (
        <div className="ml-0 medium:ml-6">
            <Label id="hours" label="Time" isFakeLabel />
            <ul className="flex flex-row flex-wrap gap-2 list-none p-0 medium:flex-col">
                {hours.map((availableHour, index) => (
                    <li key={index}>
                        <Badge onClick={() => setHour(availableHour)} selected={hour === availableHour}>
                            {availableHour}
                        </Badge>
                    </li>
                ))}
            </ul>
        </div>
    );
};
