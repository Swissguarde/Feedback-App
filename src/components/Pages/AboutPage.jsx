import React from "react";
import Card from "../../shared/Card";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React App to leave feedback for a service or product</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">
            <a href="/">Back To Home</a>
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
