import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function About() {
  return (
    <div id="about" style={{ paddingTop: "var(--padding-top)" }}>
      <Stack
        direction="row"
        gap={2}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        p={2}
      >
        <Typography variant="h2" textAlign={"center"}>
          Sobre<span className="font-light">mim</span>
        </Typography>
        <Image
          src="/assets/images/ananda.jpeg"
          alt="ananda"
          width={500}
          height={400}
          className="ananda-no-color"
        />

        <Typography
          variant="body1"
          whiteSpace={"pre-wrap"}
          maxWidth={"300px"}
          alignSelf={"flex-end"}
        >
          Sou Ananda Rosa, Graduada em Arquitetura e Urbanismo pela UNIVALE, no
          ano de 2017. Sempre tive fascínio por essa área de Maquetes
          Eletrônicas na Arquitetura, o que me faz sentir êxtase e paixão por
          desenvolver imagens realistas e proporcionar aos clientes a gostosa
          sensação de como ficará o seu sonho!!!
        </Typography>
      </Stack>
    </div>
  );
}
