import React, { useState } from "react";

import "./Sign-In.scss";

import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../../store/user/reducer";

const Signin = () => {
  const [checked, setChecked] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState([]);

  const { users, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setChecked(event.target.checked);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();




    console.log(users);


    console.log("username:", username, "password: ", password);


    const user = users.find((user) => user.name === username);
    if (user) {
      if (user.password === password) {
        dispatch(setIsLoggedIn(true));
      } else {
        console.log("wrong password");
      }
    }
  };

  return (
    <>
      <div className="Login-text">Login</div>
      <div style={{ padding: 150 }}>
        <Paper>
          <Grid
            container
            spacing={3}
            direction={"column"}
            justifyContent={"center"}

            alignItems={"center"}
          >
            <form onSubmit={handleSubmit}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={""}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={""}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleOnChange}
                      label={"Keep me logged in"}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label="Keep me logged in"
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" fullWidth>
                  {" "}
                  Login{" "}
                </Button>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default Signin;
