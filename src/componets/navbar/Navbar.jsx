import { Facebook, Instagram, Twitter } from "@mui/icons-material";
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
            {MenuItems.map((item) => (
              <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
                {item.Name}
              </Typography>
            ))}
            {MenuItems.map((item) => (
              <MenuItem sx={{ cursor: "pointer", fontSize: "14px" }}>
                {item.Name}
              </MenuItem>
