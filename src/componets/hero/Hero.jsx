import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Hero = () => {
  return (
    <Box>
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        {" "}
        Fashions
        <b style={{ color: "red" }}>Blog</b>
      </Typography>
    </Box>
  );
};

export default Hero;
