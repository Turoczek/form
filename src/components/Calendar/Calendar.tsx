import React, { useState } from "react";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import { useDispatch, useSelector } from "react-redux";

import { CircularProgress } from "@mui/material";

import updateLocale from "dayjs/plugin/updateLocale";

import { Holiday, HolidayType } from "../../api/types";
import { AppDispatch, RootState } from "../../store/store";

import { ReactComponent as Left } from "../../assets/icons/16x16/chevronLeft.svg";
import { ReactComponent as Right } from "../../assets/icons/16x16/chevronRight.svg";
import { ReactComponent as Info } from "../../assets/icons/16x16/info.svg";

import { AvailableHours } from "../AvailableHours/AvailableHours";
import { availableHours } from "../../api/mocks/availableDates";
import { Label } from "../Label/Label";
import { setFieldValidity, setFieldValue } from "../../store/PersonalForm/personalForm.slice";

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
    weekStart: 1,
});

const dayOfWeekFormatter = (date: Dayjs): string => {
    return dayjs(date).format("dd");
};

const shouldDisableDate = (day: Dayjs, holidays: Holiday[]) => {
    const date = day.toDate();
    const dayOfWeek = date.getDay();
    const isSunday = dayOfWeek === 0;
    const isNationalHoliday = holidays.some(
        (holiday) =>
            dayjs(holiday.date).isSame(date, "day") &&
            holiday.type === HolidayType.NATIONAL_HOLIDAY &&
            dayjs(holiday.date).year() === day.year(),
    );
    return isSunday || isNationalHoliday;
};

export const Calendar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { holidays, loading } = useSelector((state: RootState) => state.holidays);
    const { hour, date } = useSelector((state: RootState) => state.personalForm);

    const [selectedHoliday, setSelectedHoliday] = useState<Holiday | null>(null);

    const handleDateChange = (date: Dayjs) => {
        const observanceHoliday = holidays.find(
            (holiday) => dayjs(holiday.date).isSame(date, "day") && holiday.type === "OBSERVANCE",
        );

        dispatch(setFieldValue({ field: "date", value: date.toString() }));
        if (observanceHoliday) {
            dispatch(setFieldValidity({ field: "date", isValid: false }));
        } else {
            dispatch(setFieldValidity({ field: "date", isValid: true }));
        }
        setSelectedHoliday(observanceHoliday || null);
    };

    const handleHourChange = (selectedHour: string) => {
        dispatch(setFieldValue({ field: "hour", value: selectedHour }));
        dispatch(setFieldValidity({ field: "hour", isValid: true }));
    };

    return (
        <div className="flex items-center mb-12">
            <div>
                <p className="text-l font-semibold my-4">Your workout</p>
                <div className={`flex flex-col ${selectedHoliday ? "medium:flex-col" : "medium:flex-row"}`}>
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <div className={"flex flex-col"}>
                            <Label isFakeLabel label="Date" />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StaticDatePicker
                                    value={date ? dayjs(date.value) : null}
                                    onChange={(e) => handleDateChange(dayjs(e))}
                                    dayOfWeekFormatter={dayOfWeekFormatter}
                                    className="p-2 border rounded border-primary10 max-w-306px medium:max-w-426px"
                                    shouldDisableDate={(v) => shouldDisableDate(v, holidays)}
                                    sx={{
                                        ".MuiDateCalendar-root": {
                                            height: "max-content",
                                        },
                                        ".MuiDayCalendar-weekDayLabel": {
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            color: "#000853",
                                        },
                                    }}
                                    slotProps={{
                                        day: {
                                            sx: {
                                                "&.MuiPickersDay-root.Mui-selected": {
                                                    backgroundColor: "#761BE4",
                                                },
                                            },
                                        },
                                    }}
                                    slots={{
                                        toolbar: () => null,
                                        actionBar: () => null,
                                        monthButton: () => null,
                                        calendarHeader: (props) => (
                                            <div className="flex items-center justify-between mx-6 mb-4">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        props.onMonthChange(props.currentMonth.add(-1, "month"), "left")
                                                    }
                                                >
                                                    <Left />
                                                </button>
                                                <p className="font-medium">{props.currentMonth.format("MMMM YYYY")}</p>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        props.onMonthChange(props.currentMonth.add(1, "month"), "right")
                                                    }
                                                >
                                                    <Right />
                                                </button>
                                            </div>
                                        ),
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                    )}
                    {selectedHoliday && (
                        <p className="flex items-center mt-2 mb-12">
                            <Info className="text-primary10" />
                            <span style={{ marginLeft: "10px" }}>{`It is ${selectedHoliday.name}`}</span>
                        </p>
                    )}
                    {date.value.length > 1 && !selectedHoliday && (
                        <div className={"mt-2 mb-12 medium:mt-0"}>
                            <AvailableHours hours={availableHours} hour={hour.value} setHour={handleHourChange} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
