import { Container, Grid, Typography } from "@mui/material";
import ArtistsDataGrid from "../artists/ArtistsDataGrid";

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h6" color="text.secondary">
        Listado de Artistas Argentinos
      </Typography>
      <Grid container sx={{ mt: 2 }}>
        <ArtistsDataGrid />
      </Grid>
    </Container>
  );
};

export default HomePage;
