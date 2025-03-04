import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";

export default function Navbar() {
  const { palette } = useTheme();
  const [selected, setSelected] = useState(
    window.location.pathname === "/" ? "dashboard" : "predictions"
  );

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Link
          to="/"
          onClick={() => setSelected("dashboard")}
          style={{ textDecoration: "none" }}
        >
          <Box
            component="span"
            sx={{
              fontSize: "16px",
              color:
                selected === "dashboard"
                  ? palette.grey[100]
                  : palette.grey[700],
              "&:hover": { color: palette.primary[100] },
              cursor: "pointer",
            }}
          >
            Dashboard Page
          </Box>
        </Link>

        <Link
          to="/predictions"
          onClick={() => setSelected("predictions")}
          style={{ textDecoration: "none" }}
        >
          <Box
            component="span"
            sx={{
              fontSize: "16px",
              color:
                selected === "predictions"
                  ? palette.grey[100]
                  : palette.grey[700],
              "&:hover": { color: palette.primary[100] },
              cursor: "pointer",
            }}
          >
            Predictions Page
          </Box>
        </Link>
      </FlexBetween>
    </FlexBetween>
  );
}
