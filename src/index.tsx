import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import Pages from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <Pages />
    </Provider>,
);

reportWebVitals();
