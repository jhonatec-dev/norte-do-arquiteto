import About from "@/components/About";
import Header from "@/components/Header";
import Jobs from "@/components/Jobs";
import NavBar from "@/components/Nav";
import { components } from "@/styles/themeComponents";
import { DarkMode, LightMode } from "@mui/icons-material";
import {
  Fab,
  Paper,
  Stack,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = createTheme({
    palette: {
      mode,
    },
    components: components as any,
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ borderRadius: 0 }}>
        <Fab
          className="theme-mode"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          size="small"
        >
          {mode === "light" ? (
            <LightMode />
          ) : (
            <DarkMode htmlColor="#a6a6a6" />
          )}
        </Fab>
        <Stack maxWidth={"1000px"} margin="0 auto" spacing={0}>
          <NavBar />
          <Header />
          <About />
          <Jobs />
        </Stack>
      </Paper>
    </ThemeProvider>
  );
}
