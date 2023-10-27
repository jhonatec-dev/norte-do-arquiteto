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
    },
  });

  useEffect(() => {
    const themeMode = getFromLS("themeMode") || "light";
    setMode(themeMode);
  }, []);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.documentElement.style.setProperty("--back-scrollbar", newMode === "light" ? "#ffffff" : "#1e1e1e");
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
