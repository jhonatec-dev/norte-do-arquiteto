import { Paper, Stack, Typography } from "@mui/material";

export default function Prices() {
  return (
    <Paper elevation={2} className="Section">
      <Stack spacing={4} className="Container" id="prices">
        <Typography variant="h2" textAlign={"center"}>
          Nossos <span className="font-light">preços</span>
        </Typography>
      </Stack>
    </Paper>
  );
}
