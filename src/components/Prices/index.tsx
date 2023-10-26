import { prices } from "@/data/prices";
import { formatNumberToReal } from "@/utils/format";
import { Box, Paper, Stack, Typography } from "@mui/material";

export default function Prices() {
  return (
    <Paper elevation={2} className="Section">
      <Stack
        spacing={4}
        className="Container Prices"
        id="prices"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h2" textAlign={"center"}>
          Nossos <span className="font-light">preços</span>
        </Typography>
        <Stack
          gap={3}
          flexWrap={"wrap"}
          direction={"row"}
          // justifyItems={"center"}
          // justifyContent={"center"}
          // alignItems={"stretch"}
          // width={"100%"}
        >
          <Stack flexGrow={1} spacing={1}>
            <Typography variant="h5">
              Somente Render,{" "}
              <span className="font-light block">preço por imagem</span>
            </Typography>
            {prices.map((price, index) => (
              <Box key={index} padding={"10px 0"}>
                <span className="price-title">{price.title}</span>
                <span className="price-value">
                  a partir de {formatNumberToReal(price.render)}
                </span>
              </Box>
            ))}
          </Stack>
          <Stack flexGrow={1} spacing={1}>
            <Typography variant="h5">
              Modelagem e Render{" "}
              <span className="font-light block">Render por imagem</span>
            </Typography>

            {prices.map((price, index) => (
              <Box key={index} padding={"10px 0"}>
                <span className="price-title">{price.title}</span>
                <span className="price-value">
                  a partir de {formatNumberToReal(price.modelagem)} modelagem
                </span>
                <span className="price-value">
                  + {formatNumberToReal(price.render)} por imagem render
                </span>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
