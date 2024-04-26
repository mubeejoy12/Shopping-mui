// import { Box, Stack, style, Typography } from "@mui/system";
import styled from "@emotion/styled";
import { Typography, Box, Stack } from "@mui/material";
import React from "react";
import kidsImages from "../../static/kids.jpg";
import menImages from "../../static/men.jpg";
import womenImages from "../../static/women.jpg";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const StyleTypography = styled(Typography)({
  // margin: "25%  50% 25% 50%",
  background: "white",
  opacity: " 0.8",
  width: "70%",
});
const Categories = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={5}
      >
        <StyledBox sx={{ backgroundImage: `url(${kidsImages})` }}>
          <StyleTypography align="center" variant="h3">
            Kids
          </StyleTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${menImages})` }}>
          {" "}
          <StyleTypography align="center" variant="h3">
            Men
          </StyleTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${womenImages})` }}>
          {" "}
          <StyleTypography align="center" variant="h3">
            Women
          </StyleTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
