import About from "@/components/About";
import Header from "@/components/Header";
import Jobs from "@/components/Jobs";
import NavBar from "@/components/Nav";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack maxWidth={"1000px"} margin="0 auto" spacing={0}>
      <NavBar />
      <Header />
      <About />
      <Jobs />
    </Stack>
  );
}
