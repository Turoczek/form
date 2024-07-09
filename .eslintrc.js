module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:import/react",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["import", "prettier"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "import/no-unresolved": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "import/order": ["warn", { "newlines-between": "always-and-inside-groups" }],
        "prettier/prettier": "warn",
        "plugin:react/jsx-runtime": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
        "react/prop-types": "off",
    },
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
