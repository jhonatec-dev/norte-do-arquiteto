import { prices } from "@/data/prices";
import { formatNumberToReal } from "@/utils/format";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Button, Collapse, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Prices() {
  const [render, setRender] = useState(false);
  const [modelagem, setModelagem] = useState(false);

  return (
    <Paper elevation={2} className="Section">
      <Stack
        gap={4}
        className="Container Prices"
        id="prices"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h2" textAlign={"center"}>
          Nossos <span className="font-light">preços</span>
        </Typography>
        <Stack
          gap={10}
          flexWrap={"wrap"}
          direction={"row"}
          // justifyItems={"center"}
          // justifyContent={"center"}
          // alignItems={"stretch"}
          // width={"100%"}
        >
          <Stack flexGrow={1} spacing={1}>
            <Button
              onClick={() => setRender(!render)}
              endIcon={render ? <ExpandLess /> : <ExpandMore />}
              variant="text"
              color="inherit"
            >
              <Typography variant="h5">
                Somente Render,{" "}
                <span className="font-light block">preço por imagem</span>
              </Typography>
            </Button>
            <Collapse in={render}>
              {prices.map((price, index) => (
                <Box key={index} padding={"10px 0"}>
                  <span className="price-title">{price.title}</span>
                  <span className="price-value">
                    a partir de {formatNumberToReal(price.render)}
                  </span>
                </Box>
              ))}
            </Collapse>
          </Stack>
          <Stack flexGrow={1} spacing={1}>
            <Button
              onClick={() => setModelagem(!modelagem)}
              endIcon={modelagem ? <ExpandLess /> : <ExpandMore />}
              variant="text"
              color="inherit"
              
            >
              <Typography variant="h5">
                Modelagem e Render{" "}
                <span className="font-light block">Render por imagem</span>
              </Typography>
            </Button>
            <Collapse in={modelagem}>
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
            </Collapse>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
