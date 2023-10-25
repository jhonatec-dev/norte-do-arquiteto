// import { Image } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import {
  Backdrop,
  Button,
  IconButton,
  Paper,
  Slide,
  Stack,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Paper className="NavBar">
        <Slide direction="down" in={show} mountOnEnter unmountOnExit>
          <Stack
            spacing={2}
            direction={"row"}
            p={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Logo />
            <a href="#">
              <Typography
                variant="h1"
                fontSize={"1.5rem"}
                whiteSpace={"pre-wrap"}
                fontWeight={"600 !important"}
              >
                NORTE DO ARQUITETO
              </Typography>
            </a>

            <IconButton
              color="inherit"
              onClick={() => setShowMenu(true)}
              size="large"
            >
              <Menu fontSize="inherit" />
            </IconButton>
          </Stack>
        </Slide>
      </Paper>
      <Backdrop
        open={showMenu}
        onClick={() => setShowMenu(false)}
        sx={{ zIndex: 9999, backdropFilter: "blur(4px)", top: 0, margin: 0 }}
      >
        <Stack spacing={3} p={2} textAlign={"center"}  alignItems={"center"}>
          <div style={{filter: " drop-shadow(0 0 2px rgba(255, 255, 255, 0.4)"}}><Logo /></div>
          
          <Typography
            variant="h1"
            fontSize={"2.5rem"}
            fontWeight={"bold"}
            color={"rgba(255, 255, 255, 0.87)"}
          >
            NORTE DO ARQUITETO
          </Typography>
          <Button variant="text" href="#about">
            SOBRE MIM
          </Button>
          <Button variant="text" href="#jobs">
            TRABALHOS EM DESTAQUE
          </Button>
          <Button variant="text" href="#prices">
            TABELA DE PREÇOS
          </Button>
          <Button variant="text" href="#contact">
            CONTATO
          </Button>
        </Stack>
      </Backdrop>
    </>
  );
}
