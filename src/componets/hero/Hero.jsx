import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeroImage from "../../static/HeroImage.jpg";

const Hero = () => {
  return (
    <Box>
      <Typography
        align="center"
        variant="h3"
        sx={{ fontWeight: 900, fontSize: { xs: 20, sm: 30, md: 50 } }}
      >
        {" "}
        Fashions
        <b style={{ color: "red", fontSize: { xs: 20, sm: 30, md: 50 } }}>
          Blog
        </b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        We make you look the better of you
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "70%", md: "60%", lg: "40%" },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant={"h6"} color="tomato" align="center" pt={8}>
              Trending Styles
            </Typography>
            <Typography variant="h4" align="center">
              Life is boring without Fashion
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
              {" "}
              We love to change your style{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
