

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  InputBase,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Search, Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import ZEE5Logo from "../assets/ZEE5.png";

const Navbar = () => {
  const [moviesAnchor, setMoviesAnchor] = useState(null);
  const [tvAnchor, setTvAnchor] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMoviesOpen = (event) => setMoviesAnchor(event.currentTarget);
  const handleTvOpen = (event) => setTvAnchor(event.currentTarget);
  const handleClose = () => {
    setMoviesAnchor(null);
    setTvAnchor(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <>
      <Button color="inherit" onClick={handleMoviesOpen}>
        Movies
      </Button>
      <Menu anchorEl={moviesAnchor} open={Boolean(moviesAnchor)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Action</MenuItem>
        <MenuItem onClick={handleClose}>Comedy</MenuItem>
        <MenuItem onClick={handleClose}>Drama</MenuItem>
        <MenuItem onClick={handleClose}>Horror</MenuItem>
        <MenuItem onClick={handleClose}>Thriller</MenuItem>
      </Menu>

      <Button color="inherit" onClick={handleTvOpen}>
        TV Shows
      </Button>
      <Menu anchorEl={tvAnchor} open={Boolean(tvAnchor)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Reality</MenuItem>
        <MenuItem onClick={handleClose}>Drama</MenuItem>
        <MenuItem onClick={handleClose}>Kids</MenuItem>
        <MenuItem onClick={handleClose}>Sports</MenuItem>
        <MenuItem onClick={handleClose}>News</MenuItem>
      </Menu>

      <Button color="inherit">ILT20</Button>
      <Button color="inherit">Premium</Button>
      <Button color="inherit">News</Button>
    </>
  );

  const mobileMenuItems = (
    <List>
      <ListItem button onClick={handleMoviesOpen}>
        Movies
      </ListItem>
      <ListItem button onClick={handleTvOpen}>
        TV Shows
      </ListItem>
      <ListItem button>ILT20</ListItem>
      <ListItem button>Premium</ListItem>
      <ListItem button>News</ListItem>
    </List>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #1A0033 30%, #4A148C 100%)", // Deep Purple Gradient
        padding: "10px 20px",
        boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)", // Soft glow effect
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box component="img" src={ZEE5Logo} alt="ZEE5" sx={{ height: 50 }} />

        {/* Mobile View */}
        {isMobile ? (
          <>
            {/* Search and Menu Icon */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {searchOpen && (
                <motion.div initial={{ width: 0 }} animate={{ width: "200px" }} exit={{ width: 0 }}>
                  <InputBase
                    placeholder="Search..."
                    sx={{ background: "#fff", borderRadius: "5px", padding: "5px" }}
                  />
                </motion.div>
              )}
              <IconButton onClick={() => setSearchOpen(!searchOpen)} sx={{ color: "#fff" }}>
                <Search />
              </IconButton>

              <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Drawer for Mobile Menu */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box sx={{ width: 250 }}>{mobileMenuItems}</Box>
            </Drawer>
          </>
        ) : (
          /* Desktop View */
          <>
            {/* Navigation Links */}
            <Box sx={{ display: "flex", gap: 3 }}>{menuItems}</Box>

            {/* Search Box and Buy Plan Button */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {searchOpen && (
                <motion.div initial={{ width: 0 }} animate={{ width: "200px" }} exit={{ width: 0 }}>
                  <InputBase
                    placeholder="Search..."
                    sx={{ background: "#fff", borderRadius: "5px", padding: "5px" }}
                  />
                </motion.div>
              )}
              <IconButton onClick={() => setSearchOpen(!searchOpen)} sx={{ color: "#fff" }}>
                <Search />
              </IconButton>

              <Button variant="contained" sx={{ bgcolor: "#6A1B9A", "&:hover": { bgcolor: "#7B1FA2" } }}>
                Buy Plan
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
