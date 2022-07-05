import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ title, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to="/">
          <h1>{title}</h1>
        </Link>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "FEEDBACK UI",
  bgColor: "rgba(0,0,0,.5)",
  textColor: "#fff",
};
Header.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
