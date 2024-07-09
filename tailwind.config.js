/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            fontSize: {
                xs: "14px",
                s: "16px",
                m: "20px",
                l: "24px",
            },
            colors: {
                gray10: "#898DA9",
                primary10: "#CBB6E5",
                primary100: "#761BE4",
                primary200: "#6A19CD",
                error0: "#F0EAF8",
                error5: "#FEECEC",
                error500: "#ED4545",
                black: {
                    black200: "#000853",
                },
                green: {
                    DEFAULT: "#00FF00",
                },
            },
            borderWidth: {
                1: "1px",
                2: "2px",
            },
            screens: {
                small: "768px",
                medium: "1024px",
            },
            maxWidth: {
                "page-width": "var(--page-width)",
                "page-width-medium": "var(--page-width-medium)",
                "page-width-large": "var(--page-width-large)",
            },
        },
    },
    plugins: [],
};
