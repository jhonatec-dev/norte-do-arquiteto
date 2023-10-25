import About from "@/components/About";
import Header from "@/components/Header";
import Jobs from "@/components/Jobs";
import NavBar from "@/components/Nav";
import { AppContext } from "@/context/appProvider";
import { Paper, Stack } from "@mui/material";
import { useContext } from "react";

export default function Home() {
  const {} = useContext(AppContext);

  return (
    <Paper sx={{ borderRadius: 0 }}>
      {/* <Fab
          className="theme-mode"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          size="small"
        >
          {mode === "light" ? (
            <LightMode />
          ) : (
            <DarkMode htmlColor="#a6a6a6" />
          )}
        </Fab> */}
      <Stack maxWidth={"1000px"} margin="0 auto" spacing={0}>
        <NavBar />
        <Header />
        <About />
        <Jobs />
      </Stack>
    </Paper>
  );
}
