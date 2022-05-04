import React, { useState, useEffect } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Paper, TextField } from "@material-ui/core";
import { Button, Form, Grid, Input } from "semantic-ui-react";
import { fetchPosts } from "../../store/post/actions";
import { AddReply } from "./AddReply";
import Question from "../Post/Question";
import { QuestionAdd } from "./AddQuestion";

import {
  deletePost,
  getPost,
  setEdit,
  updatePost,
} from "../../store/post/actions";

const ListQuestionsOnly = () => {
  const { posts, loading, isLoggedIn } = useSelector((store) => {
    return {
      posts: store.post.posts,
      loading: store.post.loading,
      isLoggedIn: store.user.isLoggedIn,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("DISPATCH");
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Paper style={{ padding: "40px 20px" }}>
          <QuestionAdd />
        </Paper>

        <ListItem alignItems="flex-start">
          <ListItemText
            primary="List All Questions and comments , ASK IF YOU ARE LOGGED"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {posts.map((post) => (
                  <div>
                    <Paper style={{ padding: "40px 20px" }}>
                      <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                          <Avatar alt="Remy Sharp" />
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                          <h4 style={{ margin: 0, textAlign: "left" }}>
                            {post.first_name}
                          </h4>

                          {post.time}
                        </Grid>
                        <Grid justifyContent="right" item xs zeroMinWidth>
                          <p>{post.body}</p>
                        </Grid>
                      </Grid>
                      <div>
                        <Paper style={{ margin: "10px", padding: "10px 20px" }}>
                          <Grid container wrap="nowrap" spacing={2}>
                            <Grid
                              justifyContent="left"
                              item
                              xs
                              zeroMinWidth
                            ></Grid>
                          </Grid>
                        </Paper>
                      </div>
                    </Paper>
                  </div>
                ))}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
};

export default ListQuestionsOnly;
