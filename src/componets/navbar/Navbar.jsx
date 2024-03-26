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
