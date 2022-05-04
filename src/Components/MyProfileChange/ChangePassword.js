import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { format } from "date-fns";
import { Button, Comment, Form } from "semantic-ui-react";

import { Grid, TextField, Paper, Typography } from "@material-ui/core";

import api from "../../Api/db.json";

const EditProfile = ({ userId, password }) => {
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();

  const handleChange = () => {};

  return (
    <>
      <div className="Login-text">ChangePassword</div>
      <div style={{ padding: 150 }}>
        <form onSubmit={""}>
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
                  name="confirmPassword"
                  value={""}
                  onChange={handleChange}
                  label="Confirm Password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" fullWidth>
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
