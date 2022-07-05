import React from "react";
import { Link } from "react-router-dom";

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to="/about">
        <i class="fa fa-question fa-3x"></i>
      </Link>
    </div>
  );
};

export default AboutIconLink;
