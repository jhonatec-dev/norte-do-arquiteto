// import { Image } from "@mui/icons-material";
import { Close, DarkMode, LightMode, Menu } from "@mui/icons-material";
import {
  Backdrop,
  Button,
  IconButton,
  Paper,
  Slide,
  Stack,
  Typography,
} from "@mui/material";

import { AppContext } from "@/context/appProvider";
import { navbarItems } from "@/utils/navbarItems";
import { useContext, useEffect, useState } from "react";
import Logo from "./Logo";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleMode } = useContext(AppContext);

  const { mode } = theme.palette;

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
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

  const handleThemeButtonClick = (e: any) => {
    e.stopPropagation();
    toggleMode();
  };

  return (
    <>
      <Paper className="NavBar">
        <Slide direction="down" in={show} timeout={300} unmountOnExit >
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
        sx={{
          zIndex: 9999,
          backdropFilter: "blur(4px)",
          top: 0,
          margin: 0,
          color: "whitesmoke",
        }}
      >
        <IconButton
          color="inherit"
          onClick={() => setShowMenu(false)}
          sx={{ position: "absolute", top: 0, right: 0, margin: 2 }}
          size="large"
        >
          <Close />
        </IconButton>
        <Stack spacing={3} p={2} textAlign={"center"} alignItems={"center"}>
          <div
            style={{
              filter:
                " brightness(130%) drop-shadow(0 0 2px rgba(255, 255, 255, 0.4)",
            }}
          >
            <Logo />
          </div>

          <a href="#">
            <Typography
              variant="h1"
              fontSize={"2.5rem"}
              fontWeight={"bold"}
              color={"rgba(255, 255, 255, 0.87)"}
            >
              NORTE DO ARQUITETO
            </Typography>
          </a>
          {navbarItems.map((item) => (
            <Button
              key={item.name}
              href={item.href}
              color="inherit"
              variant="outlined"
              fullWidth
            >
              {item.name}
            </Button>
          ))}

          <IconButton color="inherit" onClick={handleThemeButtonClick}>
            {mode === "dark" ? (
              <DarkMode fontSize="large" />
            ) : (
              <LightMode htmlColor="" fontSize="large" />
            )}
          </IconButton>
        </Stack>
      </Backdrop>
    </>
  );
}
