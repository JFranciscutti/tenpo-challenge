import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../contexts/AuthContext";
import { LogOut } from "lucide-react";

export const ResponsiveAppBar = () => {
  const { logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              mr: 2,
            }}
          >
            Tenpo Challenge
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Button
          color="inherit"
          onClick={logout}
          endIcon={<LogOut className="text-white pl-2" />}
          sx={{
            fontWeight: "medium",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.15)",
            },
            "& .MuiButton-startIcon": {
              mr: isMobile ? 0 : 1,
            },
            "& .MuiButton-endIcon": {
              ml: 0,
            },
            minWidth: isMobile ? "auto" : undefined,
            px: isMobile ? 1 : 2,
          }}
        >
          {!isMobile && "Salir"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
