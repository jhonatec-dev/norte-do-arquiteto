import { Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function About() {
  return (
    <Paper elevation={2} className="Section">
      <Stack
        justifyContent={"center"}
        id="about"
        className="Container"
        spacing={4}
      >
        <Typography variant="h2" textAlign={"center"}>
          Sobre <span className="font-light">mim</span>
        </Typography>
        <Stack
          direction="row"
          gap={4}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
        >
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
            Sou Ananda Rosa, Graduada em Arquitetura e Urbanismo pela UNIVALE,
            no ano de 2017. Sempre tive fascínio por essa área de Maquetes
            Eletrônicas na Arquitetura, o que me faz sentir êxtase e paixão por
            desenvolver imagens realistas e proporcionar aos clientes a gostosa
            sensação de como ficará o seu sonho!!!
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
