import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { format } from "date-fns";
import { Button, Comment, Form } from "semantic-ui-react";

import { Grid, TextField, Paper, Typography } from "@material-ui/core";

import { updatePassword } from "../../store/user/actions";

import api from "../../Api/db.json";

const EditProfile = ({ userId, password ,}) => {
  const [state, setState] = useState([]);

  const dispatch = useDispatch();

  const onUpdatePassword = () => {
    console.log(onUpdatePassword);
    dispatch(updatePassword({ body: [password, state], userId }));

  };

  const handleChange = () => {};

  return (
    <>
      <div className="Login-text">ChangePassword</div>
      <div style={{ padding: 150 }}>
        <form onUpdatePassword >
          <Paper>
            <Grid
              container
              spacing={3}
              direction={"column"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item xs={12}>
                <TextField
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  label="Password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  name="newPass"
                  value={""}
                  onChange={handleChange}
                  label="New Password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  name="confirmNewPass"
                  value={""}
                  onChange={handleChange}
                  label="confirmNewPass"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" fullWidth onClick={onUpdatePassword}> 
                  {" "}
                  ChangePassword{" "}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </div>
    </>
  );
};
export default EditProfile;
