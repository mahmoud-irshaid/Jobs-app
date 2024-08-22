import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useTranslation } from "react-i18next";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const theme = createTheme({
    direction,
    typography: {
      fontFamily: ["Cairo", "Roboto", "sans-serif"].join(", "),
    },
  });

  document.body.dir = direction;

  return direction === "rtl" ? (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

export default ThemeProviderWrapper;
