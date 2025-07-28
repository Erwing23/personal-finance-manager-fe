"use client";

import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material";

export default function LoginPage() {
  return (
    <Grid container sx={{ minHeight: "100vh", overflow: "hidden" }}>
      <Grid
        size={{ xs: 12, md: 6 }}
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box maxWidth={400} mx="auto">
          <Typography variant="h4" gutterBottom color="black">
            Bienvenido
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="black">
            Crea tu Cuenta
          </Typography>
          <TextField fullWidth label="Correo" margin="normal" />
          <TextField
            fullWidth
            label="Contraseña"
            margin="normal"
            type="password"
          />
          <Button variant="contained" fullWidth sx={{ mt: 10 }}>
            Register
          </Button>
          <Typography
            variant="subtitle2"
            gutterBottom
            color="gray"
            sx={{ mt: 5, display: "flex", justifyContent: "center" }}
          >
            Ya tienes Cuenta? <Link href="/login">Ingresa</Link>
          </Typography>
        </Box>
      </Grid>

      {/* Right Section: Image */}
      <Grid
        size={{ md: 6 }}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/login/login-bg.webp"
          alt="Description of image"
        />
      </Grid>
    </Grid>
  );
}
