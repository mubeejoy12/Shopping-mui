import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
// import  { Instagram, FacebookIcon, Twitter } from "@mui/icons-material/";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });

  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });

  const MenuItems = [
    { Name: "Home", Link: "#" },
    { Name: "Prooducts", Link: "#" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact Us", Link: "#" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar sx={{ background: "black" }}>
        <StyledToolbar>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
          <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
                {item.Name}
              </Typography>
            ))}
          </MenuBox>
          <SearchBox>
            <InputBase placeholder="Search..." sx={{ color: "white" }} />
            <MenuIcon
              sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            />
          </SearchBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
        //   anchorEl={anchorEl}
          open={true}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
            <Box sx={{width:350, height: "90vh"}}>
            {MenuItems.map((item) => (
              <MenuItem sx={{ cursor: "pointer", fontSize: "14px" }}>
                {item.Name}
              </MenuItem>
            ))}
            
            </Box>
          
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
