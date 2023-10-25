import "@/styles/globals.scss";
import { components } from "@/styles/themeComponents";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const theme = createTheme({
    palette: {
      mode
    },
    components: components as any
  })
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
