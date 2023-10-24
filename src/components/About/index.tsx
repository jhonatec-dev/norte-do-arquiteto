import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function About() {
  return (
    <Stack direction="row" spacing={2} alignContent={"flex-end"} flexWrap={"wrap"}>
      <Typography variant="h2">Sobre <span className='font-light'>mim</span></Typography>
      <Image src="/assets/images/ananda.jpeg" alt="ananda" width={500} height={400} className='ananda-no-color' />

      <Typography variant="body1" whiteSpace={"pre-line"} minWidth={"100%"}>
        Sou Ananda Rosa, Graduada
        em Arquitetura e Urbanismo
        pela UNIVALE, no ano de 2017.
        Sempre tive fascínio por essa
        área de Maquetes Eletrônicas
        na Arquitetura, o que me faz
        sentir êxtase e paixão por
        desenvolver imagens realistas
        e proporcionar aos clientes a
        gostosa sensação de como
        ficará o seu sonho!!!
      </Typography>


    </Stack>
  )
}