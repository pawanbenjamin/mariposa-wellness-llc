import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { Hidden } from "@material-ui/core";

import bkg from "../assets/binding-light.png";

import "./Nav.css";

const useStyles = makeStyles(() => ({
  menu: {
    backgroundColor: "#A5D7DF",
    color: "#4A1C3E",
    backgroundImage: `url(${bkg})`,
    borderRadius: "5px",
  },
}));

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
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickServ = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseServ = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const classes = useStyles();

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

          <Link
            className="linkStyle"
            to="/services"
            aria-owns={anchorEl ? "simple-menu-1" : undefined}
            aria-haspopup={anchorEl ? "true" : undefined}
            onMouseOver={(e) => handleClickServ(e)}
          >
            <h4>Services</h4>
          </Link>
          {/* need menu for this dropdown here */}

          <Menu
            id="simple-menu-1"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            // classes={{ paper: classes.menu }}
            MenuListProps={{ onMouseLeave: handleCloseServ }}
            elevation={0}
            classes={{ paper: classes.menu }}
            style={{ zIndex: 1302 }}
          >
            <MenuItem className="menu-item">Services</MenuItem>
            <a
              className="anchor"
              onClick="return false;"
              href="/services#pre-post"
            >
              <MenuItem className="menu-item" onClick={handleClose}>
                Prenatal / Postpartum
              </MenuItem>
            </a>

            <a
              className="anchor"
              onClick="return false;"
              href="/services#gender"
            >
              <MenuItem className="menu-item" onClick={handleClose}>
                Gender Inclusive Pelvic Health
              </MenuItem>
            </a>
            <a
              className="anchor"
              onClick="return false;"
              href="/services#female"
            >
              <MenuItem className="menu-item" onClick={handleClose}>
                Female Pelvic Health
              </MenuItem>
            </a>
            <a className="anchor" onClick="return false;" href="/services#male">
              <MenuItem className="menu-item" onClick={handleClose}>
                Male Pelvic Health
              </MenuItem>
            </a>
            <a
              className="anchor"
              onClick="return false;"
              href="/services#chron"
            >
              <MenuItem className="menu-item" onClick={handleClose}>
                Chronic Pain
              </MenuItem>
            </a>
            <a className="anchor" onClick="return false;" href="/services#ed">
              <MenuItem
                className="menu-item"
                component={Link}
                to="/services#ed"
                onClick={handleClose}
              >
                Community Education
              </MenuItem>
            </a>
          </Menu>

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
            classes={{ paper: classes.menu }}
          >
            <MenuItem
              component={Link}
              to="/"
              style={{ color: "#4A1C3E" }}
              onClick={handleClose}
            >
              Home
            </MenuItem>
            <MenuItem
              style={{ color: "#4A1C3E" }}
              component={Link}
              to="/about"
              onClick={handleClose}
            >
              About
            </MenuItem>
            <MenuItem
              style={{ color: "#4A1C3E" }}
              component={Link}
              to="/treatments"
              onClick={handleClose}
            >
              Treatments
            </MenuItem>
            <MenuItem
              style={{ color: "#4A1C3E" }}
              component={Link}
              to="/services"
              onClick={handleClose}
            >
              Services
            </MenuItem>
            <MenuItem
              style={{ color: "#4A1C3E" }}
              component={Link}
              to="/FAQ"
              onClick={handleClose}
            >
              FAQ
            </MenuItem>
            <MenuItem
              style={{ color: "#4A1C3E" }}
              component={Link}
              to="/contact"
              onClick={handleClose}
            >
              Contact
            </MenuItem>
          </Menu>
        </Hidden>
      </div>
    </div>
  );
}

export default Nav;
