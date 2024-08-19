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

  const rtlTheme = createTheme({
    direction: i18n.language === "ar" ? "rtl" : "ltr",
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProviderWrapper;
