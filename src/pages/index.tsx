import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/Nav";
import Prices from "@/components/Prices";
import Projects from "@/components/Projects";
import { AppContext } from "@/context/appProvider";
import { Paper, Stack } from "@mui/material";
import Head from "next/head";
import { useContext } from "react";

export default function Home() {
  const {} = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Norte do Arquiteto</title>
      </Head>
      <Paper sx={{ borderRadius: 0 }}>
        <Stack spacing={0}>
          <NavBar />
          <Header />
          <About />
          <Projects />
          <Prices />
          <Contact />
          <Footer />
        </Stack>
      </Paper>
    </>
  );
}
