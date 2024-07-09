export enum HolidayType {
    PUBLIC_HOLIDAY = "PUBLIC_HOLIDAY",
    OBSERVANCE = "OBSERVANCE",
    NATIONAL_HOLIDAY = "NATIONAL_HOLIDAY",
    SEASON = "SEASON",
}

export interface Holiday {
    country: string;
    iso: string;
    year: number;
    date: string;
    day: string;
    name: string;
    type: HolidayType;
}

export type HolidaysResponse = Holiday[];
