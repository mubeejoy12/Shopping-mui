import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import detailsImage from "../../static/image5.jpg";

const Details = () => {
  return (
    <Box>
      <Box
        sx={{
          background: `url(${detailsImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          color="black"
          variant="h2"
          sx={{ fontWeight: 900, padding: 10 }}
        >
          Clicked Post Title
        </Typography>
      </Box>
      <Container>
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
            <Typography
              m={4}
              align="center"
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              optio, voluptatum aut molestiae ullam tempora tenetur iusto quas
              saepe assumenda incidunt officia sunt quod nulla deserunt labore
              dolores beatae facilis quidem accusamus at cumque
            </Typography>
            <CardMedia
              component={"img"}
              height={"300px"}
              image={postImage}
              alt="green iguana"
            />
            <Typography align="center" variant="h4" mt={2}>
              {" "}
              wait for it wait
            </Typography>
            <Typography
              m={4}
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              numquam aliquid accusantium quibusdam dolorem libero repellat
              rerum odio reprehenderit sapiente commodi modi voluptatem nemo in,
              iste quia corrupti nam, consequuntur quis deserunt expedita aut
              magni itaque similique! Consequatur nam nemo blanditiis earum
              cupiditate, natus sint eius, placeat perspiciatis, tenetur esse
              accusantium reiciendis fugit doloremque accusamus culpa? Culpa
              distinctio doloremque sit aspernatur voluptates aliquam nemo
              voluptatum, sed ullam quas molestiae perferendis nostrum iusto,
              blanditiis nesciunt. Hic consequuntur neque facilis perferendis
              omnis, debitis dolor minus maxime voluptas vitae rem perspiciatis
              alias commodi eaque voluptatibus quas consectetur et ab. Eaque
              iusto eos obcaecati!
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Details;
