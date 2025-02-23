import { Avatar, Grid2, styled, Typography, Link } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const StyledNavbar = styled(Grid2)(() => ({
  padding: "1rem",
  backgroundColor: "#2f354a",
  color: "#fff",
  "& .brandLogo span": {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  "& a": {
    color: "#fff",
  },
}));

const Navbar = () => {
  return (
    <StyledNavbar
      justifyContent={"space-between"}
      alignItems={"center"}
      container>
      <Grid2 className="brandLogo" gap={1} alignItems={"center"} container>
        <Typography component="span" style={{ color: "#00bdb8" }}>
          H
        </Typography>
        <Typography component="span">O</Typography>
        <Typography component="span">U</Typography>
        <Typography component="span">R</Typography>
        <Typography component="span">S</Typography>
      </Grid2>
      <Grid2 gap={5} alignItems={"center"} container>
        <Link href="#" underline="always">
          <Typography>Dashboard</Typography>
        </Link>
        <Link href="#" underline="none">
          <Typography>Projects</Typography>
        </Link>
        <Link href="#" underline="none">
          <Typography>Team</Typography>
        </Link>
        <Link href="#" underline="none">
          <Typography>Clients</Typography>
        </Link>
        <Link href="#" underline="none">
          <Typography>Time</Typography>
        </Link>
        <Link href="#" underline="none">
          <Typography>Reports</Typography>
        </Link>
      </Grid2>
      <Grid2 gap={1} alignItems={"center"} container>
        <NotificationsNoneIcon />
        <Grid2 alignItems={"center"} gap={1} container>
          <Avatar alt="Mario" src="https://picsum.photos/id/1/200/" />
          <Typography>Mario</Typography>
        </Grid2>
      </Grid2>
    </StyledNavbar>
  );
};

export default Navbar;
