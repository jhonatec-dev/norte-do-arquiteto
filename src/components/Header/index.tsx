// import { Image } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

import Image from "next/image";

export default function Header() {

  return (
    <Stack className="Header" spacing={2} direction={"row"} p={2} flexWrap={"wrap"} alignItems={"center"}>
      <Image src="/assets/images/logo.png" alt="logo" width={150} height={150} />
      <Stack spacing={2} alignItems={"center"} textAlign={"center"}>
        <Typography variant="h1">NORTE DO ARQUITETO</Typography>
        <Typography variant="h3">PORTFOLIO DE IMAGENS REALISTAS 3D</Typography>
        <Button variant="outlined">Saiba mais</Button>
      </Stack>
    </Stack>

  )
}