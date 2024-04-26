
import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Hero from "../hero/Hero";
import Recents from "../recents/Recents";
import Categories from "../Categories/Categories";
import RightBar from "../rightbar/RightBar";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Container>
        <Categories />
        <hr />
        <Stack direction={{xs: "column", sm: "column", lg: "row"}} spacing={8} mt={8}>
          <Box flex={3} sx={{ padding: "10px 100px 100px 100px" }}>
            <Recents />
          </Box>
          <Box flex={1}>
            <RightBar   />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
