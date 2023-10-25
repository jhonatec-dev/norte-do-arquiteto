import { Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Stack className="Footer" id="footer">
      <Typography variant="button" textAlign={"center"}>
        © 2023 Norte do Arquiteto | Desenvolvido por{" "}
        <a href="https://www.jhonatec.dev">Jhonatec</a>
      </Typography>
    </Stack>
  );
}
