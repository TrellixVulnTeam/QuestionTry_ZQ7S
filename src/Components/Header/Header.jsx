import React from "react";
import { Link } from "react-router-dom";
import { IsLoggedIn } from "../../store/user/reducer";
import "./header.scss";

import { useSelector } from "react-redux";




import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';



const Header = () => {

  const { posts, loading, isLoggedIn } = useSelector((store) => {
    return {
      posts: store.post.posts,

      loading: store.post.loading,
      isLoggedIn: store.user.isLoggedIn,
      

    };
  });
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

      <div className="regsig">
     
      <Badge badgeContent={4} color="primary">
  <MailIcon color="action" />
</Badge>
      </div>
     
     

    



      }
    </div>
  );
};

export default Header;
