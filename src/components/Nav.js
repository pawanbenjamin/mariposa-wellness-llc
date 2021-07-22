import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { Hidden } from "@material-ui/core";

import Logo from "../assets/mari-logo.svg";

import "./Nav.css";

const stylesObj = {
  display: "flex",
  justifyContent: "flex-end",
  height: "80px",
};

const linkContainer = {
  display: "flex",
  flexDirection: "row",
};

const linkStyle = {
  marginLeft: "10px",
  marginTop: "30px",
  textDecoration: "none",
  marginRight: "10px",
};

const logoStyle = {
  padding: "10px",
  height: "80px",
};

function Nav(props) {
  // useEffect(() => {
  //   var mySVG = document.getElementById("svg");
  //   mySVG.setAttribute("viewBox", "-5 -5 10 10");
  // }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="stylesObj">
      {/* <img src={Logo} className="logo" /> */}

      <div className="linkContainer">
        <Hidden xsDown>
          <Link className="linkStyle" to="/">
            <h4>Home</h4>
          </Link>
          <Link className="linkStyle" to="/about">
            <h4>About</h4>
          </Link>
          <Link className="linkStyle" to="/treatments">
            <h4>Treatments</h4>
          </Link>
          <Link className="linkStyle" to="/services">
            <h4>Services</h4>
          </Link>
          <Link className="linkStyle" to="/FAQ">
            <h4>FAQ</h4>
          </Link>
          <Link className="linkStyle" to="/contact">
            <h4
              style={{
                marginRight: "10px",
              }}
            >
              Contact
            </h4>
          </Link>
        </Hidden>
      </div>
      <div className="menu-icon">
        <Hidden smUp>
          <MenuRoundedIcon
            fontSize="large"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Open Menu
          </MenuRoundedIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleClose}>
              About
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleClose}>
              Treatments
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleClose}>
              Services
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleClose}>
              FAQ
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleClose}>
              Contact
            </MenuItem>
          </Menu>
        </Hidden>
      </div>
    </div>
  );
}

export default Nav;
