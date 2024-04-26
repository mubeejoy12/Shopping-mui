import { Box, Stack, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
    color: "white",
  });
  return (
    <Box sx={{ background: "black", height: "300px" }}>
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
        <Box flex={1}>
          <Typography color={"white"} align="center">
            Contact us
          </Typography>
          <Typography color={"white"} align="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Typography>
          <Typography color={"white"} align="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Typography>
          <Typography color={"white"} align="center">
            Lorem ipsum dolor
          </Typography>
        </Box>

        <Box flex={1}>
          <Typography color={"white"} align="center">
            Data policy
          </Typography>
          <Typography color={"white"} align="center">
            cookies
          </Typography>
          <Typography color={"white"} align="center">
            Data safety
          </Typography>
        </Box>

        <Box flex={1}>
          <Typography color={"white"} align="center">
            Categories
          </Typography>
          <Typography color={"white"} align="center" variant="body2">
            Kids
          </Typography>
          <Typography color={"white"} align="center" variant="body2">
            Women
          </Typography>
          <Typography color={"white"} align="center" variant="body2">
            Men
          </Typography>
        </Box>
        <Box>
          <Typography color={"white"} align="center">
            Follow Us
          </Typography>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
