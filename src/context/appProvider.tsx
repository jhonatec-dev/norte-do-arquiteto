import { getFromLS, saveToLS } from "@/utils/localStorage";
import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useEffect, useMemo, useState } from "react";

export interface AppContextType {
  theme: any;
  toggleMode: () => void;
}

export const AppContext = createContext({} as AppContextType);

export type themeMode = "light" | "dark";

export default function AppProvider({ children }: any) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = createTheme({
    palette: {
      mode,
    },
    components: {
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(10px) !important",
            margin: "0 !important",
            padding: "0",
            position: "fixed",
            top: "0",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "50",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: "error",
          },
        },
      },
      MuiStack: {
        styleOverrides: {
          root: {
            marginLeft: "0 !important",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#d9d9d9" : "#1e1e1e",
            
          },
          elevation2: {
            backgroundColor: mode === "light" ? "#e9e9e9" : "#232323",
            boxShadow: "none",
          },
        },
      },
    },
  });

  useEffect(() => {
    const themeMode = getFromLS("themeMode") || "light";
    setMode(themeMode);
    document.documentElement.style.setProperty(
      "--scrollbar-background",
      `var(--background-${themeMode})`
    );
    document.documentElement.style.setProperty(
      "--scrollbar-thumb",
      `var(--thumb-${themeMode})`
    );
    document.documentElement.style.setProperty(
      "--thumb-hover",
      `var(--thumb-hover-${themeMode})`
    );
  }, []);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.documentElement.style.setProperty(
      "--scrollbar-background",
      `var(--background-${newMode})`
    );
    document.documentElement.style.setProperty(
      "--scrollbar-thumb",
      `var(--thumb-${newMode})`
    );
    document.documentElement.style.setProperty(
      "--thumb-hover",
      `var(--thumb-hover-${newMode})`
    );
    saveToLS("themeMode", newMode);
  };

  const values = useMemo(
    () => ({
      theme,
      toggleMode,
    }),
    [theme]
  );

  return (
    <AppContext.Provider value={values}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}
