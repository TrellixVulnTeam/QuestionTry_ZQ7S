import React, { useState } from "react";

import Signin from "../../Components/Sing-In/Sign-In";
import { Button, Grid } from "@material-ui/core";
import Register from "../../Components/Sign-Up/Sign-Up";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../../store/user/reducer";

import { useNavigate } from "react-router-dom";

const SignInAndSignUp = () => {
  const [visible, setVisible] = useState(false);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setVisible(!visible);
  };

  const navigate = useNavigate()

  const handleRegister = () => {
    setVisible(false);
  };

  const logOut = () => {
    dispatch(setIsLoggedIn(false));
  };
  if (isLoggedIn) {
    navigate('/')
    return (
      <Button onClick={logOut} fullWidth>
        Logout
      </Button>
    );
  }



  return (
    <div>
      {visible ? <Register onRegister={handleRegister} /> : <Signin />}
      <Grid container justifyContent="center">
        <Button
          className="VissibleButton"
          variant="contained"
          onClick={handleButtonClick}
        >
          {visible ? "Login" : "Register"}
        </Button>
      </Grid>
    </div>
  );
};

export default SignInAndSignUp;
