import {
  AppBar,
  Box,
  IconButton,
  MenuItem,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { API, Browser } from "../../config";
import { api } from "../../services/axios";
import { toggleTheme } from "../../state/redux/theme";
import { logoutUser } from "../../state/redux/user";

export default function Navbar() {
  const navigationItems = [{ title: "Register", linkTo: Browser.ENTRY }];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state) => state.theme.value);
  const user = useSelector((state) => state.user.detail);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = async () => {
    try {
      await api.delete(API.V1.ACCOUNT_LOGOUT);
    } finally {
      dispatch(logoutUser());
      localStorage.clear();
      navigate(Browser.ROOT);
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reception Register
          </Typography>
          {navigationItems.map((item) => (
            <div key={item.linkTo}>
              <MenuItem
                component={Link}
                to={item.linkTo}
                variant="h6"
                sx={{ flexGrow: 1 }}
              >
                {item.title}
              </MenuItem>
            </div>
          ))}
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClose={handleClose}>
                {user?.firstName} {user?.lastName}
              </MenuItem>
              <hr />
              <MenuItem
                onClick={() => {
                  dispatch(toggleTheme());
                  handleClose();
                }}
              >
                Switch to {mode === "light" ? "Dark" : "Light"} Mode
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
