import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import UndoIcon from '@mui/icons-material/Undo';

import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const theme = useTheme();
  const navigate = useNavigate()

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginY: "2rem" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1em", border: `0.180em solid ${theme.palette.secondary.main}`, borderRadius: "0.3em", padding: "0.7em" }}>
        <Typography variant="h2" color="secondary">Page not found.</Typography>

        <Button variant="contained" startIcon={<UndoIcon />} sx={{ color: "white" }} onClick={() => navigate(-1)}>
          return
        </Button>
      </Box>
    </Box >
  );
}
