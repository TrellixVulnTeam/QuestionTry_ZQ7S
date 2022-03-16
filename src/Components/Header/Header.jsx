import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="options">
        <Link className="option" to="/MyProfile">
          My Profile
        </Link>
      </div>
      <Link className="option" to="/HomePage">
        HomePage
      </Link>

      <div className="regsig">
        <Link className="option" to="/signin">
          {" "}
          SIGN IN{" "}
        </Link>
      </div>
      <div className="regsig">
        <Link className="option" to="/QuestionPage">
          {" "}
          Question{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
