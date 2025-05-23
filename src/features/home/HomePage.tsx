import { DashboardLayout } from "../../components/DashboardLayout";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

const HomePage = () => {
  return (
    <DashboardLayout>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Bienvenido a Tenpo Challenge
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Esta es la página principal de la aplicación donde puedes ver toda la información.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {[1, 2, 3, 4].map((item) => (
            <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 3' } }} key={item}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Tarjeta {item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Información de ejemplo para la tarjeta {item}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default HomePage;
