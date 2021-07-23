import { Hidden } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const stylesObj = {
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
  margin: "20px",
};

const linkStyle = {
  margin: "15px",
  "&:hover": {
    color: "#efefef",
  },
};

function Footer(props) {
  return (
    <div className="footer" style={stylesObj}>
      <Hidden smDown>
        <Link style={{ textDecoration: "none" }} to="/about">
          <h4 style={linkStyle}>About Marisa</h4>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/treatments">
          <h4 style={linkStyle}>Treatments</h4>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/services">
          <h4 style={linkStyle}>Services</h4>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/FAQ">
          <h4 style={linkStyle}>FAQ</h4>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contact">
          <h4 style={linkStyle}>Contact</h4>
        </Link>
      </Hidden>
      <span
        style={{
          margin: "8px",
          fontSize: "12px",
        }}
      >
        ©2021 Mariposa Wellness
      </span>
    </div>
  );
}

export default Footer;
