import { prices } from "@/data/prices";
import { formatNumberToReal } from "@/utils/format";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Button, Collapse, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Prices() {
  const [render, setRender] = useState(false);
  const [modelagem, setModelagem] = useState(false);

  const buttonSX = {
    backgroundColor: "transparent",
  };

  return (
    <Paper elevation={2} className="Section">
      <Stack
        gap={4}
        className="Container Prices"
        id="prices"
        alignItems={"center"}
        // justifyContent={"space-evenly"}
      >
        <Typography variant="h2" textAlign={"center"}>
          Nossos <span className="font-light">preços</span>
        </Typography>
        <Stack
          // gap={10}
          flexWrap={"wrap"}
          direction={"row"}
        >
          <Stack flexGrow={1} spacing={1} alignItems={"flex-start"}>
            <Button
              onClick={() => setRender(!render)}
              startIcon={render ? <ExpandLess /> : <ExpandMore />}
              variant="text"
              color="inherit"
              size="large"
              sx={buttonSX}
            >
              <Typography variant="h5" textAlign={"left"}>
                Somente Render,{" "}
                <span className="font-light block">preço por imagem</span>
              </Typography>
            </Button>
            <Collapse in={render} sx={{ paddingLeft: "20px" }}>
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
          <Stack flexGrow={1} spacing={1} alignItems={"flex-start"}>
            <Button
              onClick={() => setModelagem(!modelagem)}
              startIcon={modelagem ? <ExpandLess /> : <ExpandMore />}
              variant="text"
              color="inherit"
              size="large"
              sx={buttonSX}
            >
              <Typography variant="h5" textAlign={"left"}>
                Modelagem e Render{" "}
                <span className="font-light block">Render por imagem</span>
              </Typography>
            </Button>
            <Collapse in={modelagem} sx={{ paddingLeft: "20px" }}>
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
