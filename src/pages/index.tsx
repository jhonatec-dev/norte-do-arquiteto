import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/Nav";
import Prices from "@/components/Prices";
import Projects from "@/components/Projects";
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
      <Stack spacing={0}>
        <NavBar />
        <Header />
        <About />
        <Projects />
        <Prices />
        <Footer />
      </Stack>
    </Paper>
  );
}
