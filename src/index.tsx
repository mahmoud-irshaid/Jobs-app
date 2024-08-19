import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeProviderWrapper from "./lib/themeProvider";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </React.StrictMode>
);

reportWebVitals();
