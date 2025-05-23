import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { ResponsiveAppBar } from "./AppBar";
import { Footer } from "./Footer";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ResponsiveAppBar />
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
