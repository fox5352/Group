import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import GroupIcon from "@mui/icons-material/Group";
import ContrastIcon from "@mui/icons-material/Contrast";
import MenuIcon from "@mui/icons-material/Menu";
import { themes } from "../RootLayout";

const pages = ["Products", "Pricing", "Blog"];

type Header = {
  themeChange: (theme: string) => void;
};

export default function Header({ themeChange }: Header) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElTheme, setAnchorElTheme] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handelOpenThemeDropDown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTheme(event.currentTarget);
  };
  const handleCloseThemeDropDown = () => {
    setAnchorElTheme(null);
  };
  const handleThemeDropDownClick = (theme: string) => {
    themeChange(theme);
    handleCloseThemeDropDown();
  };

  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex" }}>
            <GroupIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              color="secondary"
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              GroupGoals
            </Typography>

            {/* mobile nav links */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="secondary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiPaper-root": {
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    color: (theme) => theme.palette.secondary.contrastText,
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* desktop nav */}
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              {/* theme dropdown */}
              <IconButton
                size="large"
                aria-label="theme button"
                aria-controls="theme-menu"
                aria-haspopup="true"
                onClick={handelOpenThemeDropDown}
                color="secondary"
                sx={{ display: "flex", marginY: "auto" }}
              >
                <ContrastIcon />
              </IconButton>
              <Menu
                id="theme-menu"
                anchorEl={anchorElTheme}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElTheme)}
                onClose={handleCloseThemeDropDown}
                sx={{
                  display: "block",
                  "& .MuiPaper-root": {
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    color: (theme) => theme.palette.secondary.contrastText,
                  },
                }}
              >
                {themes.map((theme) => (
                  <MenuItem
                    key={theme}
                    onClick={() => handleThemeDropDownClick(theme)}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {theme}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
