import { infos } from "@/data/infos";
import {
  EmailOutlined,
  ExpandLess,
  ExpandMore,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const URL =
  "https://wa.me/5533988194007?text=Ol%C3%A1+Ananda%21+Estou+entrando+em+contato+atrav%C3%A9s+do+site+e+gostaria+de+mais+algumas+informa%C3%A7%C3%B5es...";

const statusInfo = infos.map(() => false);

export default function Contact() {
  const [expand, setExpand] = useState(statusInfo);
  const {
    palette: { mode },
  } = useTheme();

  const buttonSX =
    mode === "light"
      ? {
          "& .MuiSvgIcon-root": {
            color: "#e3e3e3",
            transition: "all 0.3s",
          },

          "&:hover": {
            "& .MuiSvgIcon-root": {
              color: "#545454",
            },
          },
        }
      : {};

  const buttonSXInfo = {
    backgroundColor: "transparent",
  };

  const handleNewExpand = (index: number) => {
    const newExpand = [...expand];
    newExpand[index] = !newExpand[index];
    setExpand(newExpand);
  };

  return (
    <Stack className="Container Contact" id="contact" spacing={4}>
      <Typography variant="h2" textAlign={"center"}>
        Entre em <span className="font-light">contato</span>
      </Typography>
      <Stack
        gap={6}
        // alignItems={"center"}
        justifyContent={"center"}
        direction={"row"}
        flexWrap={"wrap"}
      >
        <Stack spacing={1}>
          <Image
            src="/assets/images/ananda.jpeg"
            alt="ananda"
            width={500}
            height={400}
            className="ananda-color"
          />
          <Button
            variant="contained"
            // color="inherit"
            href={URL}
            target="_blank"
            startIcon={<WhatsApp />}
            size="large"
            sx={buttonSX as any}
          >
            WhatsApp
          </Button>
          <Button
            variant="contained"
            color="inherit"
            href={"mailto:contato@nortedoarquiteto.com.br"}
            target="_blank"
            startIcon={<EmailOutlined />}
            size="large"
            sx={buttonSX as any}
          >
            E-mail
          </Button>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="h4" textAlign={"center"} pt={6}>
            Informações <span className="font-light">gerais</span>
          </Typography>
          {infos.map((info, index) => (
            <Box key={index} textAlign={"left"}>
              <Button
                onClick={() => handleNewExpand(index)}
                startIcon={expand[index] ? <ExpandLess /> : <ExpandMore />}
                variant="text"
                color="inherit"
                size="large"
                sx={buttonSXInfo}
              >
                <Typography variant="h5" textAlign={"left"}>
                  {info.title}
                </Typography>
              </Button>
              <Collapse in={expand[index]} sx={{ paddingLeft: "20px" }}>
                {info.description.map((desc, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    whiteSpace={"pre-line"}
                    maxWidth={"350px"}
                    padding={"10px 0"}
                  >
                    {desc}
                  </Typography>
                ))}
              </Collapse>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
