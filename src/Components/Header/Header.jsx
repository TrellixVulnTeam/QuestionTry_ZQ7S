import React from "react";
import { Link } from "react-router-dom";
import { IsLoggedIn } from "../../store/user/reducer";
import "./header.scss";
import { Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";


import { setIsLoggedIn } from "../../store/user/reducer";


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

  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(setIsLoggedIn(false));
  };


  let button;

  if (isLoggedIn) {

    button = <Link className="option" to="/signin">

      {" "}
      LOGOUT{" "}
    </Link>
  } else {
    button = <Link className="option" to="/signin">

      {" "}
      SIGN IN{" "}
    </Link>
  }





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
        <Link isLoggedIn={isLoggedIn} className="option" to="/signin">

          {button}
        </Link>
      </div>

      <div className="regsig">
        <Link className="option" to="/QuestionPage">
          {" "}
          Question{" "}
        </Link>

      </div>

      <div className="regsig">
        <div>


          <Badge badgeContent color="primary">
            <MailIcon color="action" />
          </Badge>

        </div>
      </div>

    </div>
  );
};

export default Header;
