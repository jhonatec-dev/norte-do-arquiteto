// import { Image } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

import Image from "next/image";

export default function Header() {
  return (
    <>
      <Stack
        className={`Header`}
        spacing={2}
        direction={"row"}
        p={2}
        flexWrap={"wrap"}
        alignItems={"center"}
      >
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={250}
          height={250}
        />
        <Stack spacing={2} alignItems={"center"} textAlign={"center"} ml={"0 !important"}>
          <Typography variant="h1" fontSize={"4rem"}>
            NORTE DO ARQUITETO
          </Typography>

          <Typography variant="h3" fontSize={"2rem"}>
            Portfólio de imagens realistas 3D
          </Typography>
          <Button variant="contained" href="#about" color="inherit">Saiba mais</Button>
        </Stack>
      </Stack>
    </>
  );
}
