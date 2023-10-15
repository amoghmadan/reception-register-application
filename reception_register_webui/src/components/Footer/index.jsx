import { useTheme } from "@emotion/react";
import { Container, Typography } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <footer
      className={{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3, 0),
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Reception Register
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          &copy; 2023 - {new Date().getFullYear()} Amogh Madan. All rights
          reserved.
        </Typography>
      </Container>
    </footer>
  );
}
