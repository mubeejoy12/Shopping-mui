import React from "react";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import postImage from "../../static/image1.jpg";
import postImage2 from "../../static/image2.jpg";
import postImage3 from "../../static/image3.jpg";
import postImage4 from "../../static/image4.jpg";
import Card from "../crad/Card";

const RightBar = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "none", lg: "block" } }}>
      <Typography align="center" bgcolor={"black"} color={"white"}>
        Most Popular
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem sx={{ alignItems: "flex-end" }}>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              sx={{ height: 80, width: 80 }}
              variant="square"
              src={postImage}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem sx={{ alignItems: "flex-end" }}>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              sx={{ height: 80, width: 80 }}
              variant="square"
              src={postImage2}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem sx={{ alignItems: "flex-end" }}>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              sx={{ height: 80, width: 80 }}
              variant="square"
              src={postImage3}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <ListItem sx={{ alignItems: "flex-end" }}>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              sx={{ height: 80, width: 80 }}
              variant="square"
              src={postImage4}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <Divider variant="insert" component={"li"}></Divider>
      </List>
      <Typography align="center" bgcolor={"black"} color={"white"}>
        About Us
      </Typography>
      <Card cardImage={postImage3} />
    </Box>
  );
};

export default RightBar;
