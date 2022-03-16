import React, { useState, useEffect } from "react";

import "./Sign-Up.scss";

import { format } from "date-fns";
import { Button, Comment, Form } from "semantic-ui-react";

import { Grid, TextField, Paper, Typography } from "@material-ui/core";

import api from "../../Api/db.json";

const Register = ({ onRegister }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = userDetails;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const createUser = async () => {
    await fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUser();
    onRegister();
  };

  return (
    <>
      <div className="Login-text">Register</div>
      <div style={{ padding: 150 }}>
        <form onSubmit={handleSubmit}>
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
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  label="Name"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  label="Email"
                  required
                />
              </Grid>
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
                  value={confirmPassword}
                  onChange={handleChange}
                  label="Confirm Password"
                  required
                />
              </Grid>
              <Typography>Already Have Acc ? </Typography>
              <Grid item xs={12}>
                <Button type="submit" fullWidth>
                  {" "}
                  Register{" "}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </div>
    </>
  );
};
export default Register;
