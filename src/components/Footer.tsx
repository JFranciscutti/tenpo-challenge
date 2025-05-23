import { Typography, Link as MuiLink } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-4 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
        <Typography variant="body2" className="text-sm">
          Tenpo Challenge - 2025
        </Typography>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <MuiLink
            href="https://github.com/jfranciscutti"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <GitHubIcon fontSize="small" />
          </MuiLink>
          <MuiLink
            href="https://linkedin.com/in/jfranciscutti"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedInIcon fontSize="small" />
          </MuiLink>
        </div>
      </div>
    </footer>
  );
}
