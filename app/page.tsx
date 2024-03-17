import { Button, Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      component="main"
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          mx: "auto",
        }}
      >
        <Typography variant="h2" sx={{ mb: "1.5rem" }}>
          Flash Samurai. Write cards, quiz yourself, and level up.
        </Typography>

        <Link href="/decks">
          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
